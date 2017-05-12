/**
 * Created by XY on 2017-05-10.
 */
import React from 'react';
import {Route, Switch} from 'react-router-dom'

import Popular from './Popular';
import Nav from '../components/Nav';
import Home from './Home';
import Battle from './Battle';
import BattleResults from "../components/BattleResults";


class App extends React.Component {
    render() {
        return (
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
        )
    }
}

export default App;