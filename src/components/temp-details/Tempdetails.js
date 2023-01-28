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

function Tempdetails(props) {
    return (
        <div className='temp__details'>
            <div className='weather__condition mt-3'>
                <h3>Clouds</h3>
            </div>
            <div className='weather__result mt-3'>
                <div>
                    <p>image</p>
                </div>
                <div>
                    <h2>59°</h2>
                </div>
                <div className='weather_humid'>
                    <div> <UilWind size={18} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">30°</span>
                    </div>
                    <div> <UilTear size={18} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">30°</span>
                    </div>
                    <div> <UilTemperature size={18} className="mr-1" />
                        Real fell:
                        <span className="font-medium ml-1">30°</span>
                    </div>
                </div>
            </div>
            <div className='weather__set mt-3'>
                <div>
                    <p>
                        <UilSun />  Rise:{" "}
                        <span className="font-medium ml-1">
                            04:50AM
                        </span> 
                    </p>
                </div>
                <div>
                    <p>
                        <UilSunset />  Set:{" "}
                        <span className="font-medium ml-1">
                            04:50AM
                        </span> 
                    </p>
                </div>
                <div>
                    <p>
                        <UilArrowUp />  High:{" "}
                        <span className="degree">
                            62°
                        </span>
                    </p>
                </div>
                <div>
                    <p>
                        <UilArrowDown />  Low:{" "}
                        <span className="degree">
                            78°
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Tempdetails;