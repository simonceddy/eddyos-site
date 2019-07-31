import React from 'react';
import { connect } from 'react-redux';
// import SoftwareWindow from '../../../shared/components/SoftwareWindow/SoftwareWindow';
import RndWrapper from './RndWrapper';

function SoftwareWrapper({
  x,
  y,
  height,
  width,
  setPos,
  setSize,
  children
}) {
  return (
    <RndWrapper
      draggable
      x={x}
      y={y}
      width={width}
      height={height}
      setPos={setPos}
      setSize={setSize}
    >
      {children}
    </RndWrapper>
  );
}

export default connect()(SoftwareWrapper);
