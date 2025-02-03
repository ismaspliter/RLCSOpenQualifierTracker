import React from 'react';
import { Trophy, Skull, Circle, List } from 'lucide-react';

const StatusFilter = ({ selectedStatus = 'All', setSelectedStatus }) => {
  return (
    <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2 mt-4 max-w-full">
      <button 
        className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors duration-200 
          ${selectedStatus === 'All' ? 'border-blue-500 bg-blue-500/20 text-blue-400' : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`} 
        onClick={() => setSelectedStatus && setSelectedStatus('All')}
      >
        <List size={14} /> <span>All</span>
      </button>
      <button 
        className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors duration-200 
          ${selectedStatus === 'Winner Bracket' ? 'border-green-500 bg-green-500/20 text-green-400' : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`} 
        onClick={() => setSelectedStatus && setSelectedStatus('Winner Bracket')}
      >
        <Trophy size={14} /> <span>Winner</span>
      </button>
      <button 
        className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors duration-200 
          ${selectedStatus === 'Loser Bracket' ? 'border-yellow-500 bg-yellow-500/20 text-yellow-400' : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`} 
        onClick={() => setSelectedStatus && setSelectedStatus('Loser Bracket')}
      >
        <Circle size={14} /> <span>Loser</span>
      </button>
      <button 
        className={`flex items-center gap-2 px-3 py-2 text-xs sm:text-sm rounded-lg border transition-colors duration-200 
          ${selectedStatus === 'Not Started' ? 'border-red-500 bg-red-500/20 text-red-400' : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`} 
        onClick={() => setSelectedStatus && setSelectedStatus('Not Started')}
      >
        <Skull size={14} /> <span>KO</span>
      </button>
    </div>
  );
};

export default StatusFilter;
