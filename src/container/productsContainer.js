import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/products';
import ProductItem from './../components/productItem';

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
                return <ProductItem key={index} product={product} />
            });
        }
        return result;
    }
}
const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(ProductsContainer);
