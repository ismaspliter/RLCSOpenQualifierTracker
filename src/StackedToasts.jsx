import React, { useState, useEffect } from 'react';
import { X, AlertTriangle, BellRing, Info } from 'lucide-react';

const StackedToasts = () => {
  // Control de visibilidad de los 3 toasts
  const [showToastGray, setShowToastGray] = useState(false); // Se mostrará primero
  const [showToastPink, setShowToastPink] = useState(false); // Se mostrará segundo
  const [showToastPrivacy, setShowToastPrivacy] = useState(false); // Se mostrará tercero

  // Al montar el componente, mostramos los toasts con tiempos de aparición escalonados.
  useEffect(() => {
    // Mostrar el toast GRIS inmediatamente
    setShowToastPrivacy(true);

    // Mostrar el toast ROSA a los 2 segundos
    const showPinkTimer = setTimeout(() => {
      setShowToastPink(true);
    }, 2000);

    // Mostrar el toast de Política de Privacidad a los 4 segundos
    const showPrivacyTimer = setTimeout(() => {
      setShowToastGray(true);
    }, 4000);

    return () => {
      clearTimeout(showPinkTimer);
      clearTimeout(showPrivacyTimer);
    };
  }, []);

  // Autocierre del toast gris (10s después de que se muestre)
  useEffect(() => {
    if (showToastGray) {
      const timerGray = setTimeout(() => {
        setShowToastGray(false);
      }, 5000);
      return () => clearTimeout(timerGray);
    }
  }, [showToastGray]);

  // Autocierre del toast rosa (10s después de que se muestre)
  useEffect(() => {
    if (showToastPink) {
      const timerPink = setTimeout(() => {
        setShowToastPink(false);
      }, 5000);
      return () => clearTimeout(timerPink);
    }
  }, [showToastPink]);

  // Autocierre del toast de privacidad (10s después de que se muestre)
  useEffect(() => {
    if (showToastPrivacy) {
      const timerPrivacy = setTimeout(() => {
        setShowToastPrivacy(false);
      }, 12000);
      return () => clearTimeout(timerPrivacy);
    }
  }, [showToastPrivacy]);

  // Si los 3 toasts han sido cerrados, no renderizamos nada.
  if (!showToastGray && !showToastPink && !showToastPrivacy) return null;

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
              This project was created by{' '}
              <a
                href="https://twitter.com/ismaspliter"
                target="_blank"
                rel="noopener noreferrer"
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
              This data might contain inaccuracies, as it relies on the player's startGG listed country, not their actual nationality.
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

      {/* Toast de Política de Privacidad (aparece tercero, con color verde) */}
      {showToastPrivacy && (
        <div
          className="
            bg-green-700/80
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
            <Info size={36} className="flex-shrink-0" />
            <span>
            This application uses Google Analytics to measure the use of the app. We do not collect or use personal data, only anonymous data for statistical purposes.
            </span>
          </div>

          <button
            onClick={() => setShowToastPrivacy(false)}
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
