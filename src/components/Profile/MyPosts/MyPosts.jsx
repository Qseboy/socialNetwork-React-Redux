import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = props => {
  let MessageDataArray = props.post.map(m => (
    <Post id={m.message} message={m.message} likeCounts={m.likeCounts} />
  ));

  let newPostElement = React.createRef(); //объявление ссылки
  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
    debugger;
    props.addPost("hi");
  };

  return (
    <div className={s.MyPosts}>
      <h2>My posts</h2>
      <div className={s.form}>
        <input placeholder="Your news" ref={newPostElement}></input>
      </div>
      <div className={s.sendPostKey}>
        <button onClick={addPost}>Send</button>
      </div>
      {MessageDataArray}
    </div>
  );
};
export default MyPosts;
