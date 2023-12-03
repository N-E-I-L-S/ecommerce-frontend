import { NavLink } from "react-router-dom"
import Navbar from "../components/Navbar"
import FeaturedProducts from "./FeaturedProducts"
import HeroSection from "./HeroSection"
import './Style.css'
import nextArrow from '../components/next_arrow.jfif'

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="home-page">      
        <HeroSection/>
        <hr/>      
        <FeaturedProducts />
        <hr/>
        <div className="view-all-products">
      <NavLink className="td" to='/allproducts' >
        View all products  &emsp;
      <img className="next-arrow" src={nextArrow} alt="" />
       </NavLink>
        </div>
      </div>
    </>
  )
}
