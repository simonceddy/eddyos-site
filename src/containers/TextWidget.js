/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTextWidgetSize, setTextWidgetPos } from '../store/actions/textWidgetActions';
import Widget from '../shared/containers/Widget';
import { toggleWidgetInactive } from '../store/actions/widgetActions';

function TextWidget({
  widgetState,
  setSize,
  setPos,
  active,
  onClose
}) {
  // console.log(active);
  return (
    <Widget
      data={widgetState}
      setSize={setSize}
      setPos={setPos}
      onClose={onClose}
    >
      Testing
    </Widget>
  );
}

const mapStateToProps = (state) => ({
  widgetState: state.text,
  active: state.activeWidgets.text
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSize: (height, width) => dispatch(setTextWidgetSize(height, width)),
  setPos: (x, y) => dispatch(setTextWidgetPos(x, y)),
  onClose: () => dispatch(toggleWidgetInactive('text'))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TextWidget));
