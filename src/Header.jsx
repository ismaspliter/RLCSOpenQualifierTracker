import React from 'react';
import Filters from './Filters';

const Header = ({
  filterVisible,
  setFilterVisible,
  commonCountries,
  selectedCountry,
  setSelectedCountry,
  selectedStatus,
  setSelectedStatus,
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <>
      {/* Header fijo */}
      <div
        className={`
          fixed top-0 left-0 w-full bg-gradient-to-r from-blue-600 to-orange-600 text-white
          px-4 md:px-8 shadow-md z-50 transition-all duration-300
          ${filterVisible ? "h-[500px] md:h-[180px]" : "h-[70px]"}
        `}
      >
        {/* Fila superior: imágenes y título */}
        <div className="flex items-center justify-between h-[70px]">
          {/* Izquierda: Primera imagen */}
          <div>
            <a
              href="https://www.start.gg/tournament/rlcs-2025-europe-open-3/details"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/startgg.svg`}
                alt="startgg logo"
                className="md:block w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white shadow-lg cursor-pointer transition-transform hover:scale-105"
              />
            </a>
          </div>

          {/* Centro: Título */}
          <div className="flex-1 text-center">
            <h1 className="text-2xl md:text-3xl font-bebas-neue">
              Live Tracker Open Qualifier EUROPE #3
            </h1>
          </div>

          {/* Derecha: Segunda imagen */}
          <div>
            <a
              href="https://twitter.com/ismaspliter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`${process.env.PUBLIC_URL}/profile.jpg`}
                alt="Profile"
                className=" md:block w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white shadow-lg cursor-pointer transition-transform hover:scale-105"
              />
            </a>
          </div>
        </div>

        {/* Área de filtros sin separación extra (pegada al header) */}
        <div
          className={`
            overflow-hidden transition-all duration-300 -mt-20
            ${filterVisible ? "max-h-[700px] md:max-h-[200px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <Filters
            commonCountries={commonCountries}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
            selectedStatus={selectedStatus}
            setSelectedStatus={setSelectedStatus}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>
      </div>

      {/* Botón flotante para desktop, centrado debajo del header */}
      <div
        className="hidden md:flex justify-center items-center z-50 fixed left-0 right-0"
        // Se posiciona justo debajo del header; sin separación extra
        style={{ top: filterVisible ? '180px' : '70px' }}
      >
        <button
          onClick={() => setFilterVisible(!filterVisible)}
          className="bg-blue-600 text-white py-1 px-3 rounded shadow transform hover:scale-105 transition-transform duration-200"
        >
          {filterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>

      {/* Botón flotante para móviles */}
      <div className="md:hidden">
        <button
          onClick={() => setFilterVisible(!filterVisible)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 transform hover:scale-105 transition-transform duration-200"
        >
          {filterVisible ? 'Hide Filters' : 'Show Filters'}
        </button>
      </div>
    </>
  );
};

export default Header;
