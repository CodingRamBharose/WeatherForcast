import React from 'react'
import {
  UilTemperature, UilTear, UilWind, UilSun, UilSunset, UilClouds
} from "@iconscout/react-unicons";
import './Tempdetails.css'
import { formatToLocalTime, iconUrlFromCode } from "../../server/Server";

function Tempdetails({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    pressure,
    sunrise,
    sunset,
    speed,
    deg,
    gust,
    humidity,
    feels_like,
    timezone,
    sea_level,
    grnd_level,
    all,
  },
  units,
  setUnits,
}) {
  const handleUnitChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };
  return (
    <div>
      <div className='temperature'>
        <div id='temperatues'>
          <div className='column1'>
            <div>
              <img src={iconUrlFromCode(icon)} alt='' id='image'></img>
            </div>
            <div className='details'>
              <p>{details}</p>
            </div>
          </div>

          <div className='tempdetails'>
            <div className='daynight'>
              <div>
                <p>Day<span>{`${temp_max.toFixed()}°`}↑ </span></p>
              </div>
              <div>
                <p>Night<span>{`${temp_min.toFixed()}°`}↓</span></p>
              </div>
            </div>
            <div className='temp'>
              <p>{`${temp.toFixed()}°`}</p>
            </div>
          </div>
        </div>

        <div className='fdn'>
          <div className='units'>
            <button onClick={handleUnitChange} name='metric'>°C</button>
            <button onClick={handleUnitChange} name='imperial'>°F</button>
          </div>
          <p> <UilTemperature size={20} className="icons" />Fells like :  <span>{`${feels_like.toFixed()}°`}</span></p>
        </div>



      </div>
      <div className='otherdetails'>
        <div className='sunriseset'>
          <div>
            <h5>SUNRISE</h5>
            <p><UilSun /><span>{formatToLocalTime(sunrise, timezone, "hh:mm a")}</span></p>
          </div>
          <div>
            <h5>SUNSET</h5>
            <p><UilSunset /><span>{formatToLocalTime(sunset, timezone, "hh:mm a")}</span></p>
          </div>
        </div>
        <div className='sunriseset'>
          <h5>HUMIDITY</h5>
          <p><UilTear /><span>4{`${humidity.toFixed()}%`}</span></p>
        </div>

        <div className='sunriseset'>
          <h5>PRESSURE</h5>
          <p><span>{`${pressure} mBar`}</span></p>
        </div>

        <div className='sunriseset'>
          <h5>WIND</h5>
          <p>Speed<span>{` ${speed.toFixed()} km/h`}</span></p>
          <p>Direction<span>{` ${deg} meteorological`}</span></p>
          <p>Gust<span>{` ${gust} m/s`}</span></p>
        </div>

        <div className='sunriseset'>
          <h5>Levels</h5>
          <p>Sea Level<span>{` ${sea_level ? sea_level : 619} hPa`}</span></p>
          <p>Ground Level<span>{` ${grnd_level ? grnd_level : 575} hPa`}</span></p>
        </div>

        <div className='sunriseset'>
          <h5>Clouds</h5>
          <p><UilClouds /><span>{` ${all}%`}</span></p>
        </div>

      </div>
    </div>
  )
}

export default Tempdetails
