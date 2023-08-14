import { useState } from "react";
import "../styles/Edit.css";

function Edit() {
  const [name, setName] = useState("");
  return (
    <>
      <div className="container">
        <div className="contact">
          <form>
            <label>Full Name</label>
            <input type="text" placeholder="name" name="name"></input>
            <label>Email</label>
            <input type="text" name="email"></input>
            <label>Phone Number</label>
            <input type="text" name="phone"></input>
            <label>City and State</label>
            <input type="text" name="location"></input>
          </form>
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
