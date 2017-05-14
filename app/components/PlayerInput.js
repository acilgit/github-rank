/**
 * Created by 18953 on 2017/5/14.
 */
import React from 'react';
import PropTypes from 'prop-types';

class PlayerInput extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            username: ''

        };
    }

    _onChange = (event) => {
        let value = event.target.value;
        this.setState({
            username: value
        })
    };

    _onSubmit = (event) => {
        let {onSubmit, id} = this.props;
        event.preventDefault();
        onSubmit(id, this.state.username)
    };

    render() {
        let {label} = this.props;
        return (
            <form className="column" onSubmit={this._onSubmit}>
                <label htmlFor="username" className="header">
                    {label}
                </label>
                <input
                    type="text"
                    id="username"
                    placeholder="github username"
                    autoComplete="off"
                    value={this.state.username}
                    onChange={this._onChange}/>
                <button
                    className="button"
                    type="submit"
                    disabled={!this.state.username}>
                    Submit
                </button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default PlayerInput;