import React from 'react';
import TaskBar from '../../shared/components/Layout/TaskBar';

function BottomBar({ children }) {
  return (
    <TaskBar className="border-t-2">
      {children}
    </TaskBar>
  );
}

export default BottomBar;
