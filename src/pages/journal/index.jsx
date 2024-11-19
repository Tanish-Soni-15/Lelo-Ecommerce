import React from 'react'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'
const index = (props) => {
  useEffect(()=>{
    props.setshowHeaderFooter(true);
  },[])
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className='px-10'>
      <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
        <h1 className="text-5xl text-primeColor font-titleFont font-bold">Journal</h1>
        <p className="text-sm font-normal text-lightText capitalize flex items-center">
          <span className='text-gray-600'>Shop </span>
          <span className="px-1">
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </span>
          <span className="capitalize font-semibold text-primeColor">Journal</span>
        </p>
      </div>
      <div className="w-[50%] text-lg">
        <span className='font-semibold '>Lelo</span>
        <span className='text-gray-600'> is one of the world's leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</span>
      </div>
      <div className="mb-10 mt-2">
        <NavLink to='/shop'>
          <button className="w-52 h-10 bg-[#262626] text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </NavLink>

      </div>
    </div>
  )
}

export default index