/**
 * Created by 18953 on 2017/5/11.
 */
import {combineReducers} from 'redux';
// import redux
import popular from './reducerPopular';
import battle from './reducerBattle';

const rootReducer = combineReducers({
    Popular: popular,
    Battle: battle
});

export default rootReducer;