import React from "react";
import CountryFilter from "./CountryFilter";
import StatusFilter from "./StatusFilter";

const Filters = ({
  commonCountries,
  selectedCountry,
  setSelectedCountry,
  selectedStatus,
  setSelectedStatus,
  searchQuery,
  setSearchQuery,
  selectedPool,
  setSelectedPool
}) => {
  return (
    <div className="bg-gray-800/50 p-2 w-full flex flex-col gap-6 mt-[80px] rounded-lg md:flex-row md:items-center md:justify-around md:p-4">
      {/* Search field */}
      <div className="flex flex-col md:w-2/8">
        <label htmlFor="searchInput" className="text-sm text-gray-300 mb-1">
          - Search -
        </label>
        <input
          id="searchInput"
          type="text"
          placeholder="Team or player..."
          className="p-2 rounded-md border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Country filter */}
      <div className="flex flex-col md:w-3/8">
        <label htmlFor="countryFilter" className="text-sm text-gray-300 mb-1">
          - Country -
        </label>
        {commonCountries.length > 0 ? (
          <CountryFilter
            id="countryFilter"
            commonCountries={commonCountries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        ) : (
          <p className="text-gray-400 text-sm">No countries available</p>
        )}
      </div>

      {/* Status filter */}
      <div className="flex flex-col md:w-2/8">
        <label htmlFor="statusFilter" className="text-sm text-gray-300 mb-1">
          - Status -
        </label>
        <StatusFilter
          id="statusFilter"
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </div>

      {/* Pool filter */}
      <div className="flex flex-col md:w-1/8">
        <label htmlFor="poolFilter" className="text-sm text-gray-300 mb-1">
          - Pool -
        </label>
        <select
          id="poolFilter"
          value={selectedPool}
          onChange={(e) => setSelectedPool(e.target.value)}
          className="p-2 rounded-md border border-gray-700 bg-gray-900 text-white text-sm focus:outline-none focus:border-blue-500"
        >
          <option value="">All</option>
          {[...Array(10)].map((_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filters;
