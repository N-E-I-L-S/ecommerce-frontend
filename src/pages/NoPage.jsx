import React from 'react'
import { NavLink } from 'react-router-dom'
import NotFound from "../components/404-error.png"
import Navbar from '../components/Navbar'

export default function NoPage() {
    return (
        <>
            <Navbar/>
            <div className="flex flex-col justify-center items-center px-8 pt-16">

            <img className='lg:h-[60vh] h-auto' src={NotFound} alt="" />
            <h2 className='mt-8'>Oops... </h2>
            <p>
                Looks Like you are in wrong place
            </p>
            <NavLink to='/'>
            <button className=' text-red-500' >Click here to go back to Website</button>
            </NavLink>
            </div>
        </>
    )
}
