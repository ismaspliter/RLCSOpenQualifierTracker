import React from "react";

const Header = ({ filterVisible, setFilterVisible }) => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-700 to-orange-800 text-white px-4 md:px-8 py-3 md:py-5 flex items-center justify-between shadow-md z-50 h-[70px]">
      <div className="flex items-center gap-3">
        <img
          src={`${process.env.PUBLIC_URL}/profile.jpg`} 
          alt="Profile"
          className="w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white shadow-lg"
        />
        <h1 className="text-xl md:text-3xl font-extrabold font-bebas-neue">
          Live Tracker Open Qualifier EUROPE #2
        </h1>
      </div>

      <button
        className="px-4 py-2 md:px-5 md:py-3 text-white bg-orange-600 rounded-lg hover:bg-blue-700 shadow-md transition-all"
        onClick={() => setFilterVisible(!filterVisible)}
      >
        {filterVisible ? 'Hide Filters' : 'Show Filters'}
      </button>
    </div>
  );
};

export default Header;
