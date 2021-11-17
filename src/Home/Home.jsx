import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllCriminalData } from "../Redux/action";
import "./Home.css";

const Home = () => {
  const criminalList = useSelector((state) => state.criminal.criminals);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCriminalData());
  }, []);

  return (
    <div className="home_container">
      <Navbar />
      <div className="inner_home_container">
        <h2>DBMS Mini Project</h2>
        <h3>
          Topic: Implement a database management system to maintain fingerprint
          and criminal data records
        </h3>
        <h3 className="name">
          Swapnil Nadekar ( TC59 ) <br /> Ankit Dhopate ( TC09 )
        </h3>
      </div>
    </div>
  );
};

export default Home;
