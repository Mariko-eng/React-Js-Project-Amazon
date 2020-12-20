import { PDS_SUCCESS, PDS_REQUEST, PDS_FAIL } from '../constants/productdetailconstants';

const PDR = (state = { product: {} }, action) => {
    switch (action.type) {
        case PDS_SUCCESS:
            return { loading: true }
        case PDS_REQUEST:
            return { loading: false, product: action.payload }
        case PDS_FAIL:
            return { loading: false }
        default:
            return state;
    }
}
export default PDR;