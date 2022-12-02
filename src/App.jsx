import { useState, useContext, createContext, useEffect } from "react";
// import NavBar from "./features/NavBar";

import Country from "./page/Country";
import { Route, Routes } from "react-router-dom";
import NoMatch from "./page/NoMatch";
import Home from "./page/Home";
import Countries from "./features/Countries";

function App() {
  return (
    <div className="App">
      <Home></Home>
    </div>
  );
}

export default App;
