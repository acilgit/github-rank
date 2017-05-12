/**
 * Created by XY on 2017-05-11.
 */
import React from 'react';
import queryString from 'query-string';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import api from '../api/index';
import PlayerPreview from './PlayerPreview';


export default class BattleResults extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            winner: null,
            loser: null,
            error: null,
            loading: true,

        };
    }

    componentDidMount() {
        var players = queryString.parse(this.props.location.search);
        api.battle([players.playerOneName, players.playerTwoName])
            .then(results => {
                console.log(results);
                this.setState(() => {
                    let newState = {};
                    if (!results) {
                        newState = {
                            error: 'There was a error. Check that both users exist on Github.',
                            loading: false,
                            winner: null,
                            loser: null
                        }
                    } else {
                        newState = {
                            error: null,
                            winner: results[0],
                            loser: results[1],
                            loading: false
                        };
                    }
                    return newState;
                })
            })
    }

    render() {
        let {error, winner, loser, loading} = this.state;
        if (loading) {
            return (<p>Loading</p>)
        }
        if (error) {
            return (
                <div>
                    <p>Error: {error}</p>
                    <Link to='/battle'>Reset</Link>
                </div>
            )
        }
        return (
            <div className="row">
                <Player label='Winner' profile={winner} score={winner.score}/>
                <Player label='Loser' profile={loser} score={loser.score}/>
            </div>
        )
    }
}

//BattleResults.propTypes = {};

function Player(props) {
    return (
        <div>
            <h1 className="header">{props.label}</h1>
            <h3 style={{textAlign:'center'}}>Score: {props.score}</h3>
            <Profile info={props.profile.profile}/>
        </div>
    )
}

Player.propTypes = {
    label: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    profile: PropTypes.object.isRequired
};

function Profile(props) {
    let {avatar_url, login, name, location,company,followers, following, public_repos, blog} = props.info;
    console.log(props.info);
    return (
        <div>
            <PlayerPreview avatar={avatar_url} username={login}>
                <ul className="space-list-items">
                    {name && <li>{name}</li>}
                    {location && <li>{location}</li>}
                    {company && <li>{company}</li>}
                    <li>Followers: {followers}</li>
                    <li>Following: {following}</li>
                    <li>Public Repos: {public_repos}</li>
                    {blog && <li><a href={blog}>{blog}</a></li>}
                </ul>
            </PlayerPreview>
        </div>
    )
}

Profile.propTypes = {
    info: PropTypes.object.isRequired,
};