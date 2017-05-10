/**
 * Created by XY on 2017-05-10.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class SelectLanguage extends React.Component{
    render() {
        let {languages, onSelect, selectedLanguage}= this.props;
        return (
            <ul className="languages">
                {languages.map(lang => {
                    return (
                        <li
                            style={lang === selectedLanguage ? {color: '#d0021b'} : null}
                            onClick={onSelect.bind(null, lang)}
                            key={lang}>
                            {lang}
                        </li>
                    )
                })}
            </ul>
        )
    }
}

SelectLanguage.propTypes = {
    languages: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectedLanguage: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};