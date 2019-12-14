import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let MessageDataArray = props.MessageData.map(m => (
    <Post id={m.message} likeCounts={m.likeCounts} />
  ));

  return (
    <div className={s.MyPosts}>
      <h2>My posts</h2>
      <div className={s.form}>
        <input placeholder="Your news"></input>
      </div>
      <div className={s.sendPostKey}>
        <button>Send</button>
      </div>
      {MessageDataArray}
    </div>
  );
};
export default MyPosts;
