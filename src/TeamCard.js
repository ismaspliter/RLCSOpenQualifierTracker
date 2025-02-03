import React from 'react';
import { Trophy, Skull, Clock, Tv } from 'lucide-react';
import PlayerList from './PlayerList';

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

const TeamCard = ({ team }) => {
  const status = statusStyles[team.status];
  
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
      
      <div className={`absolute top-0 right-0 ${status.bgColor} px-3 py-1.5 rounded-bl-xl flex items-center gap-1.5 z-10`}>
        {status.icon}
        <span className={`${status.color} text-sm font-medium`}>{team.status}</span>
      </div>
      
      {team.streamUrl && (
        <a href={team.streamUrl} target="_blank" rel="noopener noreferrer" className="absolute top-2 left-2 px-2 py-1 rounded-lg z-10 flex items-center gap-1.5 bg-gray-800/80 backdrop-blur-sm transition-colors duration-300 group">
          <Tv size={14} className="text-gray-400 group-hover:text-red-500 transition-colors duration-300" />
          <span className="text-xs font-medium text-gray-400 group-hover:text-red-500 transition-colors duration-300">LIVE</span>
        </a>
      )}
      
      <div className="pt-8 pb-4 relative z-10">
        <h3 className="text-xl font-bold text-white mb-2">{team.name}</h3>
        <div className="flex items-center gap-2 text-gray-400">
          <Trophy size={16} />
          <span>Seed #{team.seed}</span>
        </div>
      </div>
      
      <div className="relative z-10">
        <h4 className="text-sm font-medium text-gray-400 mb-2">Roster</h4>
        <PlayerList players={team.players} />
      </div>
    </div>
  );
};

export default TeamCard;