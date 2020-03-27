import React from 'react';
import StyledPrimaryDiv from '../../shared/components/Styled/StyledPrimaryDiv';

function RootContainer({ children }) {
  return (
    <StyledPrimaryDiv
      className="flex flex-col p-2 justify-between items-center w-full h-full font-mono"
    >
      {children}
    </StyledPrimaryDiv>
  );
}

export default RootContainer;
