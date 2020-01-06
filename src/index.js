import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/state";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//Прорисовка UI Tree(Дерева)
let rerenderApp = state => {
  ReactDOM.render(
    <App
      state={state}
      addPost={store.addPost.bind(store)}
      newPostMessage={store.newPostMessage.bind(store)}
    />,
    document.getElementById("root")
  );
};

rerenderApp(store.getState()); //Вызов прорисовки, в файле render лежит функция.
store.subscribe(rerenderApp); //Вызываю функцию, callback fun subscribe которая вызывает rerenderApp

serviceWorker.unregister();
