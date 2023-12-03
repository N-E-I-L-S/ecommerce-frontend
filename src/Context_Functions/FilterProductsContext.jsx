import { useState, useReducer, useEffect, useContext, createContext } from "react"
import useProducts from "./ProductsContext"
import reducer from './FilterFunctions'

const FilterProductsContext = createContext()
export function FilterProductsProvider({children}) {
    const {products} = useProducts()
    
    const initialstate={
        filterproducts : [],
        all_products :[],
        sorting_value : "lowest",
        filter :{
            text: "",
            company : "", 
            category : "",
        }
    }
    const [state, dispatch] = useReducer(reducer, initialstate)

    const updateFilterValue = (event) =>{
        let name = event.target.name
        let value = event.target.value;
        return dispatch({type: 'UPDATE_FILTER_VALUE' ,payload:{name, value}})
    }
    const ClearFilters =()=>{
        dispatch({type: 'CLEAR_ALL_FILTERS'})
    }
    const getUniqueValue = (data, property) => {
        let newVal = data.map((i) =>{
            return i[property]
        })
        return newVal = ["All" ,...new Set(newVal)];
    }


    const sorting =()=>{
        dispatch({type: 'GET_SORT_VALUE' })
    }
    
    useEffect(()=>{
        dispatch({type: 'FILTER_PRODUCTS'})
    },[state.filter])

    useEffect(()=>{
        dispatch({type: 'SET_SORTED_PRODUCTS', payload:products})
    },[state.sorting_value])

    useEffect(()=>{
        dispatch({type: 'LOAD_FILTER_PRODUCTS', payload: products})
    },[products])
    return (

        <FilterProductsContext.Provider value={{...state, sorting, updateFilterValue, getUniqueValue, ClearFilters}}>
            {children}
        </FilterProductsContext.Provider>
    
  )
}

export default function useFilterContext(){
    return useContext(FilterProductsContext)
}
