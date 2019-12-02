import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>КАРТИНКА</div>
      <div>ava+description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
