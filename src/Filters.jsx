import React from "react";
import CountryFilter from "./CountryFilter";
import StatusFilter from "./StatusFilter";

const Filters = ({ commonCountries, selectedCountry, setSelectedCountry, selectedStatus, setSelectedStatus, searchQuery, setSearchQuery }) => {
  return (
    <div className="bg-gray-800 p-4 flex-shrink-0 w-full flex flex-col gap-4 mt-[80px]">
      <input 
        type="text" 
        placeholder="Search team or player..." 
        className="p-2 rounded-md border border-gray-600 bg-gray-900 text-white text-sm focus:outline-none focus:border-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      
      {/* 🔹 Si no hay países disponibles, mostrar mensaje */}
      {commonCountries.length > 0 ? (
        <CountryFilter 
          commonCountries={commonCountries} 
          selectedCountry={selectedCountry} 
          setSelectedCountry={setSelectedCountry} 
        />
      ) : (
        <p className="text-gray-400 text-sm text-center">No country data available</p>
      )}

      <StatusFilter selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} />
    </div>
  );
};

export default Filters;
