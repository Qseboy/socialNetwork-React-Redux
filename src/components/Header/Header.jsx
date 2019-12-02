import React from "react";
import s from "./Header.module.css";
import logo from "./logo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <div>
        <img src={logo} />
      </div>
    </header>
  );
};
export default Header;
