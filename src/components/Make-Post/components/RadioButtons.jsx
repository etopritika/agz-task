import React from "react";

function RadioButtons({ label, name, options }) {
  return (
    <div>
      <p>{label}</p>
      {options.map((option, index) => (
        <label key={index}>
          <input type="radio" name={name} value={option.value} />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioButtons;
