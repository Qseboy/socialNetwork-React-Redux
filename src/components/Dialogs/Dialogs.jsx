import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = props => {
  return (
    <div className={s.dialogs}>
      <Dialog />
      <Messages />
    </div>
  );
};
export default Dialogs;
