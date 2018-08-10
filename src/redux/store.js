import { createStore } from 'redux';
import rootReducers from './rootReducers';

const configureStore = () => {
    const store = createStore(
        rootReducers,
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;

}

export default configureStore;
