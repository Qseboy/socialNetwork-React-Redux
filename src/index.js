import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import state, { subscribe } from "./redux/state";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { addPost } from "./redux/state";
import { newPostMessage } from "./redux/state";

//Прорисовка UI Tree(Дерева)
let rerenderApp = () => {
  ReactDOM.render(
    <App state={state} addPost={addPost} newPostMessage={newPostMessage} />,
    document.getElementById("root")
  );
};

//Вызов прорисовки, в файле render лежит функция.
rerenderApp(state);

subscribe(rerenderApp); //Вызываю функцию, callback fun subscribe которая вызывает rerenderApp

serviceWorker.unregister();
