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
      <div >      
        <HeroSection/>
        <hr/>      
        <FeaturedProducts />
        <hr/>
        <div className="px-4 py-4 w-full">
      <NavLink to='/allproducts' className="flex w-full justify-center items-center text-xl">
        All products &emsp;
      <img className="w-6 aspect-[1]" src={nextArrow} alt="" />
       </NavLink>
        </div>
      </div>
    </>
  )
}
