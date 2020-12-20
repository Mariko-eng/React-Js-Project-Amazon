import {ADD_TO_CART,ADD_TO_CART_FAIL} from '../constants/CartConstants';

const ADD_CR = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const product = state.cartItems.find(x => x.product__id === item.product__id);
            if (product) {
                return { cartItems: state.cartItems.map(x => x.product__id === product.product__id ? item : x ) }
            }
            return {
                cartItems: [...state.cartItems, item]
            }
        case ADD_TO_CART_FAIL:
            return {addition: "Falied"} 
        default:
            return state;
    }
}
export default ADD_CR;