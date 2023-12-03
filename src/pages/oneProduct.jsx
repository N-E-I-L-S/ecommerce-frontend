import { NavLink, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import useProducts from "../Context_Functions/ProductsContext"
import Navbar from "../components/Navbar"
import Image from "../components/Image"
// import ProductImage from "../components/ProductImage"
import { FaCheck } from 'react-icons/fa'
import useCartContext from "../Context_Functions/CartContext"

const url = process.env.BACKEND_URL+'/products/'

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
    return <div>...Loading</div>
  console.log(id)
  return (
    <>
      <Navbar />
      <div className="one-product-page">
        <div className="oneproduct-image-layout">
          <img style={{width: "50%"}} src={image} alt="" />
          {/* <ProductImage image={image} /> */}
        </div>
        <div className="oneproduct-details-section">
          <b>{name}</b> <br />
          {category} <br />
          {company} <br />
          {stars}  <br />
          {description} <br />

          {(colors || []).map((i) => {
            return <button className={usercolor === i ? "oneproduct-color oneproduct-color-active " : "oneproduct-color "} key={i} style={{ backgroundColor: `${i}` }} onClick={() => setUserColor(i)}>
              {usercolor === i ?  <FaCheck color={usercolor}/> : null}
            </button>
          })} 
          <br />
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
