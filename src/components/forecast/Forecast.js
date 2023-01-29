import React from 'react';
import { iconUrlFromCode } from '../../common/data/api/url';
import './hourly.scss'

function Forecast({ heading, items }) {
    return (
        <div className='forecast_hrly'>
            <div className='heading'>
                <h3>{heading}</h3>
                <div style={{border:'2px solid darkorange'}}></div>
            </div>

            <div className='timings mt-2'>
                {items?.map((ele, i) => {
                    return <p key={i}>{ele.title}</p>
                })}
            </div>
            <div className='weather'>
                {items?.map((ele, i) => {
                    return <img src={iconUrlFromCode(ele.icon)} alt="weather-icon" className='forecast__img' />
                })}
            </div>
            <div className='degree'>
                {items?.map((ele, i) => {
                    return <p key={i}>{`${ele.temp.toFixed()}°`}</p>
                })}


            </div>
        </div>
    );
}

export default Forecast;