import React, { useState } from 'react';
import './inputbox.scss'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputbox({ setQuery, units, setUnits }) {
    const [city, setCity] = useState("");

    // const handleUnitsChange = (e) => {
    //     console.log(e.currentTarget.name)
    //     const selectedUnit = e.currentTarget.name;
    //     if (units !== selectedUnit) setUnits(selectedUnit);
    // };

    const handleSearchClick = () => {
        if (city !== "") setQuery({ q: city });
        setCity("")
    };

    const handleLocationClick = () => {
        if (navigator.geolocation) {
          //  toast.info("Fetching users location.");
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

    return (
        <div className='inputbox mt-2 mb-3'>
            <div className='innerbox'>
                <div>
                    <input type="text"
                        value={city}
                        onChange={(e) => setCity(e.currentTarget.value)}
                        placeholder="Enter city...."
                        className='form-control searchbox' />
                    {/* <div className='cen__fen'>
                        <span name="metric" onClick={handleUnitsChange} style={{ cursor: 'pointer' }}>°C </span> | <span onClick={handleUnitsChange} style={{ cursor: 'pointer' }} name="imperial">°F </span>
                    </div> */}
                </div>

                <UilSearch
                    size={25}
                    className="icons_color"
                    onClick={handleSearchClick}
                    style={{ cursor: 'pointer' ,color:'#fff'}}
                />
                <UilLocationPoint
                    size={25}
                    className="icons_color"
                    onClick={handleLocationClick}
                    style={{ cursor: 'pointer' , color:'#fff'}}
                />

            </div>


        </div>
    );
}

export default Inputbox;