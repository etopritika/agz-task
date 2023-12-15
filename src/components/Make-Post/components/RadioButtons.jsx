import React from "react";

function RadioButtons({ label, name, options, onChange, value }) {
  return (
    <div>
      <p>{label}</p>
      {options.map((option) => (
        <label key={option.id}>
          <input
            onChange={onChange}
            type="radio"
            name={name}
            value={[option.id, option.name]}
            checked={value === option.name}
          />
          {option.name}
        </label>
      ))}
    </div>
  );
}

export default RadioButtons;
