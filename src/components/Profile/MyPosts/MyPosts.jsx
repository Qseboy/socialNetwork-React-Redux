import React from "react";
import s from "./MyPosts.module.css";

const MyPosts = () => {
  return (
    <div className={s.MyPosts}>
      <h2>My posts</h2>
      <div className={s.form}>
        <input placeholder="Your news"></input>
      </div>
      <div className={s.sendPostKey}>
        <button>Send</button>
      </div>
    </div>
  );
};
export default MyPosts;
