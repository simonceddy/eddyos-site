/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  setCliWidgetSize,
  setCliWidgetPos
} from '../store/actions/cliWidgetActions';
import Widget from '../shared/containers/Widget';
import { toggleWidgetInactive } from '../store/actions/widgetActions';
import { moveToTop } from '../store/actions/zIndexActions';

function CliWidget({
  widgetState,
  setSize,
  setPos,
  onClose,
  active,
  level,
  bringToTop,
  top
}) {
  // console.log(widgetState);
  return (
    <Widget
      data={widgetState}
      setSize={setSize}
      setPos={setPos}
      title="conEddy"
      onClose={onClose}
      zIndex={level}
      onClick={() => {
        if (top !== 'cli') {
          bringToTop();
        }
      }}
    >
      Testing
    </Widget>
  );
}

const mapStateToProps = (state) => ({
  widgetState: state.cli,
  active: state.activeWidgets.cli,
  level: state.levels.cli,
  top: state.levels.top
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSize: (height, width) => dispatch(setCliWidgetSize(height, width)),
  setPos: (x, y) => dispatch(setCliWidgetPos(x, y)),
  onClose: () => dispatch(toggleWidgetInactive('cli')),
  bringToTop: () => dispatch(moveToTop('cli'))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CliWidget));
