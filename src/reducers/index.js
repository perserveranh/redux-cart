import { combineReducers } from 'redux';
import products from './products';
import cart from './cart';
import message from './message';

const rootReducers = combineReducers({
    products,
    cart,
    message
});

export default rootReducers;