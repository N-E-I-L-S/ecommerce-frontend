import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import useCartContext from "../Context_Functions/CartContext"

export default function Cart() {
  const { cart, emptycart, removeItem, incrementItem, decrementItem, total_amount } = useCartContext();
  console.log(total_amount)
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center py-[7vh]">
        <div className="">
          <h2 className="text-center text-xl">Your Cart</h2>
          <hr />
          <div className="flex h-[5vh] mx-0 my-[3vh];">
            <div className="w-[14vw] font-[bold] text-[large]">
              Index
            </div>
            <div className="w-[14vw] font-[bold] text-[large]">
              Name
            </div>
            <div className="w-[14vw] font-[bold] text-[large]">
              Color
            </div>
            <div className="w-[14vw] font-[bold] text-[large]">
              Quantity
            </div>
            <div className="w-[14vw] font-[bold] text-[large]">
              Price per Item
            </div>
            <div className="w-[14vw] font-[bold] text-[large]">

            </div>
          </div>
          <div>{cart.map((i, index) => {
            return (
              <div className="items-center flex h-[5vh] mx-0 my-[3vh] row" key={index}>
                <div className="w-[14vw]">
                  {index + 1}
                </div>
                <div className="w-[14vw]">
                  {i.name}
                </div>
                <div className="w-[14vw]">
                  <button className="w-8 h-8 mr-[0.2rem] mt-0 rounded-[100%] border-0 " style={{ backgroundColor: `${i.color}` }}></button>
                </div>
                <div className="w-[14vw]">
                  <button className=" bg-[whitesmoke] h-6 w-6 rounded-[100%] border-0 hover:bg-[#68b5ff] hover:text-[white]" onClick={() => incrementItem(i.id)}>+</button> &ensp;
                  {i.quantity}  &ensp;
                  <button className="h-6 w-6 rounded-[100%] border-0 hover:bg-[#68b5ff] hover:text-[white] bg-red-500" onClick={() => decrementItem(i.id)}>-</button>
                </div>
                <div className="w-[14vw]">
                  {i.price}
                </div>
                <div className="w-[14vw]">
                  <div className="p-3 hover:bg-red-300 w-fit rounded-sm hover:animate-pulse">
                  <button className="" onClick={() => removeItem(i)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                  </svg></button>
                  </div>
                </div>

              </div>
            )
          })}</div>
          <hr />
          <div className="cart-total-stats">
            <div className="cart-row">
              <div className="w-[14vw]">
                Total Price: &ensp; {total_amount}
              </div>
            </div>
          </div>
          <div className="cart-foot">
            <NavLink to='/home'>
              <button className="login-submit-btn no-margin" style={{ height: "fit-content" }}>
                Continue Shopping
              </button>
            </NavLink>
            <NavLink to='/confirm'>
              <button className="login-submit-btn no-margin">Checkout</button>
            </NavLink>
            <button className="btn btn-dark h-50 m-0" onClick={emptycart}>Clear Cart</button>
          </div>
        </div>
      </div>
    </>
  )
}
