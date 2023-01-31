import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { userAdded } from "./usersSlice";

export function AddUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleAge = (e) => setAge(e.target.value);
  const handleGender = (e) => setGender(e.target.value);
  const handleHeight = (e) => setHeight(e.target.value);

  export function AddUser() {
    const dispatch = useDispatch();
    const history = useHistory();
  
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [height, setHeight] = useState("");
    const [error, setError] = useState(null);
  
    const usersNumber = useSelector((state) => state.users.length);
  
    const handleClick = () => {
      if (firstName && lastName && email && age && height && gender) {
        dispatch(
          userAdded({
            id: usersNumber + 1,
            firstName,
            lastName,
            email,
            age, 
            height, 
            gender
          })
        );
  
        setError(null);
        history.push("/");
      } else {
        setError("Fill in all the required fields");
      }
  
      setFirstName("");
      setLastName("");
      setEmail("");
      setAge("");
      setGender("");
      setHeight("")
    };
  return (
    <div className="container">
      <div className="row">
        <h1>Add user</h1>
      </div>
      <div className="row">
        <div className="three columns">
          <label for="firstNameInput">First Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="firstNameInput"
            onChange={handleFirstName}
            value={firstName}
          />
          <label for="lastNameInput">Last Name</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="test@mailbox.com"
            id="firstNameInput"
            onChange={handleLastName}
            value={lastName}
          />
          <label for="emailInput">Email</label>
          <input
            className="u-full-width"
            type="email"
            placeholder="test@mailbox.com"
            id="emailInput"
            onChange={handleEmail}
            value={email}
          />
          <label for="ageInput">Age</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="27"
            id="ageInput"
            onChange={handleAge}
            value={age}
          />
          <label for="genderInput">Gender</label>
          <input
            className="u-full-width"
            type="text"
            id="genderInput"
            onChange={handleGender}
            value={gender}
          />
          <label for="heightInput">Height</label>
          <input
            className="u-full-width"
            type="text"
            placeholder="1.70"
            id="ageInput"
            onChange={handleHeight}
            value={height}
          />
          {error && error}
            <button onClick={handleClick} className="button-primary">Add user</button>
        </div>
      </div>
    </div>
  );
}
