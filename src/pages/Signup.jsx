import React, { useRef, useState } from 'react'
import UserAuth from '../Context_Functions/UserAuth';
import { Navigate, Link } from 'react-router-dom';

export default function Signup() {
    const { user, signup } = UserAuth();
    const created_uname = useRef();
    const created_pwd = useRef();
    const con_created_pwd = useRef();

    const [passmatch, setPassmatch] = useState(true);
    const [createduser, setCreateduser] = useState(true);
    const [createduser1, setCreateduser1] = useState(false);

    async function handleSignup() {
        if (con_created_pwd.current.value !== created_pwd.current.value) {
            setPassmatch(false)
            console.log("Password not matching")
        }
        else
            try {
                await signup(created_uname.current.value, created_pwd.current.value);
                setCreateduser1(true);
                <Navigate to='/login' />
            } catch (e) {
                console.log(e)
                setCreateduser(false)
            }
    }
    if (user)
        <Navigate to='/' />
    else
        return (
            <>
                <div className="login-page">
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        handleSignup()
                    }}>
                        <div className="login-div">
                           <h2>Sign Up</h2>
                            {
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
                            <div className="username">
                                
                                <input placeholder='Username' type="email" id="uname" ref={created_uname} required={true} />
                            </div>
                            <div className="password">
                                
                                <input placeholder='Password' type="password" id="pwd" ref={created_pwd} required={true} />
                            </div>
                            <div className="confirm-password">
                               
                                <input placeholder='Reset Password' type="password" id="c-pwd" ref={con_created_pwd} required={true} />
                            </div>
                            <div className="login-submit-btn">
                                <button type='submit' className='btn'>SignUp</button>
                            </div>
                        </div>
                    </form>
                </div>
                <div style={{ marginLeft: "25vw" }}>

                    <Link to='/login'>Already have an account?</Link>
                </div>

            </>
        )
}
