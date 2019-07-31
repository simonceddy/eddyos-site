import React from 'react';
import styled from 'styled-components';
import { Rnd } from 'react-rnd';
import { string } from 'prop-types';

const TitleBar = styled.div`

`;

function AppWrapper({ windowHandlers, children, title }) {
  console.log(windowHandlers);
  if (typeof windowHandlers !== 'object') return null;

  const {
    pos: { x, y },
    size: { width, height },
    setPos,
    setSize
  } = windowHandlers;

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
      <TitleBar className="drag-handle">{title}</TitleBar>
      {children}
    </Rnd>
  );
}

AppWrapper.defaultProps = {
  title: ''
};

AppWrapper.propTypes = {
  title: string
};

export default AppWrapper;
