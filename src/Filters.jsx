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
  setSearchQuery
}) => {
  return (
    <div className="bg-gray-800 p-4 w-full flex flex-col gap-6 mt-[80px]">
      {/* Search field */}
      <div className="flex flex-col">
        <label htmlFor="searchInput" className="text-sm text-gray-300 mb-1">
          Search
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
      <div className="flex flex-col">
        <label htmlFor="countryFilter" className="text-sm text-gray-300 mb-1">
          Country
        </label>
        {commonCountries.length > 0 ? (
          <CountryFilter
            id="countryFilter"
            commonCountries={commonCountries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        ) : (
          <p className="text-gray-400 text-sm">
            No countries available
          </p>
        )}
      </div>

      {/* Status filter */}
      <div className="flex flex-col">
        <label htmlFor="statusFilter" className="text-sm text-gray-300 mb-1">
          Status
        </label>
        <StatusFilter
          id="statusFilter"
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
        />
      </div>
    </div>
  );
};

export default Filters;
