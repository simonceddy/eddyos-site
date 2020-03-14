import React from 'react';
import StyledInvertedDiv from '../Styled/StyledInvertedDiv';

function TaskBar({ children }) {
  return (
    <StyledInvertedDiv className="flex flex-row border-b-2 w-full items-center justify-between p-1 text-xl">
      {children}
    </StyledInvertedDiv>
  );
}

export default TaskBar;
