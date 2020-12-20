import {createStore, combineReducers, 
        applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import PLS from '../reducers/productlistreducer'; 
import PDS from '../reducers/productdetailreducer';
import CR from '../reducers/AddToCartReducer'; 

const initialstate = {};
const reducers = combineReducers({
    productList : PLS,
    productDetail : PDS,
    carTItems : CR,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const Store = createStore(reducers,initialstate,composeEnhancer(applyMiddleware(thunk)));

export default Store;