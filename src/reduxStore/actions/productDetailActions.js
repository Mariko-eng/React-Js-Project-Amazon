import myproducts from '../Data.js';
import {PDS_SUCCESS,PDS_REQUEST,PDS_FAIL} from '../constants/productdetailconstants';

const GetproductDetail = (productid) => async(dispatch) =>{
    try{
        dispatch({type:PDS_SUCCESS});
        const item = await myproducts.items.find((it) => it.__id === productid);
        await dispatch({type : PDS_REQUEST,payload:item});
    }
    catch(e){
        dispatch({type:PDS_FAIL});
    }
}

export default GetproductDetail;