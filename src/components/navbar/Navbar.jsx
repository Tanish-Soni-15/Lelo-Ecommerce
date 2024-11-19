import React from 'react'
import './Navbar.css'

import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="sticky top-0  bg-white w-full z-50" id='home'>
      <div className='flex justify-between p-4 pr-20 pl-12 border-b-2 border-b-gray-200  '>
        <div className="">
          <NavLink to='/'>
            <img className=' w-24' src="logo.png" alt="Lelo" />
          </NavLink>
        </div>
        <ul className='flex gap-3 justify-center items-center'>
          <NavLink to="/" className='w-20 h-6 flex justify-center hover:font-bold cursorpointer crt '><li>Home</li></NavLink>
          <NavLink to="/shop" className='w-20 h-6 flex justify-center hover:font-bold cursorpointer crt'><li>Shop</li></NavLink>
          <NavLink to="/about" className='w-20 h-6 flex justify-center hover:font-bold cursorpointer crt'><li>About</li></NavLink>
          <NavLink to="/contact" className='w-20 h-6 flex justify-center hover:font-bold cursorpointer crt'><li>Contact</li></NavLink>
          <NavLink to="/journal" className='w-20 h-6 flex justify-center hover:font-bold cursorpointer '><li>Journal</li></NavLink>
        </ul>
      </div>
    </div>
  )
}

export default Navbar