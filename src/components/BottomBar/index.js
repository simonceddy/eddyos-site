import React from 'react';
// import MenuWrapper from './MenuWrapper';
import Menu from '../Menu';

function BottomBar({ children }) {
  return (
    <div className="p-1 bg-theme-primary-b flex flex-row justify-between">
      <Menu />
      {children}
    </div>
  );
}

export default BottomBar;
