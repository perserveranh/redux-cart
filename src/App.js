import React, { Component } from 'react';
import Header from './components/header';
import Message from './components/message';
import ProductsContainer from './container/productsContainer';
import CartContainer from './container/CartContainer';
import Footer from './components/footer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <Message />
                        <CartContainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
