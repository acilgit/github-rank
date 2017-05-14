/**
 * Created by XY on 2017-05-12.
 */
import * as types from '../actions/actionTypes';

let initialState = {
    playerOneName: '',
    playerTwoName: '',
    playerOneImage: null,
    playerTwoImage: null
};

export default  function(state = initialState, action) {
    switch (action.type) {
        case types.resetPlayer:
        case types.submitPlayer:
            return Object.assign({}, state, action.state);
        default:
            return state;
    }
}