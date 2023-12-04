import React, { useEffect } from 'react'
import useCartContext from '../Context_Functions/CartContext'
import UserAuth from '../Context_Functions/UserAuth'

export default function CheckoutPage() {
    const {cart} = useCartContext()
    const {user }= UserAuth()
    useEffect(()=>{
        console.log(cart)
        console.log(user)
    },[])
  return (
    <>
    <h2>Confirm Your Order</h2>
    
    </>
  )
}
