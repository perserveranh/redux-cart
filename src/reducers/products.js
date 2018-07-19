// import * as types from '../constants/actionType';
var initialState = [
    {
        id: 1,
        name: 'Iphone X',
        image: 'https://www.buymobiles.net/library/images/handsets/apple/apple-iphone-x-64gb-space-grey.png',
        description: 'Sản phẩm do apple sản xuất !',
        price: 1000,
        inventory: 2,
        rating: 4
    },
    {
        id: 1,
        name: 'Iphone Y',
        image: 'https://images-na.ssl-images-amazon.com/images/I/61P5h3EjMFL._SX342_.jpg',
        description: 'Sản phẩm do apple sản xuất !',
        price: 1000,
        inventory: 10,
        rating: 3
    },
    {
        id: 1,
        name: 'Iphone Z',
        image: 'https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-1-400x460.png',
        description: 'Sản phẩm do apple sản xuất !',
        price: 1000,
        inventory: 10,
        rating: 5
    }
];

const myReducers = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
}

export default myReducers;