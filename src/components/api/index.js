let store = null;

const api = {
    setStore: (newstore) => {
        store = newstore
    },
    addToCart: (product, quantity) => {
        store.dispatch({ type: "ADD_TO_CART", product, quantity });
    },
    change_message: (message) => {
        store.dispatch({ type: 'CHANGE_MESSAGE', message })
    },
    delete_product: (product) => {
        store.dispatch({ type: 'DELETE_PRODUCT_IN_CART', product })
    },
    update_product: (product, quantity) => {
        store.dispatch({ type: 'UPDATE_PRODUCT_IN_CART', product, quantity })
    }
}

export default api;