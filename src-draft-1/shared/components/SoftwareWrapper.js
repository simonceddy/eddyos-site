import React from 'react';
// import SoftwareWindow from '../../../shared/components/SoftwareWindow/SoftwareWindow';
import RndWrapper from './RndWrapper';

function SoftwareWrapper({
  pos,
  size,
  setPos,
  setSize,
  children
}) {
  return (
    <RndWrapper
      draggable
      x={pos.x}
      y={pos.y}
      width={size.width}
      height={size.height}
      setPos={setPos}
      setSize={setSize}
    >
      {children}
    </RndWrapper>
  );
}

export default SoftwareWrapper;
