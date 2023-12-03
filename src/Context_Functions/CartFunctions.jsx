export default function CartFunctions(state, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let exist = state.cart.find((i) => i.id === action.payload.id)
            if (exist) {
                let updatedproduct = state.cart.map((element) => {
                    if (element.id === action.payload.id) {
                        let newquantity = element.quantity + action.payload.quantity;
                        return {
                            ...element,
                            quantity: newquantity
                        }
                    }
                    else {
                        return element
                    }
                })
                return {
                    ...state,
                    cart: updatedproduct
                }
            }
            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
        case "EMPTY_CART":
            return {
                ...state,
                cart: []
            }
        case 'REMOVE_ITEM':
            const updatedcart = state.cart.filter((i) => {
                return i.id !== action.payload.id
            })
            return {
                ...state,
                cart: updatedcart
            }
        case 'INCREMENT_ITEM':
            let incproduct = state.cart.map((element) => {
                if (element.id === action.payload) {
                    let newquantity = element.quantity
                    if (element.quantity >= element.stock) {
                        newquantity = element.stock
                    }
                    else {
                        newquantity = element.quantity + 1;
                    }
                    return {
                        ...element,
                        quantity: newquantity
                    }
                }
                else {
                    return element
                }
            })
            return {
                ...state,
                cart: incproduct
            }
        case 'DECREMENT_ITEM':
            let decproduct = state.cart.map((element) => {
                if (element.id === action.payload) {
                    let newquantity = element.quantity
                    if (element.quantity > 1) {
                        newquantity = element.quantity - 1;
                    }
                    return {
                        ...element,
                        quantity: newquantity
                    }
                }
                else {
                    return element
                }
            })
            return {
                ...state,
                cart: decproduct
            }
        case 'TOTAL_PRODUCTS':
            let totalpro = state.cart.reduce((init, i)=>{
                    let {quantity} = i;
                    init= init+quantity;
                    return init;
            },0)
            console.log(totalpro)
            return{
                ...state,
                total_products: totalpro,
            }
        case 'TOTAL_PRICE':
            let totalamt = state.cart.reduce((init, i)=>{
                let {price, quantity} = i;
                init = init + price*quantity;
                return init;
            },0)
            return{
                ...state,
                total_amount : totalamt
            }
    }
}
