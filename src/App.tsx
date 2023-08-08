import { useState } from "react";
import "./styles/App.css";
import Edit from "./components/Edit";
function App() {
  return (
    <>
      <div className="container">
        <Edit />
        <div className="resume">
          <div className="divider">Education</div>
          <div className="divider">Professional Experience</div>
        </div>
      </div>
    </>
  );
}

export default App;
