import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.svg";
import Button from "../Buttons/Button";

function Header() {
  return (
    <header className="container">
      <Link to="/">
        <img loading="lazy" src={Logo} width={104} height={26} alt="" />
      </Link>
      <nav><Button text={"Users"} type={"button"}/><Button text={"Sign up"} type={"submit"}/></nav>
    </header>
  );
}

export default Header;
