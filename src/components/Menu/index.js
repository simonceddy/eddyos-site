import React from 'react';
import StyledPrimaryDiv from '../../shared/components/Styled/StyledPrimaryDiv';

function Menu({ children, toggled = false }) {
  return (
    <StyledPrimaryDiv
      className="absolute bottom-auto flex-col items-start justify-between overflow-visible z-50 p-1 border-2"
      style={{
        display: toggled ? 'flex' : 'none',
        width: '250px'
      }}
    >
      {children}
    </StyledPrimaryDiv>
  );
}

export default Menu;
