import * as types from './../constants/actionType';

// var data = JSON.parse(localStorage.getItem('cart'));
var initialState = [
    {
        product: {
            id: 1,
            name: 'Iphone X',
            image: 'https://www.buymobiles.net/library/images/handsets/apple/apple-iphone-x-64gb-space-grey.png',
            description: 'Sản phẩm do apple sản xuất !',
            price: 1000,
            inventory: 10,
            rating: 4
        },
        quantity: 5
    },
    {
        product: {
            id: 1,
            name: 'Iphone Y',
            image: 'https://images-na.ssl-images-amazon.com/images/I/61P5h3EjMFL._SX342_.jpg',
            description: 'Sản phẩm do apple sản xuất !',
            price: 1000,
            inventory: 10,
            rating: 3
        },
        quantity: 8
    }
];

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            console.log(action);
            return [...state];
        default:
            return [...state];
    }
}

export default myReducers;