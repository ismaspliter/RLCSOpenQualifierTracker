import React, { useState, useEffect, useMemo, lazy, Suspense } from 'react';
import Papa from 'papaparse';
import CountryFilter from './CountryFilter';
import StatusFilter from './StatusFilter';
import LoadingAnimation from './LoadingAnimation';
import "@fontsource/bebas-neue";

const TeamCard = lazy(() => import('./TeamCard'));


const TournamentDashboard = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [commonCountries, setCommonCountries] = useState([]);
  const [filterVisible, setFilterVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vTbh95XSTt32crvr_4iW_6WdIOHLYWn_x0oYiRODrz1BLR8cvbnzwTSvwu3F6NDgsje-G9Fc5Olnft9/pub?gid=1795490302&single=true&output=csv');
        const csvText = await response.text();
        
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const countryCounts = {};
            const processedData = results.data.map(row => {
              const players = [
                { name: row['jugador 1'], country: row['pais jugador 1']?.toLowerCase() },
                { name: row['jugador 2'], country: row['pais jugador 2']?.toLowerCase() },
                { name: row['jugador 3'], country: row['pais jugador 3']?.toLowerCase() }
              ].filter(player => player.name && player.country);
              
              players.forEach(player => {
                countryCounts[player.country] = (countryCounts[player.country] || 0) + 1;
              });
              
              return {
                name: row.nombre,
                image: row.IMAGEN || null,
                seed: parseInt(row.seeding),
                status: row.Estado === 'TRUE' ? 'Winner Bracket' : row.Estado === 'FALSE' ? 'Loser Bracket' : 'Not Started',
                players: players.map(player => ({
                  name: player.name,
                  country: player.country || 'default'
                }))
              };
            });
            
            const topCountries = Object.entries(countryCounts)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 10)
              .map(([country]) => ({ code: country, name: country.charAt(0).toUpperCase() + country.slice(1) }));
            
            setTeams(processedData);
            setCommonCountries(topCountries);
            setLoading(false);
          },
          error: (error) => {
            setError(error.message);
            setLoading(false);
          }
        });
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filteredTeams = useMemo(() => {
    return teams.filter(team => 
      (!selectedCountry || team.players.some(player => player.country === selectedCountry)) &&
      (!selectedStatus || selectedStatus === 'All' || team.status === selectedStatus)
    );
  }, [selectedCountry, selectedStatus, teams]);

  return (
    <div className="h-screen bg-gray-900 flex flex-col w-full px-6 pt-4">
      <div className="bg-gradient-to-r from-blue-700 to-orange-800 text-white p-8 flex justify-between items-center shadow-lg flex-shrink-0 w-full rounded-b-2xl">
        <div>
          <h1 className="text-4xl font-extrabold font-bebas-neue">Live Tracker Open Qualifier EUROPE #2</h1>
          <p className="text-md text-gray-200 italic">*Based on the data indicated and visible in startGG, it may contain errors as it depends on player data.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-lg font-semibold">@ismaspliter</p>
            <p className="text-sm text-gray-300">IA Powered</p>
          </div>
          <img src="/profile.jpg" alt="Profile" className="w-14 h-14 rounded-full border-4 border-white shadow-lg" />
        </div>
        <button 
          className="px-5 py-3 text-white bg-orange-600 rounded-xl hover:bg-blue-700 shadow-md transition-all"
          onClick={() => setFilterVisible(!filterVisible)}
        >
          {filterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
      {filterVisible && (
        <div className="bg-gray-800 p-4 flex-shrink-0 w-full">
          <CountryFilter 
            commonCountries={commonCountries} 
            selectedCountry={selectedCountry} 
            setSelectedCountry={setSelectedCountry} 
          />
          <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
        </div>
      )}
      <div className="flex-1 overflow-y-auto p-4 bg-gray-900 w-full">{loading ? <LoadingAnimation /> : <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">{filteredTeams.map((team, index) => (<TeamCard key={index} team={team} className="max-w-xs" />))}</div>}</div>
    </div>
  );
};

export default TournamentDashboard;

