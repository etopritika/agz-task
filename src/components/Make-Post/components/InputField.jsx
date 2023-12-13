import React from "react";

function InputField({ id, type, name, placeholder, autocomplete, required }) {
  return (
    <div>
      <label>
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete={autocomplete}
          required={required}
        />
      </label>
    </div>
  );
}

export default InputField;
