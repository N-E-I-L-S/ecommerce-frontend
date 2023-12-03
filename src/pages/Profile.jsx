import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"
import UserAuth from "../Context_Functions/UserAuth"

export default function Profile() {
  const { user, logout } = UserAuth()
  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-div">
          <div className="profile-details">
          <t className="profile-details-1">Your Email</t> : {user.email}
          </div>
          <NavLink to='/addproduct'>
            <button className="btn btn-success mx-1">Add Your Product</button>
          </NavLink>
          <NavLink to='/'>
            <button className="btn btn-danger" onClick={logout}>Logout</button>
          </NavLink>
          
        </div>
      </div>
    </>
  )
}
