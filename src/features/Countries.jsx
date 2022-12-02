import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Controls from "./Controls";

function Countries({ getCountry }) {
  // const [country, setCountry] = useState();

  const navigate = useNavigate();
  // const params = useParams();
  // const name = params.name;

  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data1) => {
        setData(data1);
      });
  }, []);

  const location = useRef();
  return (
    <>
      <Controls changeData={setData} />

      <div className="w-full mx-auto max-w-7xl flex justify-between flex-wrap mt-10 gap-x-4 gap-y-8 md:mx-auto">
        {data?.map((element) => {
          return (
            <div
              className="card shadow rounded-lg overflow-hidden w-[280px] cursor-pointer mx-auto"
              key={element.name.official}
              onClick={() => {
                location.current = element.name.common;
                // getCountry(location.current);
                // console.log(element.name.common);
                getCountry(element);
                navigate("country");
              }}
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
                      ? element.population.toLocaleString()
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
    </>
  );
}

export default Countries;
