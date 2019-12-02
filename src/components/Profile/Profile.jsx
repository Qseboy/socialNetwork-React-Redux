import React from "react";
import s from "./Profile.module.css";
import avatar from "./avatar.png";
import MyPosts from "./MyPosts/MyPosts";

const Profile = props => {
  return (
    <div className={s.content}>
      <div className={s.container}>
        <div>
          <img src={avatar} className={s.avatar}></img>
        </div>
        <h2>{props.name}</h2>
      </div>
      <div className={s.userData}>
        <p>Data:</p>
        <p>City:</p>
        <p>Education:</p>
        <p>Web Site:</p>
      </div>
      <MyPosts />
    </div>
  );
};
export default Profile;
