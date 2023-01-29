import React from 'react';
import './header.scss';
import { city } from '../../common/data/cityname';


function Header({ setQuery }) {
    return (
        <div className='top__header'>
            <div className='cityname'>
                {
                    city?.map((ele, i) => {
                        return <p key={i} onClick={() => setQuery({ q: ele.name })} >{ele.name}</p>
                    })
                }
            </div>
           
        </div>
    );
}

export default Header;