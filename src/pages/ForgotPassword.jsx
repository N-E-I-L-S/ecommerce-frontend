import { FormEvent, useState } from "react";
import UserAuth from "../Context_Functions/UserAuth";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [emailMessage, setEmailMessage] = useState(false)
  const { passwordReset } = UserAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await passwordReset(email);
      setEmailMessage(true);
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        alert('User not found, try again!')
        setEmail('')
      }
    }
  };

  return (
    <>
    <Navbar/>
    <div>
      <div className="h-fit w-[100vw] flex items-center justify-center">
        {/* <div className=""> */}

          {/* {
            emailMessage ?
              <p className="pmatch">The Email has been sent; Check your Inbox!</p> :
              <form onSubmit={handleSubmit}>
                <input className="username"
                  type="email"
                  name="email"
                  placeholder="name@email.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <div>
                  <button className="login-submit-btn" type='submit'>Reset Your Password</button>
                </div>
              </form>
          } */}
          {
            emailMessage ?
              <p className="pmatch">The Email has been sent; Check your Inbox!</p> :

              <div className="antialiased">
                <div className="max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300">
                  <h1 className="text-2xl text-center font-medium">Reset password</h1> <br/>
                  <p className="text-slate-500 text-md">Fill up the form to reset the password</p>

                  <form onSubmit={handleSubmit} className="my-10">
                    <div className="flex flex-col space-y-5">
                      <label htmlFor="email">
                        <p className="font-medium text-slate-700 pb-2">Email address</p>
                        <input type="email"
                  name="email"
                  placeholder="name@email.com"
                  onChange={(e) => setEmail(e.target.value)} className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" />
                      </label>

                      <button type='submit' className="w-full py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                        </svg>

                        <span className="">Reset password</span>
                      </button>
                      <p className="text-center text-sm">Not registered yet? <NavLink to="/signup" className="text-indigo-600 font-medium inline-flex space-x-1 items-center text-md"><span>Register now </span><span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg></span></NavLink></p>
                    </div>
                  </form>
                </div>
              </div>
          }
        {/* </div> */}
      </div>
    </div>
    </>
  )
}

export default ForgotPassword
