import React, { Component, Fragment } from 'react';

class Products extends Component {
    render() {

        return (
            <Fragment>
                <section className="section">
                    <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                    <div className="row">
                        {this.props.children}
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default Products;
