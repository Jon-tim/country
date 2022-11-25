import React, { useEffect, useState, useContext } from "react";
import { dataDisplay } from "../App";

function Country() {
  const data = useContext(dataDisplay);

  return (
    <div className="w-full mx-auto max-w-7xl flex justify-between flex-wrap mt-10 gap-x-4 gap-y-8">
      {data?.map((element) => {
        return (
          <div
            className="card shadow mx-auto rounded-lg overflow-hidden w-[260px]"
            key={element.name.common}
          >
            <div>
              <img
                src={element.flags.png}
                alt="flag of a country"
                className="h-[180px] w-full"
              />
            </div>
            <div className="country-info px-6 pt-5 pb-8 flex flex-col gap-1 ">
              {/* text-VeryDarkblue */}
              <h1 className="font-extrabold">{element.name.common}</h1>
              <p className="font-semibold capitalize mt-2">
                population:
                <span className="font-normal ml-2">
                  {element.population > 0
                    ? element.population
                    : "None Recorded"}
                </span>
              </p>
              <p className="font-semibold capitalize">
                region:
                <span className="font-normal ml-2">
                  {element.continents[0]}
                </span>
              </p>
              <p className="font-semibold capitalize">
                capital:
                <span className="font-normal ml-2">
                  {element.capital ?? "None Recorded"}
                </span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Country;
