import React from 'react'
import './Navbar2.css'
import { useState } from 'react'
import Dropdown from '../dropdown/Dropdown'
import { ClickAwayListener } from '@mui/material';
import Profile from './Profile';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { TextContext } from '../../pages/TextContext';
const Navbar2 = () => {
    const {count} =useContext(TextContext);
    const [selectDropDown, setselectDropDown] = useState(false)
    const items = ["All Departments", "Accessories", "Boys' Fashion", "Electronic Items", "Man's Fashion", "Jewelery", "Woman's Fashion"]

    return (
        <div className='flex justify-between p-6 bg-[#f5f5f3] text-black items-center '>
            <ClickAwayListener onClickAway={() => setselectDropDown(false)}>
                <div className="relative cursor-pointer">
                    <div className="flex items-center gap-1 pl-6  " onClick={() => setselectDropDown(!selectDropDown)}>
                        <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16"></path></svg>
                        <p className='text-sm'>Shop by Category</p>
                    </div>
                    <Dropdown items={items} selectDropDown={selectDropDown} setselectDropDown={setselectDropDown} />
                </div>
            </ClickAwayListener>
            <div className="flex bg-white text-black search rounded-xl cursor-pointer">
                <input type="text" placeholder='Search your products here' className='h-full w-full outline-none placeholder:text-black placeholder:text-[14px] p-3 rounded-md' />
                <div className="flex justify-center items-center h-[42px] w-[52px]  rounded-r-xl bg-[#febd69]">

                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="w-5 h-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                </div>
            </div>
            <div className="flex gap-3 pr-10 cursor-pointer">

                <Profile />
                <NavLink to="/cart">
                    <div className="flex relative cursor-pointer">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                        <span className='text-white bg-black  font-semibold rounded-2xl text-sm flex justify-center items-center  absolute aa '>{count}</span>
                    </div>
                </NavLink>
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"></path></svg>
            </div>
        </div>

    )
}

export default Navbar2