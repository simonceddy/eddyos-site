import React from 'react';
import TaskBar from '../../shared/components/Layout/TaskBar';
import HomeButton from './HomeButton';

function BottomBar({ children }) {
  return (
    <TaskBar className="border-t-2">
      <HomeButton />
      {children}
    </TaskBar>
  );
}

export default BottomBar;
