import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createNewCriminal } from "../Redux/action";
import "./Insert.css";

const Insert = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState(0);
  const [crime, setCrime] = useState("");
  const [criminalImage, setCriminalImage] = useState("");
  const [criminalFingerprint, setCriminalFingerprint] = useState("");

  const dispatch = useDispatch();

  const addCriminaldata = () => {
    const newCriminalForm = new FormData();

    newCriminalForm.append("name", name);
    newCriminalForm.append("age", age);
    newCriminalForm.append("email", email);
    newCriminalForm.append("contact", contact);
    newCriminalForm.append("crime", crime);
    newCriminalForm.append("criminalImage", criminalImage);
    newCriminalForm.append("criminalFingerprint", criminalFingerprint);

    dispatch(createNewCriminal(newCriminalForm));

    setName("");
    setAge(0);
    setEmail("");
    setContact(0);
    setCrime("");
    setCriminalImage("");
    setCriminalFingerprint("");
  };

  return (
    <div className="insert_container">
      <Navbar />
      <div className="inner_insert_container">
        <div className="inside_inner_container">
          {/* <form> */}
          <div className="name_age_container">
            <TextField
              type="text"
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Age"
              variant="outlined"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="email_contact_container">
            <TextField
              id="outlined-basic"
              type="text"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              type="number"
              id="outlined-basic"
              label="Contact"
              variant="outlined"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
          </div>
          <TextField
            className="crime_text"
            type="text"
            id="outlined-basic"
            label="Crime"
            variant="outlined"
            value={crime}
            onChange={(e) => setCrime(e.target.value)}
          />
          <div className="files_container">
            <label>Insert Criminal Image: </label>
            <input
              type="file"
              name="criminalImage"
              accept="image/*"
              formEncType="multipart/form-data"
              onChange={(e) => setCriminalImage(e.target.files[0])}
            />
            <label>Insert Criminal Fingerprint: </label>
            <input
              type="file"
              name="criminalFingerprint"
              onChange={(e) => setCriminalFingerprint(e.target.files[0])}
            />
          </div>
          <Button variant="contained" onClick={addCriminaldata}>
            Submit
          </Button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
};

export default Insert;
