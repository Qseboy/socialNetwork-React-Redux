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

const Dialog = props => {
  let dialogsElement = props.dialog.map(d => (
    <DialogsItem name={d.name} id={d.id} />
  )); //создается массив, корый мапит старый, и переберает каждый элемент массива

  return (
    <div className={s.dialogsItems}>
      <h2>Dialogs</h2>
      {dialogsElement}
    </div>
  );
};
export default Dialog;
