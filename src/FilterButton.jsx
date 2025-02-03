import React, { useState } from 'react';
// Si en algún momento fuera necesario forzar el render inmediato, se podría importar flushSync:
// import { flushSync } from 'react-dom';
import './FilterButton.css'; // Asegurarse de tener definido los estilos correspondientes

const FilterButton = ({ onFilterChange, filterValue, children }) => {
  // Estado para activar/desactivar el feedback visual
  const [isActive, setIsActive] = useState(false);
  // Estado para reflejar que la acción asíncrona está en proceso (opcional)
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    // Paso 1: Activar feedback visual inmediatamente
    setIsActive(true);
    // Si se requiere forzar el render inmediato (muy raro pero útil en casos críticos):
    // flushSync(() => setIsActive(true));

    // Paso 2: Iniciar acción asíncrona en segundo plano
    setLoading(true);
    try {
      await onFilterChange(filterValue);
    } catch (error) {
      console.error('Error al aplicar el filtro:', error);
    } finally {
      // Una vez completada la acción, desactivar los estados visuales
      setIsActive(false);
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`filter-button ${isActive ? 'active' : ''} ${loading ? 'loading' : ''}`}
    >
      {children}
    </button>
  );
};

export default FilterButton;
