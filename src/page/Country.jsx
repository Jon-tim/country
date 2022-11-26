import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Country() {
  const navigate = useNavigate();
  // const params = useParams();

  return (
    <div className="mt-10 max-w-7xl px-4 md:mx-auto">
      <p onClick={() => navigate(-1)} className="cursor-pointer flex items-center justify-center gap-2 capitalize shadow w-28 h-8">
        <BiArrowBack /> back
      </p>

      <div>
        <img src="" alt="" />
        <div>
          <div>
            <h1>belgium</h1>
            <p className="font-semibold capitalize">
              native name:
              <span className="font-normal ml-2"></span>
            </p>
            <p className="font-semibold capitalize">
              population:
              <span className="font-normal ml-2"></span>
            </p>
            <p className="font-semibold capitalize">
              region:
              <span className="font-normal ml-2"></span>
            </p>
            <p className="font-semibold capitalize">
              sub region:
              <span className="font-normal ml-2"></span>
            </p>
            <p className="font-semibold capitalize">
              capital:
              <span className="font-normal ml-2"></span>
            </p>
          </div>
          <div>
            <p className="font-semibold capitalize">
              top level domain:
              <span className="font-normal ml-2"></span>
            </p>
            <p className="font-semibold capitalize">
              currencies:
              <span className="font-normal ml-2"></span>
            </p>
            <p className="font-semibold capitalize">
              language:
              <span className="font-normal ml-2"></span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <p className="capitalize font-semibold">border countries:</p>
        <div>
          <span className="font-normal border border-black shadow-lg"></span>
        </div>
      </div>
    </div>
  );
}

export default Country;
