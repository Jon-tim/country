import React, { useState, useRef } from "react";
import Countries from "../features/Countries";
import Country from "./Country";
// import { BiAlarm } from "react-icons/bi";
import NoMatch from "./NoMatch";
import NavBar from "../features/NavBar";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const chosen = useRef();
  function getCountry(params) {
    chosen.current = params;

  }

  return (
    <>
      <div className="App relative main  max-w-7xl px-4 md:mx-auto">
        <NavBar />
        <div className="mt-32">
          <Routes>
            <Route path="/" element={<Countries getCountry={getCountry} />} />
            <Route
              path="country"
              element={<Country props={chosen.current} />}
            />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
