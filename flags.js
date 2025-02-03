const fs = require('fs').promises;
const path = require('path');
const https = require('https');

// Lista de países y sus códigos
const countries = {
  'Spain': 'es',
  'Switzerland': 'ch',
  'Denmark': 'dk',
  'Germany': 'de',
  'United Kingdom': 'gb',
  'Sweden': 'se',
  'Portugal': 'pt',
  'Netherlands': 'nl',
  'France': 'fr',
  'Latvia': 'lv',
  'Greece': 'gr',
  'Cyprus': 'cy',
  'Croatia': 'hr',
  'Belgium': 'be',
  'Austria': 'at',
  'Poland': 'pl',
  'Argentina': 'ar',
  'Italy': 'it',
  'Norway': 'no',
  'Slovakia': 'sk',
  'Lebanon': 'lb',
  'Hungary': 'hu',
  'Slovenia': 'si',
  'Czech Republic': 'cz',
  'Romania': 'ro',
  'Algeria': 'dz',
  'Thailand': 'th',
  'Saudi Arabia': 'sa',
  'Bulgaria': 'bg',
  'Finland': 'fi',
  'Faroe Islands': 'fo',
  'Albania': 'al',
  'Ireland': 'ie',
  'Malta': 'mt',
  'Lithuania': 'lt',
  'Egypt': 'eg',
  'Ukraine': 'ua',
  'Russia': 'ru',
  'Estonia': 'ee',
  'Luxembourg': 'lu',
  'Vietnam': 'vn',
  'Belarus': 'by',
  'Georgia': 'ge',
  'Canada': 'ca',
  'Morocco': 'ma',
  'Brazil': 'br',
  'Turkey': 'tr',
  'United States': 'us',
  'United Arab Emirates': 'ae',
  'Israel': 'il',
  'Colombia': 'co',
  'Iceland': 'is',
  'Palestine': 'ps',
  'Kazakhstan': 'kz',
  'Serbia': 'rs',
  'Azerbaijan': 'az',
  'Bosnia and Herzegovina': 'ba',
  'Jordan': 'jo',
  'Tunisia': 'tn',
  'Mexico': 'mx',
  'Qatar': 'qa',
  'Libya': 'ly',
  'Kosovo': 'xk',
  'Armenia': 'am'
};

// Función para descargar una bandera
function downloadFlag(code) {
  return new Promise((resolve, reject) => {
    const url = `https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/7.1.0/flags/4x3/${code}.svg`;
    const filePath = path.join(__dirname, 'public', 'flags', `${code}.svg`);

    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${code}: ${response.statusCode}`));
        return;
      }

      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        fs.writeFile(filePath, data)
          .then(() => {
            console.log(`✅ Downloaded: ${code}.svg`);
            resolve();
          })
          .catch(reject);
      });
    }).on('error', reject);
  });
}

// Función principal
async function main() {
  try {
    // Crear directorio de banderas si no existe
    const flagsDir = path.join(__dirname, 'public', 'flags');
    await fs.mkdir(flagsDir, { recursive: true });
    console.log('📁 Carpeta flags creada');

    // Descargar todas las banderas
    const downloads = Object.values(countries).map(code => 
      downloadFlag(code).catch(err => {
        console.error(`❌ Error descargando ${code}: ${err.message}`);
      })
    );

    await Promise.all(downloads);
    console.log('✨ Todas las banderas han sido descargadas');

  } catch (error) {
    console.error('Error:', error);
  }
}

// Ejecutar el script
main();