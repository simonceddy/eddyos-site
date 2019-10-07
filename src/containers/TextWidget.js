import React from 'react';
import { withRouter } from 'react-router-dom';
import useTextWidget from '../hooks/widgets/useTextWidget';
import Widget from '../shared/containers/Widget';

function TextWidget({ history }) {
  const { state, setPos, setSize } = useTextWidget();
  return (
    <Widget
      onClose={() => {
        console.log('closing text widget');
        history.push('/kyt');
      }}
      data={state}
      setPos={setPos}
      setSize={setSize}
    >
      asdadadsadad;lajd;alsjdl;akd;lakdlakd;ldkakd;adka;ldk;l
    </Widget>
  );
}

export default withRouter(TextWidget);
