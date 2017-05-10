/**
 * Created by XY on 2017-05-10.
 */
import React from 'react';
import PropTypes from 'prop-types';

import SelectLanguage from './SelectLanguage';
import api from '../utils/api';


export default class Popular extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos: null
        }
    }

    componentDidMount() {
        this._updateLanguage(this.state.selectedLanguage);
    }

    _updateLanguage = (lang) => {
        console.log('update language: ', lang);
        api.getPopularRepos(lang)
            .then(repos => {
                this.setState({
                    repos: repos
            })
            })
        this.setState(() => {
            return {
                selectedLanguage: lang
            }
        })
    };

    render() {
        let languages = ['All', 'JavaScript', 'Ruby', 'Java', 'CSS', 'Python'];
        return (
            <div>
                <SelectLanguage
                    selectedLanguage={this.state.selectedLanguage}
                    languages={languages}
                    onSelect={this._updateLanguage}/>
                {!this.state.repos
                    ? <p>Loading</p>
                    : <RepoGrid repos={this.state.repos}/>
                }
            </div>
        )
    }
}

function RepoGrid(props) {
    return(
        <ul className="popular-list">
            {props.repos.map((repo ,index) => {
                return(
                <li className="popular-item" key={repo.name} >
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