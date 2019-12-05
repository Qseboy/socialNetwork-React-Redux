import React from "react";
import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const Dialog = () => {
  return (
    <div className={s.dialogsItems}>
      <h2>Dialogs</h2>
      <div className={s.dialog}>
        <NavLink activeClassName={s.active} to="/dialogs/1">
          Ivan
        </NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink activeClassName={s.active} to="/dialogs/2">
          Leha
        </NavLink>
      </div>
      <div className={s.dialog}>
        <NavLink activeClassName={s.active} to="/dialogs/3">
          Kolyan
        </NavLink>
      </div>
    </div>
  );
};
export default Dialog;
