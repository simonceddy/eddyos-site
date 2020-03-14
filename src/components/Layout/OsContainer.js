import React from 'react';
import StyledPrimaryDiv from '../../shared/components/Styled/StyledPrimaryDiv';

function OsContainer({ children }) {
  return (
    <StyledPrimaryDiv className="flex flex-col items-center justify-center flex-1 w-full border-2">
      {children}
    </StyledPrimaryDiv>
  );
}

export default OsContainer;
