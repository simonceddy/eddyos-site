import React from 'react';
import StyledPrimaryDiv from '../../shared/components/Styled/StyledPrimaryDiv';
import StyledInvertedDiv from '../../shared/components/Styled/StyledInvertedDiv';
import CloseButton from '../../shared/components/CloseButton';
import StyledPrimaryRnd from '../../shared/components/Styled/StyledPrimaryRnd';

function Applet({
  children,
  onClose,
  onClick,
  name = '',
  zIndex = 10
}) {
  return (
    <StyledPrimaryRnd
      role="presentation"
      default={{
        x: 0,
        y: 0,
        width: 320,
        height: 200,
      }}
      className="flex flex-col justify-start items-start border-2"
      style={{
        zIndex
      }}
      onClick={onClick}
    >
      <StyledInvertedDiv
        className="flex flex-row justify-between items-center w-full"
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
        {children}
      </StyledPrimaryDiv>
    </StyledPrimaryRnd>
  );
}

export default Applet;
