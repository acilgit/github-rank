/**
 * Created by XY on 2017-05-10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux';
import history from 'history';

import store from './redux/store';
import App from './containers/App';

import './index.css';

ReactDOM.render(
    <BrowserRouter history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('app-container')
);