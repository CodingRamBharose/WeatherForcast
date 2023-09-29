import React from 'react'
import './Navbar.css'
import { useState } from "react";
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { toast } from "react-toastify";


function Navbar({setQuery}) {
    const [city, setCity] = useState("");

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
    };
    const handleSearch = (e) =>{
        if(e.key==='Enter'){
            handleSearchClick();
        }
    }

    const handleLocationClick = () => {
        if (navigator.geolocation) {
            toast.info("Fetching users location.");
            navigator.geolocation.getCurrentPosition((position) => {
              toast.success("Location fetched!");
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;

                setQuery({
                    lat,
                    lon,
                });
            });
        }
    };

    const places = [
        {
            id: 1,
            title: "Patiala"
        },
        {
            id: 2,
            title: "Delhi"
        },
        {
            id: 3,
            title: "Mumbai"
        },
        {
            id: 4,
            title: "Chennai"
        },
        {
            id: 5,
            title: "Kolkata"
        }
    ]
    return (
        <div className='navbar'>
            <div className='navitems'>
                {places.map((place) => (
                    <a key={place.id}
                        className='items'
                        onClick={() => 
                            setQuery({ q: place.title })}
                    >{place.title}</a>
                ))}
            </div>

            <div className='navsearch'>
                <div className='serchbar'>
                    <input value={city}
                        onChange={(e) => setCity(e.currentTarget.value)} onKeyDown={handleSearch} type="search" placeholder="Search..." className='serchtext '></input>
                </div>
                <div className='serchicon'>
                    <UilSearch onClick={handleSearchClick} />
                </div>
                <div className='serchicon'>
                    <UilLocationPoint onClick={handleLocationClick} />
                </div>
            </div>
        </div>

    )
}

export default Navbar
