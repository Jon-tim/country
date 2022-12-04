import React, { useState, useRef, useEffect } from "react";
import Countries from "../features/Countries";
import Country from "./Country";
// import { BiAlarm } from "react-icons/bi";
import NoMatch from "./NoMatch";
import NavBar from "../features/NavBar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="App relative main">
        <NavBar />
        <div className="bg-VeryDarkBlue">
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
