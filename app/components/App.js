/**
 * Created by XY on 2017-05-10.
 */
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux';
import history from 'history'

import store from '../reducers/store';
import Popular from './Popular';
import Nav from './Nav';
import Home from './Home';
import Battle from './Battle';
import BattleResults from "./BattleResults";

export default class extends React.Component {
    render() {
        return (
            <BrowserRouter history={history}>
                <Provider store={store}>
                    <div className="container">
                        <Nav/>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/battle" component={Battle}/>
                            <Route path="/battle/results" component={BattleResults}/>
                            <Route path="/popular" component={Popular}/>
                            <Route render={() => {
                            return ( <div>Not Found</div> )
                        }}/>
                        </Switch>
                    </div>
                </Provider>
            </BrowserRouter>
        )
    }
}