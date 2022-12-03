import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
// import { useState } from "react";
// import { themeMode } from "../utils/functions";

function NavBar() {
  // themeMode();
  // localStorage.setItem("theme", JSON.stringify());
  const [darkMode, setDarkMode] = useState(false);

  function toggleThemeMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }

  return (
    <div className="py-8 z-50 shadow fixed top-0 left-0 right-0 backdrop-blur-[4px] lg:px-0 dark:bg-DarkBlue">
      <div className="max-w-7xl flex item-center justify-between mx-auto px-4 ">
        <h1 className="font-[800] text-lg text-DarkBlue dark:text-white ">
          Where in the World?
        </h1>
        <div
          className="flex items-center gap-2 font-semibold text-base cursor-pointer"
          onClick={toggleThemeMode}
        >
          {darkMode === false ? (
            <BiMoon className="text-DarkBlue dark:text-white"></BiMoon>
          ) : (
            <BiSun className="text-DarkBlue dark:text-white"></BiSun>
          )}
          {/* <BiSun></BiSun> */}
          <p className="capitalize text-DarkBlue dark:text-white">
            {darkMode === false ? "dark mode" : "light mode"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
