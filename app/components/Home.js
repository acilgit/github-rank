/**
 * Created by 18953 on 2017/5/10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import api from '../utils/api';


export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="home-container">
                <h1>
                    Github Battle:与你的好友对战吧...and stuff.
                </h1>
                <Link className="button" to="/battle">
                    Battle
                </Link>
            </div>
        )
    }
}

Home.propTypes = {};