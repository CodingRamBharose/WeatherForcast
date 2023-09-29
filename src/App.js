import './App.css';
// import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Navbar from './component/navbar/Navbar';
import Tempdetails from './component/tempraturedetails/Tempdetails';
import Timeandlocation from './component/timeandlocation/Timeandlocation';
import getFormattedWeatherData from "./server/Server";
import { useEffect, useState } from "react";
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  const [query, setQuery] = useState({ q: "patiala" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(
          `Successfully fetched weather for ${data.name}, ${data.country}.`
        );

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  return (
    <div className='app'>
      <Navbar setQuery={setQuery} />
      {weather && (
        <div>
          <Timeandlocation weather={weather} />
          <Tempdetails weather={weather} units={units} setUnits={setUnits} />
        </div>
      )}
      <ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
