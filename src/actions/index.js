import * as Types from '../constants/ActionType';

export const addToCart = (product, quantity) => {
    return {
        type: Types.ADD_TO_CART,
        product,
        quantity
    }
}

export const change_message = (message) => {
    return {
        type: Types.CHANGE_MESSAGE,
        message
    }
}


export const delete_product = (product) => {
    return {
        type: Types.DELETE_PRODUCT_IN_CART,
        product
    }
}

export const update_product = (product, quantity) => {
    return {
        type: Types.UPDATE_PRODUCT_IN_CART,
        product,
        quantity
    }
}