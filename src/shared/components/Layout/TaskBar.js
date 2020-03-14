import React from 'react';
import StyledInvertedDiv from '../Styled/StyledInvertedDiv';

function TaskBar({ children, className }) {
  return (
    <StyledInvertedDiv className={`flex flex-row w-full items-center justify-between p-1 text-xl ${className}`}>
      {children}
    </StyledInvertedDiv>
  );
}

export default TaskBar;
