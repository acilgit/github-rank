/**
 * Created by XY on 2017-05-10.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import actions from '../redux/actions';

import SelectLanguage from '../components/SelectLanguage';
import Loading from '../components/Loading';
import RepoGrid from '../components/RepoGrid';


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
Popular.propTypes = {};

export default connect(state=>state.Popular)(Popular);