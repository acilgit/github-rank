/**
 * Created by 18953 on 2017/5/10.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import PlayerPreview from '../components/PlayerPreview';
import PlayerInput from '../components/PlayerInput';
import actions from '../redux/actions';

class Battle extends React.Component {

    render() {
        let {playerOneName, playerTwoName, playerOneImage, playerTwoImage} = this.props;
        let {match, actions} = this.props;
        return (
            <div>
                <div className="row">
                    {!playerOneName &&
                    <PlayerInput
                        id="playerOne"
                        label="Player One"
                        onSubmit={actions.submitPlayer}/> }
                    {playerOneImage !== null &&
                    <PlayerPreview
                        avatar={playerOneImage}
                        username={playerOneName}>
                        <button
                            onClick={actions.resetPlayer.bind(null, 'playerOne')}
                            className="reset">
                            Reset
                        </button>
                    </PlayerPreview>}
                    {!playerTwoName &&
                    <PlayerInput
                        id="playerTwo"
                        label="Player Two"
                        onSubmit={actions.submitPlayer}/> }
                    {playerTwoImage !== null &&
                    <PlayerPreview
                        avatar={playerTwoImage}
                        username={playerTwoName}>
                        <button
                            onClick={actions.resetPlayer.bind(null, 'playerTwo')}
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

function dispatcher(dispatch){
    return {actions: bindActionCreators(actions, dispatch)}
}

export default connect(state=>state.Battle, dispatcher)(Battle);
