/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTextWidgetSize, setTextWidgetPos } from '../store/actions/textWidgetActions';
import Widget from '../shared/containers/Widget';
import { toggleWidgetInactive } from '../store/actions/widgetActions';
import { moveToTop } from '../store/actions/zIndexActions';

function TextWidget({
  widgetState,
  setSize,
  setPos,
  active,
  onClose,
  level,
  bringToTop,
  top
}) {
  // console.log(active);
  return (
    <Widget
      data={widgetState}
      setSize={setSize}
      setPos={setPos}
      onClose={onClose}
      zIndex={level}
      onClick={() => {
        if (top !== 'text') {
          bringToTop();
        }
      }}
    >
      Testing
    </Widget>
  );
}

const mapStateToProps = (state) => ({
  widgetState: state.text,
  active: state.activeWidgets.text,
  level: state.levels.text,
  top: state.levels.top
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSize: (height, width) => dispatch(setTextWidgetSize(height, width)),
  setPos: (x, y) => dispatch(setTextWidgetPos(x, y)),
  onClose: () => dispatch(toggleWidgetInactive('text')),
  bringToTop: () => dispatch(moveToTop('text'))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TextWidget));
