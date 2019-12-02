import React from "react";
import s from "./Login.module.css";

const Login = () => {
  return (
    <div className={s.log}>
      <a className={s.singIn}>sing in</a>
      <a>sing up</a>
    </div>
  );
};
export default Login;
