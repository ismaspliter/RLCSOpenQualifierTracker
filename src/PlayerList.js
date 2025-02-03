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
    var country=countryToCode[countryName];
    return country ? `/flags/${country}.svg` : null;
  };

const PlayerList = ({ players }) => {
  return (
    <div className="grid gap-1.5">
      {players.map((player, index) => (
        <div key={index} className="relative overflow-hidden rounded-lg">
          <div className="relative flex items-center gap-3 bg-gray-700/80 backdrop-blur p-2">
            <span className="text-gray-200 font-medium">{player.name}</span>
            <div className="ml-auto relative w-10 h-6 overflow-hidden rounded-sm">
              <img
                src={getFlagPath(player.country)}
                alt={player.country}
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => { e.target.src = "/flags/default.svg"; }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlayerList;