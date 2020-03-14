import React, { Component } from 'react';
import { connect } from 'react-redux';

const clockTile = {
  color: 'white',
  textAlign: 'center'
};

const clockSpan = {
  padding: '4px'
};

let runner;

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: this.getCurrentTime(),
      clockTile: { ...clockTile, ...props.style }
    };
  }

  componentDidMount() {
    runner = setInterval(() => {
      this.setState({ time: this.getCurrentTime() });
    }, 1000);
  }

  componentWillUnmount() {
    if (runner) {
      clearInterval(runner);
    }
  }

  getCurrentTime = () => {
    const locale = this.props.locale ? this.props.locale : [];

    const hour12 = this.props.hour12 !== false;

    let hour; let minute; let
      second;

    if (this.props.format) {
      switch (this.props.format.toLowerCase()) {
        case 'hh':
          hour = '2-digit';
          break;
        case 'hh-mm':
          hour = '2-digit';
          minute = '2-digit';
          break;
        case 'hh-mm-ss':
          hour = '2-digit';
          minute = '2-digit';
          second = '2-digit';
          break;
        default:
          hour = '2-digit';
          minute = '2-digit';
          second = '2-digit';
      }
    }
    const time = new Date().toLocaleTimeString(locale, {
      hour12,
      hour,
      minute,
      second
    });
    return time;
  }

  render() {
    return (
      <div style={this.state.clockTile}>
        <span style={clockSpan}>{this.state.time}</span>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  hour12: state.clock.hour12
});

export default connect(mapStateToProps)(Clock);
