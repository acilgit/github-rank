/**
 * Created by 18953 on 2017/5/11.
 */
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './rootReducer';

export default store = createStore(rootReducer, applyMiddleware(thunk));