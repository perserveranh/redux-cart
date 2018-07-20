import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/products';
import ProductItem from './../components/productItem';
import { addToCart, change_message } from '../actions/index';


class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }
    showProducts(products) {
        var result = null;

        if (products.length > 0) {
            result = products.map((product, index) => {
                return <ProductItem
                    key={index}
                    product={product}
                    onAddToCart={this.onAddToCart}
                    onChangeMessage={this.onChangeMessage}
                />
            });
        }
        return result;
    }
    onAddToCart = (product) => {
        this.props.dispatch(addToCart(product, 1));
    }
    onChangeMessage = (message) => {
        this.props.dispatch(change_message(message));
    }
}

const mapStateToProps = state => {
    return {
        products: state.products

    }
}


export default connect(mapStateToProps)(ProductsContainer);
