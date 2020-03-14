import React from 'react';
import { withRouter } from 'react-router-dom';
import useTextWidget from '../hooks/widgets/useTextWidget';
import Widget from '../shared/containers/Widget';

function TextWidget({
  history,
  onClick = () => null,
  zIndex,
  onClose,
  selected
}) {
  const { state, setPos, setSize } = useTextWidget();
  return (
    <Widget
      onClose={onClose}
      data={state}
      setPos={setPos}
      setSize={setSize}
      onClick={(e) => {
        history.push('/text');
        onClick(e);
      }}
      zIndex={zIndex}
      selected={selected}
    >
      asdadadsadad;lajd;alsjdl;akd;lakdlakd;ldkakd;adka;ldk;l
    </Widget>
  );
}

export default withRouter(TextWidget);
