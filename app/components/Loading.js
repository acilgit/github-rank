/**
 * Created by XY on 2017-05-11.
 */
import React from 'react';
import PropTypes from 'prop-types';

let style = {
    textAlign: 'center',
    fontSize: '35px'
};

export default class Loading extends React.Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            text: props.text
        };
    }

    componentDidMount() {
        let stopper = this.props.text + '.......';
        this.interval = window.setInterval(() => {
            if (this.state.text === stopper) {
                this.setState({
                    text: this.props.text
                })
            } else {
                this.setState({
                    text: this.state.text + '.'
                })
            }
        }, this.props.speed);
    }

    componentWillUnmount() {
        window.clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p style={style}>{this.state.text}</p>
            </div>
        )
    }
}

Loading.propTypes = {
    text: PropTypes.string.isRequired,
    speed: PropTypes.number.isRequired
};
Loading.defaultProps = {
    text: 'Loading',
    speed: 200
};