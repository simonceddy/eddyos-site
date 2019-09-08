import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Rnd } from 'react-rnd';
import { string } from 'prop-types';
import ExitButton from './ExitButton';
import { colourMaps } from '../../themes';

const secondary = theme('mode', colourMaps.secondary);
const primary = theme('mode', colourMaps.primary);
const primaryB = theme('mode', colourMaps.primaryB);


const StyledWindow = styled.div`
  color: ${secondary};
  background-color: ${primaryB};
`;

const StyledContent = styled.div`
  font-size: 1.2rem;
  color: ${primary};
  background-color: ${secondary};
  border-color: ${primaryB};
`;

function AppWrapper({
  windowHandlers,
  children,
  title,
  onClose
}) {
  // console.log(windowHandlers);
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
      <StyledWindow className="w-full h-full flex flex-col">
        <div
          className="drag-handle text-2xl px-2 cursor-move flex flex-row justify-between items-center"
        >
          <span>{title}</span>
          <ExitButton handler={onClose} />
        </div>
        <StyledContent className="flex-1 border p-2">
          {children}
        </StyledContent>
      </StyledWindow>
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
