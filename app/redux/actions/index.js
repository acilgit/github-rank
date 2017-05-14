/**
 * Created by 18953 on 2017/5/11.
 */
import jwt from 'jsonwebtoken';
import _ from 'lodash';

import api from '../../api';
import {setToken} from '../../api/methods';

import * as types from './actionTypes';


let actions = {
    // Common
    setCurrentUser: function (user) {
        return setAction(types.setCurrentUser, {
            isAuth: !_.isEmpty(user),
            user
        })
    },
    login: function (data) {
        return dispatch => {
            api.login(data)
                .then(token => {
                    let user = jwt.decode(token);
                    dispatch(actions.setCurrentUser(user));
                })
        };
    },

    // Popular
    updateLanguage: function (lang) {
        return dispatch => {
            dispatch(setAction(types.updateLanguage, {
                selectedLanguage: lang,
                repos: null
            }));
            api.getPopularRepos(lang)
                .then(repos => {
                    dispatch(setAction(types.updateLanguage, {
                        selectedLanguage: lang,
                        repos: repos
                    }))
                });
        };
    },
    // Battle
    resetPlayer: function (id) {
            let newState = {};
            newState[id + 'Name'] = '';
            newState[id + "Image"] = null;
            return setAction(types.resetPlayer, newState);
    },
    submitPlayer: function (id, username) {
            let newState = {};
            newState[id + 'Name'] = username;
            newState[id + "Image"] = 'https://github.com/' + username + '.png?size=200';
            return   setAction(types.submitPlayer, newState);
    }
};

function setAction(type, state) {
    return {
        type: type,
        state: state
    }
}

export default actions;