import React, { useEffect } from 'react'
import useCartContext from '../Context_Functions/CartContext'
import UserAuth from '../Context_Functions/UserAuth'
import Navbar from '../components/Navbar'
import { NavLink } from 'react-router-dom'
import EmptyCart from '../components/empty-cart.png'

const url = process.env.REACT_APP_BACKEND_URL + '/user/'
export default function CheckoutPage() {
  const { cart, total_amount } = useCartContext()
  const { user } = UserAuth()

  async function placeorder() {
    const body = {
      email: user.email,
      uid: user.uid,
      order: cart
    }
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: body,
      });
      if (response)
        console.log('Order Placed')
      else
        console.log('Could not place product')
    }
    catch {
      console.log('Internal API Error')
    }
  }

  useEffect(() => {
    console.log(cart)
    console.log(user)
  }, [])
  return (
    <>
      <Navbar />
      <div className="flex justify-center lg:justify-normal items-center py-[7vh]">
        <div className="lg:w-full w-fit">
          <h2 className="text-center text-xl mb-8">Your Order</h2>
          <div className="flex lg:flex-col flex-col-reverse">


            {
              cart.length > 0 ?
                <div className="flex justify-between px-8 lg:px-10">

                  <NavLink to='/cart'>
                    <button className="login-submit-btn flex no-margin"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                      Back</button>
                  </NavLink>
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
                                Quantity : {i.quantity}
                              </div>


                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  <hr className="mb-4" />

                  <div className="w-full px-8 mt-8">
                    <div className="border  px-4 py-2 rounded-md flex lg:justify-center justify-between items-center ">
                      <p>
                        Total Price: &ensp;
                      </p>
                      <p>
                        {total_amount}
                      </p>
                    </div>
                  </div>
                  <div className="w-full px-8 mt-2 mb-6">
                    <div className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                      <button onClick={placeorder}>Place Order</button>
                    </div>
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
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
