import React from "react";
import s from "./ProfileInfo.module.css";
import avatar from "./avatar.png";

const ProfileInfo = props => {
  return (
    <div>
      <div className={s.container}>
        <div>
          <img src={avatar} alt="avatar" className={s.avatar}></img>
        </div>
        <h2>{props.name}</h2>
      </div>
      <div className={s.userData}>
        <p>Data:</p>
        <p>City:</p>
        <p>Education:</p>
        <p>Web Site:</p>
      </div>
    </div>
  );
};
export default ProfileInfo;
