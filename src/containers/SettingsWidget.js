/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setSettingsWidgetSize,
  setSettingsWidgetPos
} from '../store/actions/settingsWidgetActions';
import Widget from '../shared/containers/Widget';
import { toggleWidgetInactive } from '../store/actions/widgetActions';
import { moveToTop } from '../store/actions/zIndexActions';

function SettingsWidget({
  widgetState,
  setSize,
  setPos,
  active,
  onClose,
  level,
  bringToTop,
  top
}) {
  // console.log(widgetState, level);
  return (
    <Widget
      data={widgetState}
      setSize={setSize}
      setPos={setPos}
      title="Settings"
      onClose={onClose}
      zIndex={level}
      onClick={() => {
        if (top !== 'settings') {
          bringToTop();
        }
      }}
    >
      Testing
    </Widget>
  );
}

const mapStateToProps = (state) => ({
  widgetState: state.settings,
  active: state.activeWidgets.settings,
  level: state.levels.settings,
  top: state.levels.top
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSize: (height, width) => dispatch(setSettingsWidgetSize(height, width)),
  setPos: (x, y) => dispatch(setSettingsWidgetPos(x, y)),
  onClose: () => dispatch(toggleWidgetInactive('settings')),
  bringToTop: () => dispatch(moveToTop('settings'))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SettingsWidget));
