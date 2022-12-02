import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
// import { data } from "autoprefixer";

function Country({ props }) {
  const data = props;
  console.log(data);
  const navigate = useNavigate();
  const [country, setCountry] = useState();

  return (
    <div className="mt-10 max-w-7xl px-4 md:mx-auto">
      <p
        onClick={() => navigate(-1)}
        className="cursor-pointer flex items-center justify-center gap-2 capitalize shadow w-28 h-8 mb-14"
      >
        <BiArrowBack /> back
      </p>

      <div className="mb-10">
        <img src={data.flags.png} alt="" className="w-full" />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="font-bold text-2xl mt-10 mb-3">
              {data.name.common}
            </h1>
            <p className="font-semibold capitalize">
              native name:
              <span className="font-normal ml-2">{data.name.common}</span>
            </p>
            <p className="font-semibold capitalize">
              population:
              <span className="font-normal ml-2">
                {data.population.toLocaleString()}
              </span>
            </p>
            <p className="font-semibold capitalize">
              region:
              <span className="font-normal ml-2">{data.region}</span>
            </p>
            <p className="font-semibold capitalize">
              sub region:
              <span className="font-normal ml-2">{data.subregion}</span>
            </p>
            <p className="font-semibold capitalize">
              capital:
              <span className="font-normal ml-2">{data.capital}</span>
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-semibold capitalize">
              top level domain:
              <span className="font-normal ml-2">{data.tld[0]}</span>
            </p>
            <p className="font-semibold capitalize">
              currencies:
              <span className="font-normal ml-2">
                {Object.values(data.currencies)[0].name}
              </span>
            </p>
            <p className="font-semibold capitalize">
              language:
              <span className="font-normal ml-2">
                {Object.values(data.languages).join(", ")}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="capitalize font-semibold">border countries:</p>
        <div className="flex items-center gap-4">
          {"borders" in data ? (
            data.borders
              .map((i) => (
                <span
                  key={i}
                  className="inline-flex font-normal items-center justify-center capitalize shadow w-28 h-8 "
                >
                  {i}
                </span>
              ))
              .slice(0, 3)
          ) : (
            <p>this country has no known border.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;
