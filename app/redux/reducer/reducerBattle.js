/**
 * Created by XY on 2017-05-12.
 */
import * as types from '../actions/actionNames';

let initialState = {
    repos: null,
    selectedLanguage: 'All'
};

export default  function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}