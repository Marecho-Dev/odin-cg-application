import { useState } from "react";
import "./styles/App.css";
function App() {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    experience: [],
    skills: [],
  });
  //handleSubmit button which will update userInfo state with submitted info
  const handleSubmit = (e) => {
    e.preventDefault();

    //creates a temp object with the submitted form. filter out all elements without name like buttons
    //reduce which is init'd with empty object
    //return new userInfo object for the form.
    const formData = Array.from(e.target.elements)
      .filter((element) => element.name)
      .reduce((acc, element) => {
        acc[element.name] = element.value;
        return acc;
      }, {});
    console.log(formData);
    setUserInfo((prevState) => ({ ...prevState, ...formData }));
    console.log(userInfo);
  };
  return (
    <>
      <div className="container">
        <div className="editContainer">
          <div className="contact">
            <form onSubmit={handleSubmit}>
              <label>Full Name</label>
              <input type="text" placeholder="name" name="name"></input>
              <label>Email</label>
              <input type="text" name="email"></input>
              <label>Phone Number</label>
              <input type="text" name="phone"></input>
              <label>City</label>
              <input type="text" name="city"></input>
              <label>State</label>
              <input type="text" name="state"></input>
              <button>Submit</button>
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
        <div className="resume">
          <h3>{`${userInfo.name}`}</h3>
          <p>
            {userInfo.email} | {userInfo.phone} | {userInfo.city},{" "}
            {userInfo.state}
          </p>
          <div className="divider">Education</div>
          <div className="divider">Professional Experience</div>
        </div>
      </div>
    </>
  );
}

export default App;
