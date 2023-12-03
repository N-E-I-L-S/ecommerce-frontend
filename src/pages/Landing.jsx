import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function Landing() {
  useEffect(()=>{

    console.log(process.env.REACT_APP_BACKEND_URL)
  },[])
  return (
    <div className='landing-page'>
      <div className="landing-div">

      <h2>Welcome To MyStore</h2>
      <h4>Please Login to Continue</h4> 
      <NavLink to="/login" className="td">Click Here to Login</NavLink>
      </div>
    </div>
  )
}
