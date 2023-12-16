import React from "react";
import styles from "./RadioButtons.module.scss";
import Unchecked from "../../../images/radio/Unchecked.svg";
import Checked from "../../../images/radio/Checked.svg";

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
            <img src={Unchecked} className={styles.checkbox__icon} width={20} height={20} alt="Unchecked" />
            <img src={Checked} className={styles.icon__checked} width={20} height={20} alt="Checked" />
            {option.name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default RadioButtons;
