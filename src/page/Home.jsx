import React, { useState, useRef, useEffect } from "react";
import Countries from "../features/Countries";
import Country from "./Country";
// import { BiAlarm } from "react-icons/bi";
import NoMatch from "./NoMatch";
import NavBar from "../features/NavBar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // const [indCount, setInd] = useState();

  // useEffect(() => {
  //   localStorage.setItem("items", JSON.stringify(items));
  // }, [items]);
  // console.log(item);

  // const chosen = useRef();
  // function getCountry(params) {
  //   setInd(params);
  //   // chosen.current = params;
  //   console.log(params);
  // }

  return (
    <>
      <div className="App relative main  max-w-7xl px-4 md:mx-auto">
        <NavBar />
        <div className="mt-32">
          {/* <p>{indCount}</p> */}
          <Routes>
            <Route path="/" element={<Countries />} />
            <Route path="country" element={<Country />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
