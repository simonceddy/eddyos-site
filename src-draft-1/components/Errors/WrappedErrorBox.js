import React from 'react';
import RndWrapper from '../../shared/components/RndWrapper';

function WrappedErrorBox({
  pos,
  size,
  setPos,
  setSize,
  children
}) {
  return (
    <RndWrapper pos={pos} size={size} setPos={setPos} setSize={setSize}>
      {children}
    </RndWrapper>
  );
}

export default WrappedErrorBox;
