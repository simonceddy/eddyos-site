import React from 'react';
import { withRouter } from 'react-router-dom';
import useCliWidget from '../hooks/widgets/useCliWidget';
import Widget from '../shared/containers/Widget';

function CliWidget({ history }) {
  const { state, setPos, setSize } = useCliWidget();
  return (
    <Widget
      data={state}
      setPos={setPos}
      setSize={setSize}
      title="conEddy"
      onClose={() => {
        console.log('closing cli widget');
        history.push('/digg');
      }}
    >
      .......
    </Widget>
  );
}

export default withRouter(CliWidget);
