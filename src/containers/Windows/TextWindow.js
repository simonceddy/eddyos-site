import React from 'react';
import RndWrapper from '../../shared/components/RndWrapper';
import textWindowHandler from '../../storage/textWindowHandler';

function TextWindow({ children, onClose }) {
  const {
    state,
    setPos,
    setSize
  } = textWindowHandler();

  const {
    x,
    y,
    width,
    height
  } = state;

  console.log(state);
  return (
    <RndWrapper
      title="TESTING"
      windowHandlers={{
        pos: { x, y },
        size: { width, height },
        setPos,
        setSize,
      }}
      onClose={onClose}
    >
      {children}
    </RndWrapper>
  );
}

export default TextWindow;
