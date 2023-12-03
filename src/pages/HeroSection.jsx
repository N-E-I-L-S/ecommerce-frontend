import React from 'react'
import { NavLink } from 'react-router-dom';
import useProducts from '../Context_Functions/ProductsContext'

export default function HeroSection() {
  const { isLoading, heroproduct } = useProducts();
  console.log(heroproduct)
  if (isLoading) {
    return <>
    <div className="hero-section">
    <div className="section-empty">
    </div>
    </div>
    </>
  }
  return (
    <>
      <div className="hero-section">
        <h2 className='text-center'>New Launch</h2>
        <div className="hero-img-div">

        <NavLink to={`/oneproduct/${heroproduct.id}`}>
          <figure>
            <img className='hero-image' src={heroproduct.image || ""} alt="Newly Featured" />
            
          </figure>
        </NavLink>
        {/* <div className="hero-product-details">
          <div>
            <h4>

              {heroproduct.name}
            </h4>
          </div>
          <div>
            <h4>

              ₹{heroproduct.price}
            </h4>
          </div>
        </div> */}
        </div>
      </div>
    </>
  )
}
