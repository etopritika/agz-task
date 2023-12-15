import styles from "./Button.module.scss";

function Button({ text, type, onClick, disabled, location }) {
  return (
    <a href={location} className={styles.main_link}>
      <button
        onClick={onClick}
        className={styles.main_button}
        type={type}
        disabled={disabled}
      >
        {text}
      </button>
    </a>
  );
}

export default Button;
