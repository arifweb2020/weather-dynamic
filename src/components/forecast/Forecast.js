import React from 'react';
import './hourly.scss'

function Forecast({heading}) {
    return (
        <div className='forecast_hrly'>
            <div className='heading'>
                <h3>{heading}</h3>
                <hr/>
            </div>
            <div className='timings mt-2'>
                <p>12:00 PM</p>
                <p>12:00 PM</p>
                <p>12:00 PM</p>
                <p>12:00 PM</p>
                <p>12:00 PM</p>
            </div>
            <div className='weather'>
                <img src="" alt="icons" />
            </div>
            <div className='degree'>
                <p>89°</p>
                <p>89°</p>
                <p>89°</p>
                <p>89°</p>
                <p>89°</p>
            </div>
        </div>
    );
}

export default Forecast;