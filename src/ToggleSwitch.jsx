import React from 'react';

const ToggleSwitch = ({ checked, onChange }) => {
  return (
    <label className="relative inline-block w-[48px] h-[24px]">
      {/* Checkbox 'invisible' pero accesible */}
      <input
        type="checkbox"
        className="opacity-0 w-0 h-0 peer"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      {/* Fondo del switch */}
      <span
        className="
          absolute cursor-pointer top-0 left-0 right-0 bottom-0
          rounded-full transition-colors duration-300
          bg-gray-400           /* color por defecto (OFF) */
          peer-checked:bg-orange-600 /* color al ACTIVAR (ON) */
        "
      />
      {/* Bolita que se mueve */}
      <span
        className="
          absolute left-[2px] top-[2px]
          w-5 h-5 bg-white rounded-full
          shadow-md transform transition-transform duration-300
          peer-checked:translate-x-[24px] /* Desplazamiento cuando está ON */
        "
      />
    </label>
  );
};

export default ToggleSwitch;
