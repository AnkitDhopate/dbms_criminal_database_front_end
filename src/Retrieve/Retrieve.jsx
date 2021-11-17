import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { getAllCriminalData } from "../Redux/action";
import CriminalCard from "../CriminalCard/CriminalCard";
import TextField from "@mui/material/TextField";
import "./Retrieve.css";

const Retrieve = () => {
  const criminalList = useSelector((state) => state.criminal.criminals);
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCriminalData());
  }, []);

  const searchCriminals = (e) => {
    setSearch(e.target.value);

    if (search !== "") {
      const returnList = criminalList.filter((cri) => {
        const tbc = cri.name.toLowerCase() + " " + cri.email.toLowerCase();
        const tbcw = search.toLowerCase();
        return tbc.includes(tbcw);
      });
      setSearchList(returnList);
    }
  };

  return (
    <div className="retrieve_container">
      <Navbar />

      <div className="search_container">
        <TextField label="Search" value={search} onChange={searchCriminals} />
      </div>

      <div className="r_card_container">
        {search < 1
          ? criminalList.map((curr) => {
              return (
                <CriminalCard
                  id={curr._id}
                  name={curr.name}
                  age={curr.age}
                  email={curr.email}
                  contact={curr.contact}
                  crime={curr.crime}
                  criminalImage={curr.criminalImage}
                  criminalFingerprint={curr.criminalFingerprint}
                />
              );
            })
          : searchList.map((curr) => {
              return (
                <CriminalCard
                  id={curr._id}
                  name={curr.name}
                  age={curr.age}
                  email={curr.email}
                  contact={curr.contact}
                  crime={curr.crime}
                  criminalImage={curr.criminalImage}
                  criminalFingerprint={curr.criminalFingerprint}
                />
              );
            })}
      </div>
    </div>
  );
};

export default Retrieve;
