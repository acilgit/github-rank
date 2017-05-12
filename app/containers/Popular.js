/**
 * Created by XY on 2017-05-10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


import SelectLanguage from '../components/SelectLanguage';
import Loading from '../components/Loading';
// import api from '../api/index';
import actions from '../redux/actions';


class Popular extends React.Component {

    componentDidMount() {
        this._updateLanguage(this.props.selectedLanguage);
    }

    _updateLanguage = (lang) => {
        this.props.dispatch(actions.updateLanguage(lang));
    };

    render() {
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        let {selectedLanguage, repos} = this.props;
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={selectedLanguage}
                    languages={languages}
                    onSelect={this._updateLanguage}/>
                {!repos
                    ? <Loading speed={200}/>
                    : <RepoGrid repos={repos}/>
                }
            </div>
        )
    }
}

function RepoGrid(props) {
    return (
        <ul className="popular-list">
            {props.repos.map((repo, index) => {
                return (
                    <li className="popular-item" key={repo.name}>
                        <div className="popular-rank">#{index + 1}</div>
                        <ul className="space-list-items">
                            <li>
                                <img src={repo.owner.avatar_url}
                                     alt={"Avatar for " + repo.owner.login}
                                     className="avatar"/>
                            </li>
                            <li><a href={repo.html_url}>{repo.name}</a></li>
                            <li>@{repo.owner.login}</li>
                            <li>{repo.stargazers_count} stars</li>
                        </ul>
                    </li>
                )
            })}
        </ul>
    )
}

RepoGrid.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.shape({
        owner: PropTypes.shape({
            avatar_url: PropTypes.string,
            login: PropTypes.string
        }),
        html_url: PropTypes.string,
        name: PropTypes.string,
        stargazers_count: PropTypes.number
    })).isRequired
};

//Popular.propTypes = {};

export default connect(state=>state.Popular)(Popular);