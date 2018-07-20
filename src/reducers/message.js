import * as Message from './../constants/Message';
import * as Types from './../constants/ActionType';

var initialState = Message.MSG_WELLCOME;
var myReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.CHANGE_MESSAGE:
            console.log(action);
            return action.message;
        default:
            return state;
    }
}

export default myReducers;