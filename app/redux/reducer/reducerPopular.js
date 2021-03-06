/**
 * Created by XY on 2017-05-12.
 */
import * as types from '../actions/actionTypes';

let initialState = {
    repos: null,
    selectedLanguage: 'All'
};

export default  function(state = initialState, action) {
    switch (action.type) {
        case types.updateLanguage:
            return Object.assign({}, state, action.state);
        default:
            return state;
    }
}