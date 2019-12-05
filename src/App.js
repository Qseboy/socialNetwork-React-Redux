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

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Login />
          <Navbar />
          <div className="app-wrapper-content">
            <Route path="/Dialogs" component={Dialogs} />
            <Route path="/Profile" component={Profile} />
            <Route path="/News" component={News} />
            <Route path="/Settings" component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
