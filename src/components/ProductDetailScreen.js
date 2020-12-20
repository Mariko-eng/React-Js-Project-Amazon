import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GetproductDetail from '../reduxStore/actions/productDetailActions';


const ProductDetailScreen = (props) => {
    const [qty, setQty] = useState(1);

    const productDetails = useSelector(state => state.productDetail);
    const { product, loading } = productDetails;
    const dispatch = useDispatch();
    const item = props.match.params.id

    useEffect(() => {
        dispatch(GetproductDetail(item));
    }, [dispatch, item]);

    const AddToCart = () => {
        props.history.push('/cart/' + item + '?qty=' + qty);
    }

    return (
        <>{loading ? <div>Loading One Product</div> :
            <div className="pdscreen">
                <div className="pdscreen1">
                    <p>Product : {product.name}</p>
                    <img className="listitem_img" src={product.image} alt="Pic" />
                    <p>Category : {product.category}</p>
                    <p>Brand : {product.brand}</p>
                    <p>Category :{product.price}</p>
                    <p>Rating : {product.rating}</p>
                    <p>Quantity : {product.quantity}</p>
                </div>
                <div className="pdscreen2">
                    <h2>Choose Quantity</h2>
                    Qty: <select value={qty}
                        onChange={(e) => setQty(e.target.value)}>
                        {/** value of x = x+1 because arrays are zero indexed */}
                        {[...Array(product.quantity).keys()].map(x =>
                            <option value={x + 1} key={x}>{x + 1}</option>)}
                    </select>
                    <br></br>
                    {product.quantity > 0 ?
                        <button className="btn_cart" onClick={AddToCart}>ADD TO CART</button> :
                        <div>Out of Stock</div>}
                </div>
            </div>
        }
        </>
    );
}
export default ProductDetailScreen;