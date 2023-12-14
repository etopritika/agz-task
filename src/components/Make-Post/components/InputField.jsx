import React from "react";

function InputField({
  id,
  type,
  name,
  placeholder,
  autocomplete,
  required,
  value,
  onChange,
  minLength,
  maxLength,
  pattern,
}) {
  const label = name === "phone" ? "+38 (XXX) XXX - XX - XX" : "";

  return (
    <div>
      <label>
        {label && <span>{label}</span>}
        <input
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          autoComplete={autocomplete}
          required={required}
          value={value}
          onChange={onChange}
          minLength={minLength}
          maxLength={maxLength}
          pattern={pattern}
        />
      </label>
    </div>
  );
}

export default InputField;
