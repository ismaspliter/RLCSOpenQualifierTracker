// InfoButton.js
import React, { useState } from 'react';
import InfoToast from './InfoToast';

const InfoButton = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      {/* Botón en la esquina inferior derecha */}
      <button
        onClick={() => setShowInfo(true)}
        className="fixed bottom-4 left-4 bg-blue-600 text-white p-3 rounded-full shadow-lg z-50 transform hover:scale-105 transition-transform duration-200"
        aria-label="Information"
      >
        ?
      </button>
      
      {/* Mostrar el toast cuando showInfo es true */}
      {showInfo && <InfoToast onClose={() => setShowInfo(false)} />}
    </>
  );
};

export default InfoButton;
