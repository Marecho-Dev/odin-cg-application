import { useState } from "react";
import "../styles/Edit.css";

function Edit() {
  return (
    <>
      <div className="editContainer">
        <div className="contact">
          <label>Full Name</label>
          <input></input>
          <label>Email</label>
          <input></input>
          <label>Phone Number</label>
          <input></input>
          <label>City and State</label>
          <input></input>
        </div>

        <div className="education">
          <label>Degree</label>
          <input></input>
          <label>School</label>
          <input></input>
          <label>City</label>
          <input></input>
          <label>Country</label>
          <input></input>
          <label>Start Date</label>
          <input></input>
          <label>End Date</label>
          <input></input>
        </div>
      </div>
    </>
  );
}

export default Edit;
