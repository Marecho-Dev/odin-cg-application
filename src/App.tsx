import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="form">
          <input className="name"></input>
          <input></input>
          <input></input>
        </div>
        <div className="resume">
          <div className="divider">Education</div>
          <div className="divider">Professional Experience</div>
        </div>
      </div>
    </>
  );
}

export default App;
