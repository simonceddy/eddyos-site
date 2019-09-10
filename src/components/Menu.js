import React from 'react';
import Menu, { MenuItem } from 'rc-menu';

function MenuWrapper() {
  return (
    <div
      className="absolute"
      style={{
        bottom: '64px'
      }}
    >
      <Menu>
        <MenuItem>About</MenuItem>
        <MenuItem>Code</MenuItem>
        <MenuItem>Services</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuWrapper;
