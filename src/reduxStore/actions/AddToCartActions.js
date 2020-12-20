import myproducts from '../Data.js';
import {ADD_TO_CART,ADD_TO_CART_FAIL} from '../constants/CartConstants';

const AddToCart = (productid,qty) => async (dispatch) =>{
    try{
        const item = await myproducts.items.find((it) => it.__id === productid);
        const itemToAdd = {
            product__id : item.__id,
            name : item.name,
            requestedQty : qty,
        };
        dispatch({type : ADD_TO_CART,payload:itemToAdd});
    }
    catch(e){
        dispatch({type : ADD_TO_CART_FAIL});
    }
}
export default AddToCart;