import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import AddToCart from '../reduxStore/actions/AddToCartActions';

const CartScreen = (props) => {
    const productid = props.match.params.id;
    //Below you split the search string at '=' where ?qty = 0 and qty = 1 
    //and then obtain the second value of the array or else return number 1
    const productqty = props.location.search && props.location.search.split("=")[1];
    const dispatch = useDispatch();

    const c_items = useSelector(state => state.carTItems);
    const {cartItems} = c_items;
    useEffect(() =>{
        dispatch(AddToCart(productid,productqty));
    },[dispatch,productid,productqty]);

    return (
        <>
        Cart Screen
        <hr/>
        {cartItems.map(cItem => <div key={cItem.product__id}>
            <p>{cItem.name}</p><p>{cItem.requestedQty}</p>
            <hr/>
            </div>)}
        </>
    );
}

export default CartScreen;