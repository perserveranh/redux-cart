import * as Message from './../constants/Message';
// import * as Types from './../constants/ActionType';

var initialState = Message.MSG_WELLCOME;
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_MESSAGE':
            console.log(action);
            return [...state, { message: action.message }];
        default:
            return state;
    }
}

export default myReducers;