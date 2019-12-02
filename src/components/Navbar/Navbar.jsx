import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a>Profile</a>
      </div>
      <div className={s.item}>
        <a>test</a>
      </div>
      <div className={s.item}>
        <a>test</a>
      </div>
      <div className={s.item}>
        <a>test</a>
      </div>
    </nav>
  );
};
export default Navbar;
