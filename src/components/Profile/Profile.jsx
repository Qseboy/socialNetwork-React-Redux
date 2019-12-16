import React from "react";
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profilenfo";

const Profile = props => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts post={props.state.post} addPost={props.addPost} />
    </div>
  );
};
export default Profile;
