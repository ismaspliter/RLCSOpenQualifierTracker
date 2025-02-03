import React from 'react';

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

const getFlagPath = (countryName) => {
  const country = countryToCode[countryName];
  return country ? `/flags/${country}.svg` : null;
};

const CountryFilter = ({ commonCountries, selectedCountry, setSelectedCountry }) => {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-3">
        <button
          onClick={() => setSelectedCountry('')}
          className={`px-4 py-2 rounded-lg border transition-colors duration-200 
            ${!selectedCountry 
              ? 'border-blue-500 bg-blue-500/20 text-blue-400' 
              : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`}
        >
          All Teams
        </button>
        {commonCountries.map(country => (
          <button
            key={country.code}
            onClick={() => setSelectedCountry(country.code)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors duration-200
              ${selectedCountry === country.code 
                ? 'border-blue-500 bg-blue-500/20 text-blue-400' 
                : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-600'}`}
          >
            <img
              src={getFlagPath(country.code)}
              alt={country.name}
              className="w-6 h-4 object-cover rounded"
            />
            <span>{country.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountryFilter;
