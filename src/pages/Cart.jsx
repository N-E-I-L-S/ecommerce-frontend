import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import useCartContext from "../Context_Functions/CartContext"
import EmptyCart from "../components/empty-cart.png"
import UserAuth from "../Context_Functions/UserAuth";

export default function Cart() {
  const { cart, emptycart, removeItem, incrementItem, decrementItem, total_amount } = useCartContext();
  const {user} = UserAuth()
  console.log(total_amount)
  console.log(cart.length)
  return (
    <>
      <Navbar />
      <div className="flex justify-center lg:justify-normal items-center py-[7vh]">
        <div className="lg:w-full w-fit">
          <h2 className="text-center text-xl mb-8">Your Cart</h2>
          <div className="flex lg:flex-col flex-col-reverse">


            {
              cart.length > 0 ?
                <div className="flex flex-col lg:flex-row justify-between px-4 lg:px-8">
                  <NavLink to='/allproducts'>
                    <button className="login-submit-btn mb-4 lg:m-0" style={{ height: "fit-content" }}>
                      Continue Shopping
                    </button>
                  </NavLink>
                  {
                    user?
                    <NavLink to='/confirm'>
                    <button className="login-submit-btn no-margin">Checkout</button>
                  </NavLink>
                  :
                    <NavLink to='/login'>
                    <button className="login-submit-btn no-margin">Login to Checkout</button>
                  </NavLink>
                  }
                </div>
                :
                null
            }


            {
              cart.length > 0 ?
                <div className="">
                  <div>
                    {cart.map((i, index) => {
                      return (
                        <div className="items-center flex h-fit mx-0 my-[3vh] row" key={index}>
                          <div className="px-4">
                            {index + 1}
                          </div>
                          <div className="">
                            <img src={i.image} className="h-[15vh] aspect-[1.5]" alt="" />
                          </div>
                          <div className="px-4">


                            <div className="lg:text-lg text-md font-bold">
                              {i.name.toUpperCase()}
                            </div>
                            <div className="lg:text-lg font-semibold text-sm">
                              {i.price}
                            </div>

                            <div className="flex items-center">
                              <p className="lg:text-lg text-sm">
                                Color: &ensp;
                              </p>
                              <button className="w-4 aspect-square mr-[0.2rem] mt-0 rounded-[100%] border-0 " style={{ backgroundColor: `${i.color}` }}></button>
                            </div>
                            <div className="flex justify-between items-center">

                              <div className=" flex justify-left text-sm">
                                <button className=" bg-[whitesmoke] h-fit aspect-square rounded-[100%] border-0 " onClick={() => incrementItem(i.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </button> &ensp;
                                {i.quantity}  &ensp;
                                <button className="h-3 aspect-square rounded-[100%] border-0" onClick={() => decrementItem(i.id)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                </button>
                              </div>

                              <div className="w-[14vw] text-sm">
                                <div className="px-3 py-2 lg:ml-4 hover:bg-red-300 w-fit rounded-sm hover:animate-pulse">
                                  <button className="h-4" onClick={() => removeItem(i)}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                  </svg></button>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <hr className="mb-4" />

                  <div className="w-full px-8 mt-8">
                    <div className="border mb-4 px-4 py-2 rounded-md flex lg:justify-center justify-between items-center ">
                      <p>
                        Total Price: &ensp;
                      </p>
                      <p>
                        {total_amount}
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-8 mb-8 items-center flex justify-end">
                    <p>Clear Cart: </p>
                    <button className="w-fit h-fit rounded-sm px-1 text-sm m-0" onClick={emptycart}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                    </svg>
                    </button>
                  </div>

                </div>
                :
                <>
                  <div className="flex flex-col items-center justify-center">

                    <img className="lg:h-[50vh] lg:w-[30vw] h-auto w-auto" src={EmptyCart} alt="Your Cart is Empty." />
                    <p className="text-center">Empty Cart! Add Items to your cart</p>
                    <NavLink to='/allproducts' className="flex mt-4 text-red-600">
                      <p >Continue Shopping &ensp;
                      </p>
                        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </NavLink>
                  </div>
                </>
            }
          </div>
        </div>
      </div>
    </>
  )
}
