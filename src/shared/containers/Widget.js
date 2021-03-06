import React from 'react';
import { Rnd } from 'react-rnd';
import rndHelper from '../../util/rndHelper';
import { WINDOW_MIN_WIDTH, WINDOW_MIN_HEIGHT } from '../types/widgetDimensions';
import WidgetLayout from '../components/WidgetLayout';
import WidgetTitleBar from '../components/WidgetTitleBar';
import ContentWrapper from '../components/ContentWrapper';

function Widget({
  title = '',
  setPos,
  setSize,
  children,
  data,
  minHeight = null,
  minWidth = null,
  onClick = () => null,
  onClose = () => null,
  zIndex = 20
}) {
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
      onClick={onClick}
      style={{
        zIndex
      }}
    >
      <WidgetLayout>
        <WidgetTitleBar onClose={onClose}>{title}</WidgetTitleBar>
        <ContentWrapper>
          {children}
        </ContentWrapper>
      </WidgetLayout>
    </Rnd>
  );
}

export default Widget;
