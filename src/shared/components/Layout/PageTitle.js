import React from 'react';
import StyledTitle from '../Styled/StyledTitle';

function PageTitle({ children }) {
  return (
    <StyledTitle className="text-4xl font-mono font-bold">
      {children}
    </StyledTitle>
  );
}

export default PageTitle;
