import { ADD_TO_CART, REMOVE_FROM_CART, TOTAL_PRICE_DECREASE, TOTAL_PRICE_INCREASE } from "../actions/constants";
import { addToCartAction } from "../actions/addCartActions";

const initialState = {
    numOfItems: 0,
    cartItems: [],
    total_price: 0
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART: return {
            ...state,
            numOfItems: state.numOfItems + 1,
            cartItems: [...state.cartItems, action.data]

        }

        case REMOVE_FROM_CART: return {
            ...state,
            numOfItems: state.numOfItems - 1,
            cartItems: [...state.cartItems.filter(item => item.title != action.data.title)]

        }

        case TOTAL_PRICE_INCREASE: return {
            ...state,
            total_price: state.total_price + action.price

        }

        case TOTAL_PRICE_DECREASE: return {
            ...state,
            total_price: state.total_price - action.price

        }
        default:
            return state
    }

}

export default cartReducer;