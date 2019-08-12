import React from 'react';
import TaskbarIcons from './TaskbarIcons';

function Taskbar() {
  return (
    <div className="p-1 flex flex-row justify-between items-center">
      <div>Menu</div>
      <TaskbarIcons />
    </div>
  );
}

export default Taskbar;
