/**
 * Created by XY on 2017-05-10.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


import './index.css';

class Badge extends React.Component {
    render() {
        let {user} = this.props;
        return (
            <div>
                <img src={user.img} alt="Avatar" style={{width:100, height:100}}/>
                <h1>Name: {user.name}</h1>
                <h3>username: {user.username}</h3>
            </div>
        )
    }
}

Badge.propTypes = {
    user: PropTypes.shape({
        img: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        username: PropTypes.string.isRequired
    }).isRequired
};

var user = {
    img: 'https://avatars0.githubusercontent.com/u/2933430?v=3&s=460',
    name: 'Jackson Jay',
    username: 'Mr.Mystery'
};

ReactDOM.render(
    <Badge user={user}/>,
    document.getElementById('app-container')
);