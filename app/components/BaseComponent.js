/**
 * Created by XY on 2017-05-11.
 */
import React from 'react';
import PropTypes from 'prop-types';

CL = (data) => {
    console.log(data);
};

 class BaseComponent extends React.Component {
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
function mapStateToProps(state) {
    const {image} = state;
    return {
        image
    };
}

export default connect(mapStateToProps)(ImageContainer);