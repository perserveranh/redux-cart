// import * as Types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('cart'));
console.log('rrrrrrrrrrrrrrrrrrr', data)
var initialState = data ? data : [];

const myReducers = (state = initialState, action) => {
    var { product, quantity } = action;
    var index = -1;
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(action);
            index = findProductCart(state, product);
            if (index !== -1) {
                state[index].quantity += quantity;
            }
            else {
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('cart', JSON.stringify(state));
            console.log("change state", state)
            return state;
        case "DELETE_PRODUCT_IN_CART":
            index = findProductCart(state, product);
            if (index !== -1) {
                state.splice(index, 1);
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state, { product }];
        case "UPDATE_PRODUCT_IN_CART":
            index = findProductCart(state, product);
            if (index !== -1) {
                state[index].quantity = quantity;
            }
            localStorage.setItem('cart', JSON.stringify(state));
            return [...state, { product, quantity }];
        default:
            return state;
    }

}
var findProductCart = (cart, product) => {
    var index = -1;
    if (cart.length > 0) {
        for (var i = 0; i < cart.length; i++) {
            if (cart[i].product.id === product.id) {
                index = i;
                break;
            }
        }
    }
    return index;
}

export default myReducers;