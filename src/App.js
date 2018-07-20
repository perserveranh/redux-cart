import React, { Component } from 'react';
import Header from './components/header';
import ProductsContainer from './container/productsContainer';
import CartContainer from './container/CartContainer';
import Footer from './components/footer';
import MessageContainer from './container/messageContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductsContainer />
                        <MessageContainer />
                        <CartContainer />
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default App;
