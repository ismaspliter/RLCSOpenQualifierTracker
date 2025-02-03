import React from 'react';
import { Trophy, Skull, Clock, Tv } from 'lucide-react';

// Mapeo de países a códigos ISO (mantenemos esto para los nombres de archivo)
const countryToCode = {
    'spain': 'es',
    'switzerland': 'ch',
    'denmark': 'dk',
    'germany': 'de',
    'united kingdom': 'gb',
    'sweden': 'se',
    'portugal': 'pt',
    'netherlands': 'nl',
    'france': 'fr',
    'latvia': 'lv',
    'greece': 'gr',
    'cyprus': 'cy',
    'croatia': 'hr',
    'belgium': 'be',
    'austria': 'at',
    'poland': 'pl',
    'argentina': 'ar',
    'italy': 'it',
    'norway': 'no',
    'slovakia': 'sk',
    'lebanon': 'lb',
    'hungary': 'hu',
    'slovenia': 'si',
    'czech republic': 'cz',
    'romania': 'ro',
    'algeria': 'dz',
    'thailand': 'th',
    'saudi arabia': 'sa',
    'bulgaria': 'bg',
    'finland': 'fi',
    'faroe islands': 'fo',
    'albania': 'al',
    'ireland': 'ie',
    'malta': 'mt',
    'lithuania': 'lt',
    'egypt': 'eg',
    'ukraine': 'ua',
    'russia': 'ru',
    'estonia': 'ee',
    'åland islands': 'ax',
    'luxembourg': 'lu',
    'vietnam': 'vn',
    'belarus': 'by',
    'georgia': 'ge',
    'canada': 'ca',
    'morocco': 'ma',
    'brazil': 'br',
    'turkey': 'tr',
    'united states': 'us',
    'united arab emirates': 'ae',
    'israel': 'il',
    'colombia': 'co',
    'iceland': 'is',
    'palestine': 'ps',
    'kazakhstan': 'kz',
    'serbia': 'rs',
    'azerbaijan': 'az',
    'bosnia and herzegovina': 'ba',
    'jordan': 'jo',
    'tunisia': 'tn',
    'mexico': 'mx',
    'qatar': 'qa',
    'libya': 'ly',
    'kosovo': 'xk',
    'armenia': 'am',
    '':'default'
  };
  

const TeamCard = ({ team }) => {
  console.log("Team data:", team);
  const statusStyles = {
    'Not Started': {
      color: 'text-gray-400',
      bgColor: 'bg-gray-800',
      icon: <Clock size={20} />,
    },
    'Winner Bracket': {
      color: 'text-green-400',
      bgColor: 'bg-green-900/30',
      icon: <Trophy size={20} />,
    },
    'Loser Bracket': {
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/30',
      icon: <Trophy size={20} />,
    },
    'Eliminated': {
      color: 'text-red-400',
      bgColor: 'bg-red-900/30',
      icon: <Skull size={20} />,
    },
  };

  const status = statusStyles[team.status];

  // Función para obtener la ruta de la bandera
  const getFlagPath = (countryName) => {
    const code = countryToCode[countryName];
    return code ? `/flags/${code}.svg` : null;
  };

  // Función de debug para verificar las rutas
  const debugImageLoad = (event, country) => {
    console.log(`Flag load ${event.type} for ${country}:`, event.target.src);
  };

  return (
    <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-gray-800 p-4">
      {/* Team background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-45">
          {team.image ? (
            <img
              src={team.image}
              alt={team.name}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-[150px] font-bold text-white select-none">
              {team.name.substring(0, 2).toUpperCase()}
            </span>
          )}
        </div>
      </div>

      {/* Status Badge */}
      <div className={`absolute top-0 right-0 ${status.bgColor} px-3 py-1.5 rounded-bl-xl flex items-center gap-1.5 z-10`}>
        {status.icon}
        <span className={`${status.color} text-sm font-medium`}>
          {team.status}
        </span>
      </div>

      {/* Stream Badge */}
      {team.streamUrl && (
        <a
          href={team.streamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-2 left-2 px-2 py-1 rounded-lg z-10 flex items-center gap-1.5 bg-gray-800/80 backdrop-blur-sm transition-colors duration-300 group"
        >
          <Tv size={14} className="text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
          <span className="text-xs font-medium text-gray-400 group-hover:text-red-500 transition-colors duration-300">
            LIVE
          </span>
        </a>
      )}

      {/* Team Info */}
      <div className="pt-8 pb-4 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
        <div className="flex items-center gap-2 text-gray-400">
          <Trophy size={16} />
          <span>Seed #{team.seed}</span>
        </div>
      </div>

      {/* Players List */}
      <div className="relative z-10">
        <h4 className="text-sm font-medium text-gray-400 mb-2">Roster</h4>
        <div className="grid gap-1.5">
          {team.players.map((player, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg">
              <div className="relative flex items-center gap-3 bg-gray-700/80 backdrop-blur p-2">
                <span className="text-gray-200 font-medium">{player.name}</span>
                <div className="ml-auto relative w-10 h-6 overflow-hidden rounded-sm">
                    <div 
                        className="absolute inset-0 flex items-center justify-center"
                        
                    />
                    {getFlagPath(player.country) && (
                        <img
                        src={getFlagPath(player.country)}
                        alt={player.country}
                        onError={(e) => {
                            e.target.src = "/flags/default.svg";
                        }}
                        className="absolute inset-0 w-full h-full object-cover"
                        />
                    )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;