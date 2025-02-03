/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Asegura que Tailwind escanee todos los archivos de React
  safelist: [
    "text-blue-500",
    "text-green-500",
    "text-red-500",    
    "text-purple-500", 
    "text-gray-100", 
    "text-gray-400", 
    "text-orange-500", 
    "text-cyan-500",
    "text-gray-300"
  ], // Protege estos estilos para que no sean eliminados
  theme: {
    extend: {},
  },
  plugins: [],
};
