import React from 'react'
import './Timeandlocation.css'
import { formatToLocalTime } from "../../server/Server";

function Timeandlocation({ weather: { dt, timezone, name, country } }) {
  return (
    <div className='timeloc'>
      <div className='location'>
        <p className="locdetails">{`${name}, ${country}`}</p>
      </div>
      <div className='time'>
        <p className="timedetails">{formatToLocalTime(dt, timezone)}</p>
      </div>
    </div>
  )
}

export default Timeandlocation
