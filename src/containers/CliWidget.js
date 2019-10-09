/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setCliWidgetSize,
  setCliWidgetPos
} from '../store/actions/cliWidgetActions';
import Widget from '../shared/containers/Widget';

function CliWidget({
  widgetState,
  setSize,
  setPos,
  active
}) {
  console.log(widgetState);
  return (
    <Widget
      data={widgetState}
      setSize={setSize}
      setPos={setPos}
      title="conEddy"
    >
      Testing
    </Widget>
  );
}

const mapStateToProps = (state) => ({
  widgetState: state.cli,
  active: state.activeWidgets.cli
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSize: (height, width) => dispatch(setCliWidgetSize(height, width)),
  setPos: (x, y) => dispatch(setCliWidgetPos(x, y)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CliWidget));
