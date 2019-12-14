import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";

import { Route, BrowserRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";

const App = props => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Login />
          <Navbar />
          <div className="app-wrapper-content">
            <Route
              path="/dialogs"
              render={() => (
                <Dialogs dialog={props.dialog} message={props.message} />
              )}
            />
            <Route
              path="/profile"
              render={() => <Profile MessageData={props.MessageData} />}
            />
            <Route path="/news" component={News} />
            <Route path="/settings" component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
