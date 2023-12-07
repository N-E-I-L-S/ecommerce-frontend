import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useProducts from "../Context_Functions/ProductsContext"
import Navbar from "../components/Navbar"
import Image from "../components/Image"
// import ProductImage from "../components/ProductImage"
import { FaCheck } from 'react-icons/fa'
import useCartContext from "../Context_Functions/CartContext"

const url = process.env.REACT_APP_BACKEND_URL+'/products'

export default function OneProduct() {
  const { addToCart } = useCartContext();
  const { getSingleProduct, issingleloading, singleproduct, cartitems } = useProducts();
  let { image, id, name, category, colors, company, stars, description, stock } = singleproduct
  const productId = useParams()
  const [usercolor, setUserColor] = useState(null)
  const [quantity, setQuantity] = useState(1)

  function Increment() {
    console.log(quantity)
    stock < quantity ? setQuantity(stock) : setQuantity(quantity + 1)
  }
  function Decrement() {
    quantity > 1 ? setQuantity(quantity - 1) : setQuantity(1)
  }


  useEffect(() => {
    getSingleProduct(`${url}/id/${productId.id}`)
    console.log(singleproduct)
  }, [])
  if (issingleloading)
    return (
  <>
  <div className="flex h-[100vh] w-[100vw] items-center justify-center">
  <div class="border-gray-300 h-12 lg:h-14 aspect-square animate-spin rounded-full border-8 border-t-blue-600" />
  </div>
  </>
  )
  console.log(id)
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center lg:pt-[10rem] lg:px-[5rem] lg:flex-row py-8">
        <div className="w-full lg:w-[80%] flex justify-center my-8">
          <img style={{width: "50%"}} src={image} alt="" />
          {/* <ProductImage image={image} /> */}
        </div>
        <div className="w-[80%] text-center lg:text-left">
          <b className="font-bold text-2xl lg:text-4xl">{name}</b> <br />
          <p className="text-xl lg:text-2xl">{category} </p>
          <p className="text-xl lg:text-2xl mb-2">{company} </p>
          {stars}  
          {description} <br />

          {(colors || []).map((i) => {
            return<>
              
             <button className={usercolor === i ? "oneproduct-color oneproduct-color-active " : "oneproduct-color "} key={i} style={{ backgroundColor: `${i}` }} onClick={() => setUserColor(i)}>
              {/* {usercolor === i ?   <FaCheck color={usercolor}/> : null} */}
            </button>
            </>
          })} 
          <br /> <br/>
          <button className="oneproduct-btn" onClick={Increment}>+</button> &emsp;
          {quantity}&emsp;
          <button className="oneproduct-btn bg-red" onClick={Decrement}>-</button> <br />
          <NavLink to='/cart' >
            <button className="login-submit-btn" onClick={() => addToCart(singleproduct, usercolor, quantity)}>Add To Cart</button>
          </NavLink>
        </div>
      </div>

    </>
  )
}
