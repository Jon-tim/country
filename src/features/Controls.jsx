import React, { useState, useRef } from "react";
import { BiSearch, BiChevronDown } from "react-icons/bi";
import { regions } from "../utils/functions";

function Controls(props) {
  const inputRef = useRef(null);
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

  function handleSearch(params) {
    if (inputRef.current.value === null || inputRef.current.value === "") {
    } else {
      fetch(
        "https://restcountries.com/v3.1/name/" + inputRef.current.value.trim()
      )
        .then((res) => res.json())
        .then((data1) => {
          props.changeData(data1);
        });
    }
    inputRef.current.value = "";
  }

  return (
    <div className="flex flex-col gap-8 md:flex-row md:justify-between w-full max-w-7xl px-4 lg:px-0 md:mx-auto">
      <div className="flex items-center shadow px-10 py-4 gap-10 rounded-lg md:w-96">
        <input
          type="text"
          placeholder="Search for a Country..."
          className="focus:outline-none w-full"
          ref={inputRef}
          // onChange={handleSearch}
        />
        <BiSearch className="text-2xl cursor-pointer" onClick={handleSearch} />
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
