/**
 * Created by 18953 on 2017/5/10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import PlayerPreview from '../components/PlayerPreview';

export default class Battle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            playerOneName: '',
            playerTwoName: '',
            playerOneImage: null,
            playerTwoImage: null
        }
    }

    _handleSubmit = (id, username) => {
        let newState = {};
        newState[id + 'Name'] = username;
        newState[id + "Image"] = 'https://github.com/' + username + '.png?size=200';
        this.setState(() => {
            return newState;
        })
    };

    _onReset = (id) => {
        let newState = {};
        newState[id + 'Name'] = '';
        newState[id + "Image"] = null;
        this.setState(() => {
            return newState;
        })
    };

    render() {
        let {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.state;
        let {match} = this.props;
        return (
            <div>
                <div className="row">
                    {!playerOneName &&
                    <PlayerInput
                        id="playerOne"
                        label="Player One"
                        onSubmit={this._handleSubmit}/> }
                    {playerOneImage !== null &&
                    <PlayerPreview
                        avatar={playerOneImage}
                        username={playerOneName}>
                        <button
                            onClick={this._onReset.bind(null, 'playerOne')}
                            className="reset">
                            Reset
                        </button>
                    </PlayerPreview>}
                    {!playerTwoName &&
                    <PlayerInput
                        id="playerTwo"
                        label="Player Two"
                        onSubmit={this._handleSubmit}/> }
                    {playerTwoImage !== null &&
                    <PlayerPreview
                        avatar={playerTwoImage}
                        username={playerTwoName}>
                        <button
                            onClick={this._onReset.bind(null, 'playerTwo')}
                            className="reset">
                            Reset
                        </button>
                    </PlayerPreview>}
                </div>
                {playerOneImage && playerTwoImage &&
                <Link className="button" to={{
                    pathname: match.url + '/results',
                    search: '?playerOneName=' + playerOneName + '&playerTwoName=' + playerTwoName
                }}>
                    Battle
                </Link>}

            </div>
        )
    }
}

Battle.propTypes = {};

class PlayerInput extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            username: ''

        };
    }

    _onChange = (event) => {
        let value = event.target.value;
        this.setState({
            username: value
        })
    };

    _onSubmit = (event) => {
        let {onSubmit, id} = this.props;
        event.preventDefault();
        onSubmit(id, this.state.username)
    };

    render() {
        let {label} = this.props;
        return (
            <form className="column" onSubmit={this._onSubmit}>
                <label htmlFor="username" className="header">
                    {label}
                </label>
                <input
                    type="text"
                    id="username"
                    placeholder="github username"
                    autoComplete="off"
                    value={this.state.username}
                    onChange={this._onChange}/>
                <button
                    className="button"
                    type="submit"
                    disabled={!this.state.username}>
                    Submit
                </button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};