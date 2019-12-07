import React from "react";
import s from "./Dialog.module.css";
import { NavLink } from "react-router-dom";

const DialogsItem = props => {
  return (
    <div className={s.dialog}>
      <NavLink activeClassName={s.active} to={"/dialogs/" + props.id}>
        {props.name}
      </NavLink>
    </div>
  );
};

const Dialog = () => {
  return (
    <div className={s.dialogsItems}>
      <h2>Dialogs</h2>
      <DialogsItem name="Kolyan" id="1" />
      <DialogsItem name="Ivan" id="2" />
      <DialogsItem name="Leha" id="3" />
    </div>
  );
};
export default Dialog;
