import React from "react";
import avatar from "./avatar.jpg";
import s from "./Post.module.css";
const Post = props => {
  return (
    <div className={s.item}>
      <img src={avatar} className={s.avatar}></img>
      <p>{props.message}</p>
      <span>{props.likeCounts}</span>
    </div>
  );
};
export default Post;
