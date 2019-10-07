import React from 'react';
import { withRouter } from 'react-router-dom';
import useCliWidget from '../hooks/widgets/useCliWidget';
import Widget from '../shared/containers/Widget';

function CliWidget({
  onClose = () => null,
  zIndex,
  onClick = () => null,
  history,
  selected
}) {
  const { state, setPos, setSize } = useCliWidget();
  return (
    <Widget
      data={state}
      setPos={setPos}
      setSize={setSize}
      title="conEddy"
      onClose={onClose}
      onClick={(e) => {
        history.push('/cli');
        onClick(e);
      }}
      zIndex={zIndex}
      selected={selected}
    >
      .......
    </Widget>
  );
}

export default withRouter(CliWidget);
