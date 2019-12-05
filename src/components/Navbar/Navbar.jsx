import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item} ${s.active}`}>
        <NavLink activeClassName={s.active} to="/Profile">
          Profile
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/Dialogs">
          Dialogs
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/News">
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink activeClassName={s.active} to="/Settings">
          Settings
        </NavLink>
      </div>
    </nav>
  );
};
export default Navbar;
