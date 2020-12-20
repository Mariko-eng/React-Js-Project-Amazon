import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Getproductlist from '../reduxStore/actions/ProductlistActions';


const ProductListScreen = () => {

    //Select a reducer from redux store, we use useSelectot() from react-redux
    const productlist = useSelector(state => state.productList);
    const { products, loading } = productlist;

    //Call useDispatch from redux store to dispatch an action
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Getproductlist());
    }, [dispatch]);

    return (
        <> {loading ? <div>Loading Products</div> :
            <div className="listItems">
                {products.map(product =>
                    <div key={product.__id} className="listItem">
                        <p>Product : {product.name}</p>
                        <Link to={`/product/${product.__id}`}>
                        <img className="listitem_img" src={product.image} alt="Pic" />
                        </Link>
                        <p>Category : {product.category}</p>
                        <p>Price : ${product.price}</p>
                    </div>)}
            </div>}
        </>         
    );
}
export default ProductListScreen;