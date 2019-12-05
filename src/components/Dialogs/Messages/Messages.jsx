import React from "react";
import s from "./Messages.module.css";
import logo from "./logo.svg";

const Messages = () => {
  return (
    <div className={s.messagesItems}>
      <div className={s.message}>
        <div>
          <img className={s.logo} src={logo} />
        </div>
        <div>Hi</div>
      </div>
      <div className={s.message}>
        <div>
          <img className={s.logo} src={logo} />
        </div>
        <div>How are you?</div>
      </div>
    </div>
  );
};
export default Messages;
