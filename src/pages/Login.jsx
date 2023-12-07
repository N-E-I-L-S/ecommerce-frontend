import React, { useRef, useState } from 'react'
import UserAuth from '../Context_Functions/UserAuth'
import { NavLink, Navigate } from 'react-router-dom'
import Image from '../components/login_page_img.png'
import Navbar from '../components/Navbar'

export default function LoginPage() {
    const { user, login } = UserAuth()
    const [loading, setLoading] = useState(false);
    console.log(user);
    const uname = useRef();
    const pwd = useRef();
    const [logged, setLogged] = useState(false);
    const [logged1, setLogged1] = useState(false);
    const handleLogin = async (email, password) => {
        setLoading(true)
        try {
            await login(email, password);
            <Navigate to='/' />
            console.log(email);
            setLogged(false);
            setLogged1(true);
            setLoading(false)
        } catch (err) {
            console.log(err);
            setLogged(true);
            setLogged1(false);
            setLoading(false)
        }
    };
    
    // return (
    //     <>
    //         <div className="">

    //             <img className="login-img" src={Image} alt="" />

    //             <form onSubmit={(e) => {
    //                 e.preventDefault();
    //                 handleLogin(uname.current.value, pwd.current.value)
    //             }}
    //             >
    //                 <div className="login-div">
    //                    <h2>
    //                     Login Page
    //                     </h2>

    //                     {logged ?
    //                         <p className='pmatch'>Wrong Credentials</p>
    //                         :
    //                         null
    //                     }
    //                     {logged1 ?
    //                         <p className='pmatch-1'>Logged In!</p>
    //                         :
    //                         null
    //                     }

    //                     <div className="username">
    //                         {/* <label htmlFor="">Username</label> <br /> */}
    //                         <input placeholder='Username' type="email" id="uname" ref={uname} required={true} />
    //                     </div>
    //                     <div className="password">
    //                         {/* <label htmlFor="">Password</label> <br /> */}
    //                         <input placeholder='Password' type="password" id="pwd" ref={pwd} required={true} />
    //                     </div>

    //                     <div className="btns">
    //                         <button type='submit' className='login-submit-btn'>Login</button>
    //                     </div>
    //         <div className='login-options'>
    //                     <NavLink className="td" to='/signup'>Don't have an account?  </NavLink> <br/>
    //                     <NavLink className="td" to = '/forgotpass'>forgot password?</NavLink>
    //         </div>
    //                 </div>
    //             </form>
    //         </div>
    //     </>
    // )
    // else 
    // return <Navigate to ='/'/>
    if(loading)
    return <>
    <div className="flex h-[100vh] w-[100vw] items-center justify-center">
    <div className="border-gray-300 h-12 lg:h-14 aspect-square animate-spin rounded-full border-8 border-t-blue-600" />
    </div>
    </>
    if(user==null)
    return (
        <>
            <Navbar />
            <div className="h-[80vh] w-[100vw]">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <p
                            className="mx-auto h-10 w-auto font-bold text-3xl text-center"
                        >
                            MyStore
                        </p>
                        <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>
                    </div>
                    {logged ?
                        <p className='pmatch'>Wrong Credentials</p>
                        :
                        null
                    }
                    {logged1 ?
                        <p className='pmatch-1'>Logged In!</p>
                        :
                        null
                    }

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className='space-y-6'
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleLogin(uname.current.value, pwd.current.value)
                            }}
                        >
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
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
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                    <div className="text-sm">
                                        <NavLink to="/forgotpassword" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                            Forgot password?
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        type="password" id="pwd" ref={pwd} required={true}
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Login
                                </button>
                            </div>
                            <p className="text-center text-sm">Don't have an account? <NavLink to="/signup" className="text-indigo-600 font-medium inline-flex space-x-1 items-center text-md"><span>Signup now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg></span></NavLink></p>
                        </form>


                    </div>
                </div>
            </div>
        </>
    )
    else 
    return <Navigate to ='/'/>
}
