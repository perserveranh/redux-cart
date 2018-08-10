import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from './../components/cart';
import * as Message from './../constants/Message';
import CartItem from './../components/cartItem';
import CartResult from './../components/cartResult';
import api from '../components/api/index';

class CartContainer extends Component {
    render() {
        var { cart } = this.props;
        return (
            <Cart>
                {this.showCartItem(cart)}
                {this.showTotalAmount(cart)}
            </Cart>
        );
    }
    showCartItem = (cart) => {
        var result = <tr>
            <td>{Message.MSG_CART_EMPTY}</td>
        </tr>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    < CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProductInCart={this.onDeleteProductInCart}
                        onChangeMessage={this.onChangeMessage}
                        onUpdateProductInCart={this.onUpdateProductInCart}
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
    onDeleteProductInCart = (product) => {
        api.delete_product(product);
    }
    onChangeMessage = (message) => {
        api.change_message(message);
    }
    onUpdateProductInCart = (product, quantity) => {
        api.update_product(product, quantity);
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
export default connect(mapStateToProps)(CartContainer);
