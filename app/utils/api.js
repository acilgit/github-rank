/**
 * Created by XY on 2017-05-10.
 */
import axios from 'axios';

module.exports = {
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