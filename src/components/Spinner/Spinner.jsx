import React from "react";
import styles from "./Spinner.module.scss";
import Preloader from "../../images/Preloader.png";

export default function Spinner() {
  return <div className={styles.spinner_wrapper}><img className={styles.spinner} src={Preloader} alt="Preloader" width={48} height={48} /></div>;
}
