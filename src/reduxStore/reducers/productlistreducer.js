import {PLS_SUCCESS,PLS_FAIL, PLS_REQUEST} from '../constants/productlistconstants';

const PLR =(state={products : [], name : "JOHN RICH" },action) =>{
    switch (action.type){
        case PLS_SUCCESS:
            return {loading: true}
        case PLS_REQUEST:
            return {loading: false,products:action.payload}
        case PLS_FAIL:
            return {loading: false}
        default:
            return state; 
    }
}
export default PLR;