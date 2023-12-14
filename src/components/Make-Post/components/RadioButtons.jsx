import React from "react";

function RadioButtons({ label, name, options, onChange, value }) {
  return (
    <div>
      <p>{label}</p>
      {options.map((option) => (
        <label key={option.value}>
          <input
            onChange={onChange}
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.label}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
}

export default RadioButtons;
