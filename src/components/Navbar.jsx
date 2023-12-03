import { NavLink } from "react-router-dom";
import UserAuth from "../Context_Functions/UserAuth";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { user, logout } = UserAuth();
  return (


    <nav className="navbar navbar-dark bg-dark navbar-expand-lg ">
      <a className="navbar-brand mx-3" href="#">
        MyStore
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link " to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/allproducts">
              All Products
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/cart">
              My Cart
            </NavLink>
          </li>
        </ul>
      </div>
      <NavLink to='/profile'>
      <button className="navbar-btn " >{user.email}</button>
      </NavLink>
    </nav>
  )
}