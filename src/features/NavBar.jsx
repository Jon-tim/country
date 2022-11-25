import React, { useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

function NavBar() {
  
  return (
    <div className="py-8 z-50 shadow fixed top-0 left-0 right-0 backdrop-blur-[4px] lg:px-0">
      <div className="max-w-7xl flex item-center justify-between mx-auto px-4">
        <h1 className="font-[800] text-lg">Where in the World?</h1>
        <div className="flex items-center gap-2 font-semibold text-base">
          <BiMoon></BiMoon>
          {/* <BiSun></BiSun> */}
          <p>Dark Mode</p>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
