import { useEffect } from "react";
import { createContext, useContext, useReducer } from "react"
import reducer from './CartFunctions'

const CartContext = createContext()
export function CartProvider({children}) {

    function getlocalcart(){
        const data = localStorage.getItem("Cart")
        if(data === null)
        return []
        else
        return JSON.parse(data);
    }

    function incrementItem(id){
        dispatch({type: 'INCREMENT_ITEM', payload:id})
    }
    function decrementItem(id){
        dispatch({type: 'DECREMENT_ITEM', payload:id})
    }


    const initialstate={
        cart : getlocalcart() || [],
        total_products : 0,
        total_amount : 0
    }
    const [state, dispatch] = useReducer(reducer, initialstate);

    function emptycart(){
        dispatch({type: "EMPTY_CART"})
    }

    function addToCart(singleproduct, usercolor, quantity){
        if (usercolor === null)
        usercolor = singleproduct.colors[0]
        const product ={
            ...singleproduct,
            id: singleproduct.id+usercolor,
            color : usercolor,
            quantity
        }
        dispatch({type: "ADD_TO_CART" , payload: product })
        console.log(state.cart);
    }

    function removeItem(i){
        dispatch({type: 'REMOVE_ITEM', payload: i})
    }

    useEffect(()=>{
        dispatch({type: 'TOTAL_PRICE'})
        dispatch({type: 'TOTAL_PRODUCTS'})
        const cartdatastore = JSON.stringify(state.cart)
        localStorage.setItem("Cart", cartdatastore )
    },[state.cart])

return (
    <>
    <CartContext.Provider value={{...state, addToCart, emptycart, removeItem, incrementItem, decrementItem}}>
        {children}
    </CartContext.Provider>
    </>
  )
}

export default function useCartContext(){
    return useContext(CartContext)
}

