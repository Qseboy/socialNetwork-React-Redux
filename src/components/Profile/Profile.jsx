import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profilenfo";

const Profile = props => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts MessageData={props.MessageData} />
    </div>
  );
};
export default Profile;
