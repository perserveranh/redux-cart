import * as types from '../constants/actionType';

export const abc = (product, quantity) => {
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}