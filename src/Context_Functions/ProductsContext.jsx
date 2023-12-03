import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './ProductsFunctions';

const ProductsContext = createContext();
const url = process.env.REACT_APP_BACKEND_URL+'/products/'
export function ProductsProvider({ children }) {
    const initialstate = {
        isLoading: false,
        isError: false,
        products: [],
        featuredproducts: [],
        heroproduct : {},
        singleproduct: {},
        issingleloading: false,
        cartitems : [],
    };
        useEffect(()=>{
            getProducts(url)
            console.log(url)
        },[])
    const [ state, dispatch ]= useReducer(reducer, initialstate)

    const getProducts = async (url) => {
        dispatch({type: "SET_LOADING"});
        try {
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({ type: "SET_API_DATA", payload: products })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"});
        try {
            const res = await axios.get(url);
            const singleproduct = await res.data;
            dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleproduct })
        }
        catch (error) {
            dispatch({ type: "API_ERROR" })
        }
    }


    return (
        <ProductsContext.Provider value={{ ...state, dispatch, getSingleProduct}}>
            {children}
        </ProductsContext.Provider>
    )
}
function useProducts() {
    return useContext(ProductsContext)
}

export default useProducts;