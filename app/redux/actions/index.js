/**
 * Created by 18953 on 2017/5/11.
 */
import api from '../../api';

import * as types from './actionNames';


let actions = {
    // Popular
    updateLanguage: function (lang) {
        return dispatch => {
            dispatch(setAction(types.updatelanguage, {
                selectedLanguage: lang,
                repos: null
            }));
            api.getPopularRepos(lang)
                .then(repos => {
                    dispatch(setAction(types.updatelanguage, {
                        selectedLanguage: lang,
                        repos: repos
                    }))
                });
        };

    },
};

function setAction(type, state) {
    return {
        type: type,
        state: state
    }
}

export default actions;