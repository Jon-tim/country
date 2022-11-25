import React, { useState, useContext } from "react";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { regions } from "../utils/functions";
import { dataDisplay } from "../App";

function Controls(props) {
  // const data = useContext(dataDisplay);
  const [dropdown, setDropDown] = useState(false);

  function handleDropDown(params) {
    setDropDown((prev) => !prev);
    let display = dropdown ? "flex" : "hidden";
  }
  function handleFilter(event) {
    fetch("https://restcountries.com/v3.1/region/" + event.target.textContent)
      .then((res) => res.json())
      .then((data1) => {
        props.changeData(data1);
      });
    setDropDown(false);
  }

  https: return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full">
      <div className="flex items-center shadow px-10 py-4 gap-10 rounded-lg md:w-96">
        <BiSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search for a Country..."
          className="focus:outline-none w-full"
        />
      </div>
      <div className="relative w-60">
        <div
          className="w-full rounded-lg flex justify-between items-center px-6 py-4 shadow cursor-pointer"
          onClick={handleDropDown}
        >
          Filter by Region
          <BiChevronDown className="text-xl" />
        </div>
        <div
          className={`regions ${
            dropdown ? "flex" : "hidden"
          } absolute z-51 bg-white flex-col gap-3 top-[70px] left-0 right-0 shadow py-4 rounded-lg`}
        >
          {regions.map((region) => {
            return (
              <span
                key={region}
                className="capitalize px-5 cursor-pointer"
                onClick={handleFilter}
              >
                {region}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Controls;
