import React from 'react'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const index = (props) => {
  useEffect(()=>{
    props.setshowHeaderFooter(true);
  },[])
  return (
    <div className="max-w-container mx-auto px-10">
      <div className="w-full py-10 xl:py-10 flex flex-col gap-3">
        <h1 className="text-5xl text-primeColor font-titleFont font-bold">Payment gateway</h1>
        <p className="text-sm font-normal text-lightText capitalize flex items-center">
          <span> </span>
          <span className="px-1"><svg stroke="currentColor" fill="none" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></span><span className="capitalize font-semibold text-primeColor">paymentgateway</span>
        </p>
      </div>
      <div className="pb-10">
        <p>Payment gateway only applicable for Production build.</p>
        <NavLink to="/"><button className="w-52 h-10 bg-gray-900 text-white text-lg mt-4 hover:bg-black duration-300">Explore More</button></NavLink>
      </div>
    </div>
  )
}

export default index