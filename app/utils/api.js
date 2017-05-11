/**
 * Created by XY on 2017-05-10.
 */
import axios from 'axios';

var id = '';
var secret = '';
var params = '?client_id=' + id + '&client_secret=' + secret;

function getProfile(username) {
    return axios.get('https://api.github.com/users/' + username + params)
        .then(user => {
            return user.data;
        })
}

function getRepos(username) {
    return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=50')
        .then(user => {
            return user.data;
        })
}

function getUserData(player) {
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then((data) => {
        let profile = data[0];
        let repos = data[1];

        return {
            profile: profile,
            score: calculateScore(profile, repos)
        };
    })
}

function getStarCount(repos) {
    console.log(repos);
    return repos.reduce((count, repo) => {
        return count + repo.stargazers_count;
    }, 0);
}

function calculateScore(profile, repos) {
    let followers = profile.followers;
    let totalStarts = getStarCount(repos);
    return followers * 3 + totalStarts;
}

function sortPlayers(players) {
    return players.sort((a, b) => {
        return b.score - a.score;
    })
}

function handleError(error) {
    console.warn(error);
    return null;
}

module.exports = {
    battle: (players) => {
        return axios.all(players.map(getUserData))
            .then(sortPlayers)
            .catch(handleError);
    },
    getPopularRepos: (language) => {
        let encodeURI = window.encodeURI('https://api.github.com/search/repositories?q=starts:>1+language:'
            + language + '&sort=stars&order=desc&type=Repositories');
        return axios.get(encodeURI)
            .then(res => {
                console.log('res: ', res.data.items);
                return res.data.items;
            })//.catch(e => console.log('error:', e));

    }
};