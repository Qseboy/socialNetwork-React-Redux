import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

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
      <Post message="post11" likeCounts="33" />
      <Post message="post22" likeCounts="233" />
      <Post message="post33" likeCounts="13" />
    </div>
  );
};
export default MyPosts;
