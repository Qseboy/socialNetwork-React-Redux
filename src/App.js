import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Login from "./components/Login/Login";

const App = () => {
  return (
    <div className="App">
      <div className="app-wrapper">
        <Header />
        <Login />
        <Navbar />
        <Profile name="Nikolas" />
      </div>
    </div>
  );
};

export default App;
