/**
 * Slightly modified version of react-digital-clock.
 *
 * Using redux with the intention of making component functional.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContextMenu from 'react-context-menu';
import { set12HourTime } from '../store/actions';

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
      <>
        <ContextMenu
          contextId="os-clock-container"
          items={[
            {
              label: this.props.hour12 ? '24 hour time' : '12 hour time',
              onClick: () => this.props.set12Hour(!this.props.hour12)
            },
          ]}
        />
        <div id="os-clock-container" className="z-10" style={this.state.clockTile}>
          <span style={clockSpan}>{this.state.time}</span>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  hour12: state.clock.hour12
});

const mapDispatchToProps = (dispatch) => ({
  set12Hour: (hour12) => dispatch(set12HourTime(hour12))
});

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
