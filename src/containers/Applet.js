/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import StyledPrimaryDiv from '../shared/components/Styled/StyledPrimaryDiv';
import StyledInvertedDiv from '../shared/components/Styled/StyledInvertedDiv';
import CloseButton from '../shared/components/CloseButton';
import StyledPrimaryRnd from '../shared/components/Styled/StyledPrimaryRnd';
import ErrorBoundary from '../shared/components/ErrorBoundary';
import {
  setAppletSize,
  setAppletPosition,
  setAppletTop
} from '../store/actions';

function Applet({
  applet = {},
  componentProps = {},
  onClose,
  setSize,
  setPosition,
  setTop
}) {
  const {
    Component,
    name,
    zIndex,
    id,
    size: { width, height },
    position: { x, y }
  } = applet;

  const onResizeStop = (e, dir, ref) => setSize(
    applet,
    Number.parseInt(ref.style.height, 0),
    Number.parseInt(ref.style.width, 0)
  );

  const onDragStop = (e, data) => {
    // console.log(data);
    setPosition(applet, data.x, data.y);
  };

  const onClick = () => setTop(applet);

  return (
    <ErrorBoundary>
      <StyledPrimaryRnd
        id={id}
        role="presentation"
        position={{
          x,
          y
        }}
        size={{
          width,
          height
        }}
        className="flex flex-col justify-start items-start border-2"
        style={{
          zIndex
        }}
        onClick={onClick}
        onResizeStop={onResizeStop}
        onDragStop={onDragStop}
        dragHandleClassName="drag-handle"
        bounds=".inner-container"
      >
        <StyledInvertedDiv
          className="drag-handle flex flex-row justify-between items-center w-full"
          style={{
            paddingBottom: '2px'
          }}
        >
          <span>
            {name}
          </span>
          <CloseButton onClick={onClose} />
        </StyledInvertedDiv>
        <StyledPrimaryDiv
          className="flex flex-col justify-start items-start flex-1 w-full p-1"
        >
          <Component {...componentProps} />
        </StyledPrimaryDiv>
      </StyledPrimaryRnd>
    </ErrorBoundary>
  );
}

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  setSize: (applet, height, width) => dispatch(setAppletSize(applet, height, width)),
  setPosition: (applet, x, y) => dispatch(setAppletPosition(applet, x, y)),
  setTop: (applet) => dispatch(setAppletTop(applet))
});

export default connect(mapStateToProps, mapDispatchToProps)(Applet);
