import React from 'react';
import './inputbox.scss'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputbox(props) {
    return (
        <div className='inputbox'>
            <div className='innerbox'>
                <div>
                    <form>
                        <input type="text" className='form-control' />
                    </form>
                    <UilSearch
                        size={25}
                        className="icons_color"
                    //onClick={handleSearchClick}
                    />
                    <UilLocationPoint
                        size={25}
                        className="icons_color"
                    // onClick={handleLocationClick}
                    />
                </div>
                <div>
                <p>test</p>
                </div>
            </div>


        </div>
    );
}

export default Inputbox;