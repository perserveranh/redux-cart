import React, { Component } from 'react';
import Header from './components/header';
import ProductsContainer from './container/productsContainer';
import CartContainer from './container/CartContainer';
import Footer from './components/footer';
import MessageContainer from './container/messageContainer';
import api from './components/api';
import configureStore from './redux/store';

let store = configureStore();
class App extends Component {
    constructor(props) {
        super(props);
        api.setStore(store);
    }
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
