import React from "react";
import styles from "./RadioButtons.module.scss";

function RadioButtons({ label, name, options, onChange, value }) {
  return (
    <div className={styles.wrapper}>
      <p>{label}</p>
      <div className={styles.radio_wrapper}>
        {options.map((option) => (
          <label key={option.id} className={styles.label}>
            <input
              className={styles.input}
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
    </div>
  );
}

export default RadioButtons;
