import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/products';
import ProductItem from './../components/productItem';
import api from '../components/api/index';


class ProductsContainer extends Component {
    render() {
        var { products } = this.props;
        console.log(products);
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
        api.addToCart(product, 1);
    }
    onChangeMessage = (message) => {
        api.change_message(message);
    }
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}


export default connect(mapStateToProps)(ProductsContainer);
