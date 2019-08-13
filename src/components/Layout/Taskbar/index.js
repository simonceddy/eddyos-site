import React from 'react';
import TaskbarRightIcons from './TaskbarRightIcons';
import MenuButton from './MenuButton';

function Taskbar() {
  return (
    <div className="p-1 flex flex-row justify-between items-center">
      <MenuButton />
      <TaskbarRightIcons />
    </div>
  );
}

export default Taskbar;
