import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let MessageData = [
  { id: 1, message: "post_1", likeCounts: 11 },
  { id: 2, message: "post_2", likeCounts: 22 },
  { id: 3, message: "post_3", likeCounts: 33 }
];

let dialog = [
  //Массив данных
  { id: 1, name: "kolya" },
  { id: 2, name: "ivan" },
  { id: 3, name: "leha" }
];

let message = [
  { id: 1, message: "hi" },
  { id: 2, message: "hellow" }
];
ReactDOM.render(
  <App MessageData={MessageData} dialog={dialog} message={message} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
