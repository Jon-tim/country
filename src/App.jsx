import { useState, useContext, createContext, useEffect } from "react";
import Country from "./features/Country";
import NavBar from "./features/NavBar";
import Controls from "./features/Controls";
import { BiAlarm } from "react-icons/bi";

export const dataDisplay = createContext();
function App() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data1) => {
        setData(data1);
      });
  }, []);

  // console.log(data);
  return (
    <div className="App relative">
      <NavBar />
      <div className="main mt-32 max-w-7xl px-4 md:mx-auto">
        <dataDisplay.Provider value={data}>
          <Controls changeData={setData}/>
          <Country />
        </dataDisplay.Provider>
      </div>
    </div>
  );
}

export default App;
