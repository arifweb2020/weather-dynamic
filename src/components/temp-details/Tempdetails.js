import React from 'react';
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilArrowUp,
    UilArrowDown
} from "@iconscout/react-unicons";
import './temp.scss'
import { formatToLocalTime, iconUrlFromCode } from '../../common/data/api/url';

function Tempdetails({
    weather: {
        details,
        icon,
        temp,
        temp_min,
        temp_max,
        sunrise,
        sunset,
        speed,
        humidity,
        feels_like,
        timezone,
    },
}) {
    return (
        <div className='temp__details'>
            <div className='weather__condition mt-3'>
                <h3>{details}</h3>
            </div>
            <div className='weather__result mt-3'>
                <div>
                    <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
                </div>
                <div>
                    <h2>{`${temp.toFixed()}°`}</h2>
                </div>
                <div className='weather_humid'>
                    <p> <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">{`${speed.toFixed()} km/h`}</span>
                    </p>
                    <p> <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">{`${humidity.toFixed()}%`}</span>
                    </p>
                    <p> <UilTemperature size={18} className="mr-1" />
                        Real fell:
                        <span className="font-medium ml-1">{`${feels_like.toFixed()}°`}</span>
                    </p>
                </div>
            </div>
            <div className='weather__set mt-3'>
                <div>
                    <p>
                        <UilSun />  Rise:{" "}
                        <span className="font-medium ml-1">
                            {formatToLocalTime(sunrise, timezone, "hh:mm a")}
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <UilSunset />  Set:{" "}
                        <span className="font-medium ml-1">
                            {formatToLocalTime(sunset, timezone, "hh:mm a")}
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <UilArrowUp />  High:{" "}
                        <span className="degree">
                            <span className="font-medium ml-1">{`${temp_max.toFixed()}°`}</span>
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <UilArrowDown />  Low:{" "}
                        <span className="degree">
                            <span className="font-medium ml-1">{`${temp_min.toFixed()}°`}</span>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tempdetails;