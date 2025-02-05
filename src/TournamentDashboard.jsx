// TournamentDashboard.js
import React, { useState, useEffect, useMemo } from 'react';
import Papa from 'papaparse';
import LoadingAnimation from './LoadingAnimation';
import Header from './Header';
import TeamList from './TeamList';
import InfoToast from './InfoToast';

const TournamentDashboard = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [commonCountries, setCommonCountries] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);
  const [teamsToShow, setTeamsToShow] = useState(25);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/data.csv?v=${new Date().getTime()}`)
        const csvText = await response.text();

        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const countryCounts = {};
            const processedData = results.data.map(row => {
              const players = [
                {
                  name: row['jugador 1'] || "",
                  country: row['pais jugador 1']?.toLowerCase() || ""
                },
                {
                  name: row['jugador 2'] || "",
                  country: row['pais jugador 2']?.toLowerCase() || ""
                },
                {
                  name: row['jugador 3'] || "",
                  country: row['pais jugador 3']?.toLowerCase() || ""
                }
              ]
              .filter(player => player.name);

              players.forEach(player => {
                if (player.country) {
                  countryCounts[player.country] = (countryCounts[player.country] || 0) + 1;
                }
              });

              return {
                name: row.nombre,
                image: row.IMAGEN || null,
                seed: parseInt(row.seeding),
                status: row.Estado === 'Pending'
                  ? 'Not Started'
                  : row.Estado === 'Winner'
                    ? 'Winner'
                    : row.Estado === 'Loser'
                    ? 'Loser'
                    : 'Eliminated',
                players: players.map(player => ({
                  name: player.name,
                  country: player.country
                }))
              };
            });

            const topCountries = Object.entries(countryCounts)
              .filter(([country]) => country && country !== 'default')
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5)
              .map(([country]) => ({
                code: country,
                name: country.charAt(0).toUpperCase() + country.slice(1)
              }));

            setTeams(processedData);
            setCommonCountries(topCountries);
            setLoading(false);
          }
        });
      } catch (error) {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredTeams = useMemo(() =>
    teams.filter(team =>
      (!selectedCountry || team.players.some(player => player.country === selectedCountry)) &&
      (!selectedStatus || selectedStatus === 'All' || team.status === selectedStatus) &&
      (team.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        team.players.some(player => player.name.toLowerCase().includes(searchQuery.toLowerCase())))
    ),
    [selectedCountry, selectedStatus, searchQuery, teams]
  );

  

  return (
    <div className="min-h-screen w-full bg-gray-900 flex flex-col">
      <Header
        filterVisible={filterVisible}
        setFilterVisible={setFilterVisible}
        commonCountries={commonCountries}
        selectedCountry={selectedCountry}
        setSelectedCountry={setSelectedCountry}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
      {loading
        ? <LoadingAnimation />
        : <TeamList
            displayedTeams={filteredTeams.slice(0, teamsToShow)}
            loadMoreTeams={() => setTeamsToShow(prev => prev + 25)}
            filteredTeams={filteredTeams}
          />
      }
    </div>
  );
};

export default TournamentDashboard;
