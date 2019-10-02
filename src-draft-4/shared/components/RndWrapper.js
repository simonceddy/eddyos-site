import React from 'react';
import { Rnd } from 'react-rnd';
import { WINDOW_MIN_WIDTH, WINDOW_MIN_HEIGHT } from '../../support/defaultSettings';
import rndHelper from '../../support/rndHelper';


function RndWrapper({
  setPos,
  setSize,
  children,
  data,
  minHeight,
  minWidth
}) {
  // console.log(windowHandlers);
  const { onDragStop, onResizeStop } = rndHelper(setSize, setPos);

  const {
    x,
    y,
    width,
    height
  } = data;

  return (
    <Rnd
      default={{
        x,
        y,
        width,
        height,
      }}
      minWidth={minWidth || WINDOW_MIN_WIDTH}
      minHeight={minHeight || WINDOW_MIN_HEIGHT}
      bounds="#desktop-container"
      dragHandleClassName="drag-handle"
      onDragStop={onDragStop}
      onResizeStop={onResizeStop}
    >
      {children}
    </Rnd>
  );
}


export default RndWrapper;
