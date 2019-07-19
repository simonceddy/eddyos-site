import React from 'react';
import { Rnd } from 'react-rnd';

function RndWrapper({
  pos = {},
  setPos,
  setSize,
  size = {},
  children
}) {
  const x = pos.x || 10;
  const y = pos.y || 10;

  const width = size.width || 350;
  const height = size.height || 300;

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
      className="z-10"
      onDragStop={(e, data) => {
        // console.log(e, data);
        setPos({ x: data.x, y: data.y });
      }}
      onResizeStop={(e, dir, ref) => {
        setSize({
          width: Number.parseInt(ref.style.width, 0),
          height: Number.parseInt(ref.style.height, 0)
        });
      }}
    >
      {children}
    </Rnd>
  );
}

export default RndWrapper;
