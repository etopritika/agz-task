import React from "react";
import styles from "./InputField.module.scss";

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
    <div className={styles.wrapper}>
      <label>
        <input
          className={styles.input_wrapper}
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
        {label && <span className={styles.phone}>{label}</span>}
      </label>
    </div>
  );
}

export default InputField;
