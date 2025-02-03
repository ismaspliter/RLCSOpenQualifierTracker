import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, BellRing } from 'lucide-react';

const StackedToasts = () => {
  // Control de visibilidad de los 2 toasts
  const [showToastPink, setShowToastPink] = useState(false); // Se mostrará después
  const [showToastGray, setShowToastGray] = useState(false); // Se mostrará primero

  // Al montar el componente, mostramos el toast GRIS de inmediato
  // y el toast ROSA a los 2 segundos (invertimos así su orden de aparición).
  useEffect(() => {
    setShowToastGray(true);

    const showPinkTimer = setTimeout(() => {
      setShowToastPink(true);
    }, 2000); // 2s después aparece el pink

    return () => clearTimeout(showPinkTimer);
  }, []);

  // Autocierre del toast gris (5s después de que se muestre)
  useEffect(() => {
    if (showToastGray) {
      const timerGray = setTimeout(() => {
        setShowToastGray(false);
      }, 10000);
      return () => clearTimeout(timerGray);
    }
  }, [showToastGray]);

  // Autocierre del toast rosa (5s después de que se muestre)
  useEffect(() => {
    if (showToastPink) {
      const timerPink = setTimeout(() => {
        setShowToastPink(false);
      }, 10000);
      return () => clearTimeout(timerPink);
    }
  }, [showToastPink]);

  // Si ambos toasts han sido cerrados, no renderizamos nada.
  if (!showToastGray && !showToastPink) return null;

  return (
    <div
      className="
        fixed
        bottom-4
        left-1/2
        -translate-x-1/2
        flex
        flex-col
        gap-6
        z-50
        w-[90%]
        max-w-2xl
      "
    >
      {/* Toast GRIS (aparece primero) */}
      {showToastGray && (
        <div
          className="
            bg-blue-800/80
            backdrop-blur-md
            text-white
            text-lg
            p-6
            rounded-3xl
            shadow-2xl
            flex
            items-start
            justify-between
            leading-relaxed
          "
        >
          <div className="flex items-center gap-4">
            <BellRing size={36} className="flex-shrink-0" />
            <span>
              This project was created by 
              <a
                href='https://twitter.com/ismaspliter'
                target='_blank'
                rel='noopener noreferrer'
                className="ml-1 underline hover:text-gray-300"
              >
                @ismaspliter
              </a>.
              Your support is always appreciated.
            </span>
          </div>

          <button
            onClick={() => setShowToastGray(false)}
            className="ml-4 text-white hover:text-gray-200 focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>
      )}

      {/* Toast ROSA (aparece segundo) */}
      {showToastPink && (
        <div
          className="
            bg-orange-500/80
            backdrop-blur-md
            text-white
            text-lg
            p-6
            rounded-3xl
            shadow-2xl
            flex
            items-start
            justify-between
            leading-relaxed
          "
        >
          <div className="flex items-center gap-4">
            <AlertTriangle size={36} className="flex-shrink-0" />
            <span>
              This data might contain inaccuracies, as it relies on the player's
              startGG listed country, not their actual nationality.
            </span>
          </div>

          <button
            onClick={() => setShowToastPink(false)}
            className="ml-4 text-white hover:text-gray-200 focus:outline-none"
          >
            <X size={28} />
          </button>
        </div>
      )}
    </div>
  );
};

export default StackedToasts;
