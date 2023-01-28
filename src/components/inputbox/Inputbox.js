import React from 'react';
import './inputbox.scss'
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function Inputbox(props) {
    return (
        <div className='inputbox mt-2 mb-3'>
            <div className='innerbox'>
                <div>
                    <form>
                        <input type="text" className='form-control searchbox' />
                        <div className='cen__fen'>
                            <span>°C </span> | <span>°F </span>
                        </div>
                    </form>
                </div>

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


        </div>
    );
}

export default Inputbox;