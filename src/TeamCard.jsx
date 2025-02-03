import React, { useState, useEffect } from 'react';
import { Trophy, Skull, Clock, Tv } from 'lucide-react';

const countryToCode = {
  'spain': 'es', 'switzerland': 'ch', 'denmark': 'dk', 'germany': 'de', 'united kingdom': 'gb',
  'sweden': 'se', 'portugal': 'pt', 'netherlands': 'nl', 'france': 'fr', 'latvia': 'lv',
  'greece': 'gr', 'cyprus': 'cy', 'croatia': 'hr', 'belgium': 'be', 'austria': 'at',
  'poland': 'pl', 'argentina': 'ar', 'italy': 'it', 'norway': 'no', 'slovakia': 'sk',
  'lebanon': 'lb', 'hungary': 'hu', 'slovenia': 'si', 'czech republic': 'cz', 'romania': 'ro',
  'algeria': 'dz', 'thailand': 'th', 'saudi arabia': 'sa', 'bulgaria': 'bg', 'finland': 'fi',
  'faroe islands': 'fo', 'albania': 'al', 'ireland': 'ie', 'malta': 'mt', 'lithuania': 'lt',
  'egypt': 'eg', 'ukraine': 'ua', 'russia': 'ru', 'estonia': 'ee', 'luxembourg': 'lu',
  'vietnam': 'vn', 'belarus': 'by', 'georgia': 'ge', 'canada': 'ca', 'morocco': 'ma',
  'brazil': 'br', 'turkey': 'tr', 'united states': 'us', 'united arab emirates': 'ae', 'israel': 'il',
  'colombia': 'co', 'iceland': 'is', 'palestine': 'ps', 'kazakhstan': 'kz', 'serbia': 'rs',
  'azerbaijan': 'az', 'bosnia and herzegovina': 'ba', 'jordan': 'jo', 'tunisia': 'tn',
  'mexico': 'mx', 'qatar': 'qa', 'libya': 'ly', 'kosovo': 'xk', 'armenia': 'am'
};

const statusStyles = {
  'Not Started': {
    color: 'text-gray-400',
    bgColor: 'bg-gray-800',
    icon: <Clock size={14} />,
  },
  'Winner Bracket': {
    color: 'text-green-400',
    bgColor: 'bg-green-900/30',
    icon: <Trophy size={14} />,
  },
  'Loser Bracket': {
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-900/30',
    icon: <Trophy size={14} />,
  },
  'Eliminated': {
    color: 'text-red-400',
    bgColor: 'bg-red-900/30',
    icon: <Skull size={14} />,
  },
};

const getFlagPath = (countryName) => {
  const country = countryToCode[countryName];
  return country ? `${process.env.PUBLIC_URL}/flags/${country}.svg` : `${process.env.PUBLIC_URL}/flags/default.svg`;
};
const TeamCard = ({ team }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 🔹 Versión móvil compacta
  if (isMobile) {
    return (
      <div className="flex flex-col bg-gray-800 rounded-lg p-2 border border-gray-700 shadow-md">
        {/* Header con logo + estado */}
        <div className="flex items-center justify-between">
          {/* Logo del equipo */}
          <div className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-md">
            {team.image ? (
              <img src={`${team.image}?quality=50`} alt={team.name} className="w-full h-full object-cover rounded-md" />
            ) : (
              <span className="text-lg font-bold text-white">{team.name.substring(0, 2).toUpperCase()}</span>
            )}
          </div>

          {/* Nombre del equipo + Estado */}
          <div className="flex-1 mx-2">
            <h3 className="text-sm font-bold text-white">{team.name}</h3>
            <div className="text-xs text-gray-400 flex items-center gap-1">
              <Trophy size={12} />
              <span>Seed #{team.seed}</span>
            </div>
          </div>

          {/* Estado del equipo */}
          <div className={`px-2 py-1 ${statusStyles[team.status].bgColor} rounded-md flex items-center`}>
            {statusStyles[team.status].icon}
            <span className={`text-xs ${statusStyles[team.status].color} ml-1`}>{team.status}</span>
          </div>
        </div>

        {/* Lista de jugadores */}
        <div className="mt-2 flex flex-wrap gap-1">
          {team.players.map((player, index) => (
            <div key={index} className="flex items-center gap-1 bg-gray-700/40 px-2 py-1 rounded-md">
              <img src={getFlagPath(player.country)} alt={player.country} className="w-4 h-3 object-cover rounded-sm" />
              <span className="text-xs text-gray-200">{player.name}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 🔹 Diseño original para pantallas grandes
  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800 p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-45">
          {team.image ? (
            <img src={team.image} alt={team.name} className="w-full h-full object-cover" />
          ) : (
            <span className="text-[150px] font-bold text-white select-none">
              {team.name.substring(0, 2).toUpperCase()}
            </span>
          )}
        </div>
      </div>

      <div className={`absolute top-0 right-0 ${statusStyles[team.status].bgColor} px-3 py-1.5 rounded-bl-xl flex items-center gap-1.5 z-10`}>
        {statusStyles[team.status].icon}
        <span className={`${statusStyles[team.status].color} text-sm font-medium`}>{team.status}</span>
      </div>

      <div className="pt-8 pb-4 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
        <div className="flex items-center gap-2 text-gray-400">
          <Trophy size={16} />
          <span>Seed #{team.seed}</span>
        </div>
      </div>

      <div className="relative z-10">
        <h4 className="text-sm font-medium text-gray-400 mb-2">Roster</h4>
        <div className="flex flex-wrap gap-2">
          {team.players.map((player, index) => (
            <div key={index} className="flex items-center gap-2 bg-gray-700/40 px-2 py-1 rounded-md">
              <img src={getFlagPath(player.country)} alt={player.country} className="w-4 h-3 object-cover rounded-sm" />
              <span className="text-xs text-gray-200">{player.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
