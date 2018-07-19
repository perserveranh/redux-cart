import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/cart';
import * as message from './../constants/message';
import CartItem from './../components/cartItem';
import CartResult from './../components/cartResult';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        console.log(cart);
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var result = message.MSG_CART_EMPTY;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    < CartItem
                        key={index}
                        item={item}
                        index={index}
                    />
                )
            })
        }
        return result;
    }
    showTotalAmount = (cart) => {
        var result = null;
        if (cart.length > 0) {
            return <CartResult cart={cart} />
        }
        return result;

    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(CartContainer);
