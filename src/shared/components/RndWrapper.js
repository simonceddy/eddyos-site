import React from 'react';
import { connect } from 'react-redux';
import { Rnd } from 'react-rnd';

function RndWrapper({
  dispatch,
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
      className="z-10"
      onDragStop={(e, data) => dispatch(setPos(data.x, data.y))
      }
      onResizeStop={(e, dir, ref) => dispatch(setSize(
        Number.parseInt(ref.style.width, 0),
        Number.parseInt(ref.style.height, 0)
      ))}
    >
      {children}
    </Rnd>
  );
}

export default connect()(RndWrapper);
