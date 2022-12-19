import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Country() {
  const navigate = useNavigate();
  const { nameId } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    // const items = JSON.parse(localStorage.getItem("items"));
    // if (items) {
    fetch(`https://restcountries.com/v3.1/name/${nameId}`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data[0]);
        console.log(data);
      });
    // }
  }, [nameId]);

  // const [border, setBorder] = useState();
  // console.log(data.borders);

  // useEffect(() => {
  //   if ("borders" in data) {
  //     const borders = data.borders;
  //     let arr;
  //     function getFullBorder() {
  //       borders.map((i) =>
  //         fetch("https://restcountries.com/v3.1/alpha/" + i)
  //           .then((res) => res.json())
  //           .then((data1) => {
  //             console.log(data1[0].name.common);
  //             // setBorder(data1);
  //             const borderName = [data1[0].name.common];
  //             // console.log(data1[0].name.common);
  //             // arr.push(data1[0].name.common);
  //             // arr += data1[0].name.common;
  //           })
  //       );
  //     }
  //     console.log(arr);
  //     // console.log(border);

  //     getFullBorder();
  //   } else {
  //     console.log("no border");
  //   }
  // }, []);

  return (
    <div className="pt-32 dark:bg-VeryDarkBlue bg-VeryDarkBlue h-full lg:h-screen">
      <div className=" max-w-7xl px-4 md:mx-auto md:max-w-2xl lg:max-w-7xl h-full">
        <p
          onClick={() => navigate(-1)}
          className="cursor-pointer flex items-center justify-center gap-2 capitalize shadow w-28 h-8 mb-10 text-DarkBlue dark:text-white bg-white dark:bg-DarkBlue"
        >
          <BiArrowBack className="text-DarkBlue dark:text-white" /> back
        </p>

        <div className="flex flex-col items-center lg:flex-row w-full lg:items-center text-DarkBlue dark:text-white">
          <div className="w-full lg:w-1/2 lg:h-[400px] ">
            <img
              src={item?.flags.png}
              alt=""
              className=" w-full lg:w-[550px] h-full"
            />
          </div>
          <div className="flex flex-col gap-8 w-full lg:w-1/2 lg:p-9 lg:gap-6">
            <h1 className="font-bold text-2xl mt-10 lg:mb-3 lg:mt-0">
              {item?.name.common}
            </h1>

            <div className="flex flex-col lg:flex-row lg:justify-between md:flex-row md:justify-between gap-6 lg:gap-0">
              <div className="flex flex-col gap-2 ">
                <p className="font-semibold capitalize">
                  native name:
                  <span className="font-normal ml-2">{item?.name.common}</span>
                </p>
                <p className="font-semibold capitalize">
                  population:
                  <span className="font-normal ml-2">
                    {item?.population.toLocaleString()}
                  </span>
                </p>
                <p className="font-semibold capitalize">
                  region:
                  <span className="font-normal ml-2">{item?.region}</span>
                </p>
                <p className="font-semibold capitalize">
                  sub region:
                  <span className="font-normal ml-2">
                    {item?.subregion ? item?.subregion : "No Region Recorded"}
                  </span>
                </p>
                <p className="font-semibold capitalize">
                  capital:
                  <span className="font-normal ml-2">
                    {item?.capital ? item?.capital : "No capital recorded"}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold capitalize">
                  top level domain:
                  <span className="font-normal ml-2">{item?.tld[0]}</span>
                </p>
                <p className="font-semibold capitalize">
                  currencies:
                  <span className="font-normal ml-2">
                    {item?.currencies
                      ? Object.values(item?.currencies)[0].name
                      : "No currency recorded"}
                    {/* {Object.values(item?.currencies)[0].name} */}
                  </span>
                </p>
                <p className="font-semibold capitalize">
                  language:
                  <span className="font-normal ml-2">
                    {item?.languages
                      ? Object.values(item?.languages).join(", ")
                      : "No language recorded"}
                  </span>
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:flex-wrap">
              <p className="capitalize font-semibold">border countries:</p>
              <div className="flex items-center gap-4 flex-wrap ">
                {item && "borders" in item ? (
                  item?.borders.map((i) => (
                    <span
                      key={i}
                      className="inline-flex font-normal items-center justify-center capitalize shadow px-2 h-8 "
                    >
                      {i}
                    </span>
                  ))
                ) : (
                  <p className="">This country has no known border.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
