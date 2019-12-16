import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Messages from "./Messages/Messages";

const Dialogs = props => {
  let newMessageElement = React.createRef();
  let sendMessage = () => {
    let newMessage = newMessageElement.current.value;
    alert(newMessage);
  };
  return (
    <div className={s.dialogs}>
      <Dialog dialog={props.state.dialog} />
      <Messages message={props.state.message} />

      <input placeholder="Ваше сообщение" ref={newMessageElement}></input>
      <button onClick={sendMessage}>SEND</button>
    </div>
  );
};
export default Dialogs;
