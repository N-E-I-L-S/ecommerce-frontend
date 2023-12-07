import React from 'react'
import { NavLink } from 'react-router-dom';
import useProducts from '../Context_Functions/ProductsContext'

export default function HeroSection() {
  const { isLoading, heroproduct } = useProducts();
  console.log(heroproduct)
  if (isLoading) {
    return <>
    <div className="hero-section  items-center pt-20 flex flex-col justify-between">
    <div className="animate-pulse w-[80vw] lg:w-[50vw] bg-gray-300 h-16 rounded-sm"></div>
    <div className="animate-pulse w-[80vw] lg:w-[50vw] bg-gray-300 h-[75vh] rounded-md"></div>
    </div>
    </>
  }
  return (
    <>
      <div className="hero-sections pt-8 lg:pt-20 px-4 h-[75vh] lg:h-[100vh] flex flex-col items-center justify-between">
        <h2 className=' text-center w-[50vw] font-bold text-3xl'>Newly Launched</h2>
        <div className="h-fit lg:h-[75vh] ">
        <NavLink to={`/oneproduct/${heroproduct.id}`} className="h-fit w-fit">
            <img className='rounded-md lg:h-[70vh] aspect-[1.5] h-[50vh]'  src={heroproduct.image || ""} alt="Newly Featured" />
        </NavLink>
        </div>
      </div>
    </>
  )
}
