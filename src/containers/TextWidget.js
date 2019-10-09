/* eslint-disable no-unused-vars */
import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { setTextWidgetSize, setTextWidgetPos } from '../store/actions/textWidgetActions';
import Widget from '../shared/containers/Widget';

function TextWidget({
  widgetState,
  setSize,
  setPos,
  active
}) {
  console.log(active);
  return (
    <Widget
      data={widgetState}
      setSize={setSize}
      setPos={setPos}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TextWidget));
