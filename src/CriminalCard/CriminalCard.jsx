import React from "react";
import { useDispatch } from "react-redux";
import "./CriminalCard.css";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { deleteCriminalData } from "../Redux/action";

const CriminalCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="master_container">
      <div className="card_container">
        <div className="text_container">
          <h5>Name: {props.name}</h5>
          <h5>Age: {props.age}</h5>
          <h5>Email: {props.email}</h5>
          <h5>Crime: {props.crime}</h5>
        </div>
        <div className="img_container">
          <img
            src={props.criminalImage}
            alt="error"
            style={{ height: "120px" }}
          />
          <img
            src={props.criminalFingerprint}
            alt="error"
            style={{ height: "120px" }}
          />
        </div>
      </div>
      <div className="card_btns">
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={() => {
            dispatch(deleteCriminalData(props.id));
          }}
        >
          Delete
        </Button>
      </div>
    </div>
  );
};

export default CriminalCard;
