import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { Rnd } from 'react-rnd';
import { string } from 'prop-types';
import ExitButton from './ExitButton';
import { colourMaps } from '../themes';
import { WINDOW_MIN_WIDTH, WINDOW_MIN_HEIGHT } from '../settings';
import rndHelper from '../../helpers/rndHelper';

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

function RndWrapper({
  setPos,
  setSize,
  children,
  title,
  onClose,
  containerState,
  minHeight = WINDOW_MIN_HEIGHT,
  minWidth = WINDOW_MIN_WIDTH
}) {
  // console.log(windowHandlers);
  const { onDragStop, onResizeStop } = rndHelper(setSize, setPos);

  const {
    x,
    y,
    width,
    height
  } = containerState;

  return (
    <Rnd
      default={{
        x,
        y,
        width,
        height,
      }}
      minWidth={minWidth}
      minHeight={minHeight}
      bounds="#desktop-container"
      dragHandleClassName="drag-handle"
      onDragStop={onDragStop}
      onResizeStop={onResizeStop}
    >
      <StyledWindow className="w-full h-full flex flex-col">
        <div
          className="drag-handle text-2xl px-2 cursor-move flex flex-row justify-between items-center overflow-hidden"
        >
          <div>{title}</div>
          <ExitButton handler={onClose} />
        </div>
        <StyledContent className="flex-1 border p-2">
          {children}
        </StyledContent>
      </StyledWindow>
    </Rnd>
  );
}

RndWrapper.defaultProps = {
  title: ''
};

RndWrapper.propTypes = {
  title: string
};

export default RndWrapper;
