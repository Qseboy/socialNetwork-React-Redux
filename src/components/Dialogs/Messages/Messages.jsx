import React from "react";
import s from "./Messages.module.css";
import logo from "./logo.svg";

const Mess = props => {
  return <div>{props.message}</div>;
};

const Messages = props => {
  let newMessage = props.message.map(m => <Mess message={m.message} />);

  return (
    <div className={s.messagesItems}>
      <div className={s.message}>
        <div>
          <img className={s.logo} alt="logo" src={logo} />
        </div>
        <div>{newMessage}</div>
      </div>
    </div>
  );
};
export default Messages;
