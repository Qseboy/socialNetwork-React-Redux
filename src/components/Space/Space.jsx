import React from "react";
import s from "./Space.module.css";

const SpaceTest = props => {
  debugger;
  return <div>{props.name}</div>;
};

const Space = props => {
  let test = props.state.space.map(s => <SpaceTest name={s.name} />);

  return (
    <div className={s.spaceApp}>
      <div>
        <input placeholder="space"></input>
        <button></button>
        {test}
      </div>
    </div>
  );
};
export default Space;
