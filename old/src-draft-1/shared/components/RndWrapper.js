import React from 'react';
import { Rnd } from 'react-rnd';

function RndWrapper({
  // dispatch,
  x = 10,
  y = 10,
  setPos,
  height = 350,
  width = 300,
  setSize,
  children
}) {
  return (
    <Rnd
      default={{
        x,
        y,
        width,
        height,
      }}
      minWidth={120}
      minHeight={90}
      bounds="#desktop-container"
      dragHandleClassName="drag-handle"
      onDragStop={(e, data) => setPos({ x: data.x, y: data.y })
      }
      onResizeStop={(e, dir, ref) => setSize({
        width: Number.parseInt(ref.style.width, 0),
        height: Number.parseInt(ref.style.height, 0)
      })}
    >
      {children}
    </Rnd>
  );
}

export default RndWrapper;
