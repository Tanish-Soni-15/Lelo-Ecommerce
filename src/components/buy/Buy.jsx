import React from 'react';
import { NavLink } from 'react-router-dom';
import './buy.css';
import { useContext } from 'react';
import { TextContext } from '../../pages/TextContext';
const Buy = () => {
  const {count}=useContext(TextContext);
  
    return (
        <div className='flex   fixed  flex-col gap-2 top-[170px] right-[13px] z-20'>
            <NavLink to="/profile">
            <div className="flex bg-[#eaeaea] box shadow-testShadow justify-center items-center gap-1 rounded-md  flex-col w-16 h-[70px]  text-[#324659] ">
                <svg className='w-full  h-[20px]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-6 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H8v-1.5c0-1.99 4-3 6-3s6 1.01 6 3V16z"></path></svg>
                <p className='text-xs font-semibold '>Profile</p>
            </div>
            </NavLink>
            <NavLink to="/cart">
            <div className="flex bg-[#eaeaea] box relative shadow-testShadow justify-center items-center  rounded-md  text-[#324659] gap-1 flex-col w-16 h-[70px] ">
                <svg className='w-full  h-[20px]' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path></g></svg>
                <p className='text-xs font-semibold '>Buy Now</p>
                <span className='bg-black text-white  rounded-2xl text-sm flex justify-center items-center h-[14px] w-[14px]  absolute top-[10px] right-4 '>{count}</span>

            </div>
            </NavLink>
        </div>
    )
}

export default Buy