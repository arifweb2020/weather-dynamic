import React from 'react';
import { formatToLocalTime } from '../../common/data/api/url';
import './location.scss'

function Location({ weather: { dt, timezone, name, country } }) {
    return (
        <div className='location'>
             <div className='date__time'>
               <p>{formatToLocalTime(dt, timezone)}</p>
             </div>
             <div className='city'>
               <h2>{`${name}, ${country}`}</h2>
             </div>
        </div>
    );
}

export default Location;