import React from 'react';
import StyledPrimaryDiv from '../Styled/StyledPrimaryDiv';

function Flex1Container({
  children,
  flexDirection = 'flex-col',
  justify = 'justify-start',
  items = 'items-center',
  className = ''
}) {
  return (
    <StyledPrimaryDiv className={`flex-1 flex ${flexDirection} ${justify} ${items} ${className}`}>
      {children}
    </StyledPrimaryDiv>
  );
}

export default Flex1Container;
