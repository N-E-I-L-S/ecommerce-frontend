import React from 'react'

export default function ProductsFunctions(state, action) {
    switch(action.type){
        case 'SET_LOADING':
            return{
                ...state,
                isLoading: true,
            }
        case 'API_ERROR':
            return{
                ...state,
                isError: true,
                isLoading: false,
            }
        case 'SET_API_DATA':
            const fdata = action.payload.filter((i)=>{
                return i.featured===true;
            })
            return {
                ...state,
                isLoading:false,
                products: action.payload,
                featuredproducts : fdata,
                heroproduct : fdata[2]
            }
        case 'SET_SINGLE_LOADING':
            return{
                ...state,
                issingleloading: true
            }
        case 'SET_SINGLE_PRODUCT':
            return{
                ...state,
                issingleloading : false,
                singleproduct : action.payload
            }
        case 'ADD_ITEM_TO_CART':
            return{
                ...state,
                cartitems :{id: action.payload.id, itemq : action.payload.itemq}
            }
        case 'REMOVE_ITEM_FROM_CART':
            return{
                ...state,
                cartitems : {id: action.payload.id, itemq : action.payload.itemq}
            }
        default:    
        return state
    }
    
}
