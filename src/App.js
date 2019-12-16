import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Space from "./components/Space/Space";

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
              render={() => <Dialogs state={props.state.dialogPage} />}
            />
            <Route
              path="/profile"
              render={() => (
                <Profile
                  state={props.state.profilePage}
                  addPost={props.addPost}
                />
              )}
            />
            <Route
              path="/space"
              render={() => <Space state={props.state.spacePage} />}
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
