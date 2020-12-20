import myproducts from '../Data.js';
import {PLS_SUCCESS,PLS_REQUEST,PLS_FAIL} from '../constants/productlistconstants';

const Getproductlist = () => async(dispatch) => {
    try { 
        dispatch({type:PLS_SUCCESS});
        await dispatch({type : PLS_REQUEST,payload:myproducts.items});
    }
    catch(e){
        dispatch({type : PLS_FAIL})
    }
}
export default Getproductlist;
