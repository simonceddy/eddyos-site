/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setSettingsWidgetSize,
  setSettingsWidgetPos
} from '../store/actions/settingsWidgetActions';
import Widget from '../shared/containers/Widget';

function SettingsWidget({
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
      title="Settings"
    >
      Testing
    </Widget>
  );
}

const mapStateToProps = (state) => ({
  widgetState: state.settings,
  active: state.activeWidgets.settings
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSize: (height, width) => dispatch(setSettingsWidgetSize(height, width)),
  setPos: (x, y) => dispatch(setSettingsWidgetPos(x, y)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SettingsWidget));
