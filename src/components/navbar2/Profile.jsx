import React from 'react'
import { useState } from 'react'
import Dropdown2 from '../dropdown/Dropdown2'
import { ClickAwayListener } from '@mui/material';
const Profile = () => {
    const [selectDropDown, setselectDropDown] = useState(false)
    const items = ["Login In","Sign Up","Profile","Others"]
    return (
        <ClickAwayListener onClickAway={() => setselectDropDown(false)}>
            <div className="relative">
                <div className="flex" onClick={() => setselectDropDown(!selectDropDown)}>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                </div>
                <div className="absolute w-[135px] left-[-21px]">
                    
                <Dropdown2 items={items} selectDropDown={selectDropDown} setselectDropDown={setselectDropDown} />
                </div>
            </div>
        </ClickAwayListener>
    )
}

export default Profile