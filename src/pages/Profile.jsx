import { NavLink, Navigate } from "react-router-dom"
import Navbar from "../components/Navbar"
import UserAuth from "../Context_Functions/UserAuth"

export default function Profile() {
  const { user, logout } = UserAuth()
  if(user)
  return (
    <>
      <Navbar />
      <div className="h-[80vh] w-[100vw]">
        <div className="flex h-full justify-center items-center">
          <div className="p-8 items-center flex flex-col rounded-xl shadow shadow-slate-300 ">
            <div className="py-4">
          <span className="">Your Email</span> : {user.email}
            </div>
          {/* <NavLink to='/addproduct'>
            <button className="btn btn-success mx-1">Add Your Product</button>
          </NavLink> */}
          <NavLink to='/'>
            <button className="bg-indigo-600 hover:bg-indigo-500 border-indigo-500 hover:shadow border rounded-md p-3 text-white" onClick={logout}>Logout</button>
          </NavLink>
          </div>
          
        </div>
      </div>
    </>
  )
  else
  <Navigate to='/login'/>
}
