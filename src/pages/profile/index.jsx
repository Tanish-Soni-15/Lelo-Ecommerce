import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
const index = (props) => {
    const history=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("loggedin");
        history("/signin");
    }
    useEffect(()=>{
        props.setshowHeaderFooter(true);
      },[])
  return (
    <div className='w-full h-screen bg-orange-200'>Profile
    <div className="">
        <button onClick={handleLogout}> Logout</button>
    </div>
    </div>
  )
}

export default index