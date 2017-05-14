/**
 * Created by XY on 2017-05-12.
 */
import * as types from '../actions/actionTypes';

let initialState = {
    isAuth: false,
    user: {}
};

export default  function(state = initialState, action) {
    switch (action.type) {
        case types.setCurrentUser:
            return Object.assign({}, state, action.state);
        default:
            return state;
    }
}