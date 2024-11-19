import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
const proctedRoutes = (props) => {
    
    const auth=localStorage.getItem("loggedin");
  return (
    auth?<Outlet/>:<Navigate to="/signin"></Navigate>
  )
}

export default proctedRoutes