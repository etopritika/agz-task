import styles from './Button.module.scss'

function Button({ text, type, onClick }) {
  return <button onClick={onClick} className={styles.main_button} type={type}>{text}</button>;
}

export default Button;
