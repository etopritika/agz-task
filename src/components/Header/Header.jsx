import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import Button from "../Buttons/Button";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <Link className={styles.logo} to="/">
        <img loading="lazy" src={Logo} width={104} height={26} alt="" />
      </Link>
      <nav className={styles.nav}>
        <Button text={"Users"} type={"button"} location={"#users"}/>
        <Button text={"Sign up"} type={"submit"} location={"#signup"}/>
      </nav>
    </header>
  );
}

export default Header;
