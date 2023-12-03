import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import useCartContext from "../Context_Functions/CartContext"

export default function Cart() {
  const { cart, emptycart, removeItem, incrementItem, decrementItem, total_amount } = useCartContext();
  console.log(total_amount)
  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-layout">
          <h2 className="text-center">My Cart</h2>
          <hr />
          <div className="cart-row">
            <div className="cart-col-header">
              Index
            </div>
            <div className="cart-col-header">
              Name
            </div>
            <div className="cart-col-header">
              Color
            </div>
            <div className="cart-col-header">
              Quantity
            </div>
            <div className="cart-col-header">
              Price per Item
            </div>
            <div className="cart-col-header">
              Remove
            </div>
          </div>
          <div>{cart.map((i, index) => {
            return (
              <div className="cart-row" key={index}>
                <div className="cart-col">
                  {index + 1}
                </div>
                <div className="cart-col">
                  {i.name}
                </div>
                <div className="cart-col">
                  <button className="oneproduct-color oneproduct-color-active" style={{ backgroundColor: `${i.color}`, marginTop: '0' }}></button>
                </div>
                <div className="cart-col">
                  <button className="oneproduct-btn" onClick={() => incrementItem(i.id)}>+</button> &ensp;
                  {i.quantity}  &ensp;
                  <button className="oneproduct-btn bg-red" onClick={() => decrementItem(i.id)}>-</button>
                </div>
                <div className="cart-col">
                  {i.price}
                </div>
                <div className="cart-col">
                  <button className="btn btn-danger" onClick={() => removeItem(i)}>Remove</button>
                </div>

              </div>
            )
          })}</div>
          <hr />
          <div className="cart-total-stats">
            <div className="cart-row">
            <div className="cart-col">
              Total Price: &ensp; {total_amount}
            </div>
            </div>
          </div>
          <div className="cart-foot">
            <NavLink to='/home'>
              <button className="login-submit-btn no-margin">
                Continue Shopping
              </button>
            </NavLink>
            <button className="btn btn-dark h-50" onClick={emptycart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}
