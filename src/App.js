import React from 'react';
import "@fontsource/bebas-neue"; 
import TournamentDashboard from './TournamentDashboard';
import StackedToasts from './StackedToasts';
import InfoButton from './InfoButton';



function App() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 text-white">
      <TournamentDashboard />
      <InfoButton />
      <StackedToasts />
      
    </div>
    
  );
}

export default App;


