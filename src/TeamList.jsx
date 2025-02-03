import React from "react";
import TeamCard from "./TeamCard";

const TeamList = ({ displayedTeams, loadMoreTeams, filteredTeams }) => {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-900 w-full mt-[80px]">
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        {displayedTeams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
      {displayedTeams.length < filteredTeams.length && (
        <div className="flex justify-center mt-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition" onClick={loadMoreTeams}>
            Load More Teams...
          </button>
        </div>
      )}
    </div>
  );
};

export default TeamList;
