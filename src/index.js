import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// store
import configureStore from './redux/store';
import { Provider } from 'react-redux';
import api from './components/api';
const store = configureStore();


ReactDOM.render(

    < Provider store={store} >
        <App />
    </Provider >
    , document.getElementById('root'));
registerServiceWorker();
