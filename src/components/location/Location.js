import React from 'react';
import './location.scss'

function Location(props) {
    return (
        <div className='location'>
             <div className='date__time'>
               <p>Friday, 31 Aug 2022 | local time 11:24 AM</p>
             </div>
             <div className='city'>
               <h2>Bengaluru, In</h2>
             </div>
        </div>
    );
}

export default Location;