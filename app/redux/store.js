/**
 * Created by 18953 on 2017/5/11.
 */
import {createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

/*let store = createStore(rootReducer, applyMiddleware(thunk),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

 let finalCreateStore = compose(applyMiddleware(thunk),
 window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())(createStore);

 export default function (initialState = {popular: {}, battle:{}}) {
 return finalCreateStore(rootReducer, initialState)
 }*/
let initialState = {
    popular: {
        repos: null,
        selectedLanguage: 'All'
    }
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    // initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;