import React, { useRef, useState } from 'react'
import UserAuth from '../Context_Functions/UserAuth';
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {
    const { user, signup } = UserAuth();
    const uname = useRef();
    const pwd = useRef();
    const confirmpwd = useRef();
    
    const [error, setError] = useState("")

    const navigate = useNavigate()
    


    async function handleSignup() {
        setError("")

        // setCreateduser(false)
        // setCreateduser1(false)
        // setCreateduser2(false)
        console.log(pwd.current.value.length)
        if (pwd.current.value.length >5) {
            if (confirmpwd.current.value !== pwd.current.value) {
                setError("Passwords not matching")
                // setPassmatch(false)
                // console.log("Passwords not matching")
            }
            else

                try {
                    const res =await signup(uname.current.value, pwd.current.value);
                    console.log(res);
                    navigate('/')
                    // setCreateduser1(true);
                    console.log(0);
                } catch (e) {
                    console.log(e)
                    setError("Cannot add User")
                    // setCreateduser(false)
                }
        }
        else
        {
            setError("Password must be more than 5 characters")
            // setCreateduser2(true)
        }

    }
        return (
            <>
                <Navbar />
                <div className="h-[80vh] w-[100vw]">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <p
                                className="mx-auto h-8 w-auto font-bold text-3xl text-center"
                            >
                                MyStore
                            </p>
                            <h2 className="mt-4 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
                                Create your account
                            </h2>
                        </div>
                        {/* {
                            passmatch ?
                                null
                                :
                                <h6 className='pmatch'>Password Not matching!</h6>
                        }
                        {
                            createduser ?
                                null
                                :
                                <p className='pmatch'>User not created!</p>
                        }
                        {
                            createduser1 ?
                                <p className='pmatch-1'>User Created!</p>
                                :
                                null
                        }
                        {
                            createduser2 ?
                                <p className='pmatch'>Password must be more than 5 characters</p>
                                :
                                null
                        } */}
                        {
                            error!=""?
                            <p className=' font-semibold text-sm lg:text-lg text-red-400'>{error}</p>:null
                            
                        }

                        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className='space-y-6'
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSignup(uname.current.value, pwd.current.value)
                                }}
                            >
                                <div>
                                    <label htmlFor="email" className="block text-sm lg:text-lg font-medium leading-6 text-gray-900">
                                        Username
                                    </label>
                                    <div className="mt-2">
                                        <input placeholder='name@example.com'
                                            type="email" id="uname" ref={uname} required={true}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block lg:text-lg text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            type="password" id="pwd" ref={pwd} required={true}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block lg:text-lg text-sm font-medium leading-6 text-gray-900">
                                            Confirm Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            type="password" id="confirmpwd" ref={confirmpwd} required={true}
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    >
                                        Signup
                                    </button>
                                </div>
                                <p className="text-center text-sm lg:text-[1rem]">Already have an account? <NavLink to="/login" className="text-indigo-600 font-medium inline-flex space-x-1 items-center text-md lg:text-[1.3rem]"><span>Login here </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg></span></NavLink></p>
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
}
