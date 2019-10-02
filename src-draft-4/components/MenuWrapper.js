import React from 'react';
import Menu, { MenuItem } from 'rc-menu';
import { NavLink } from 'react-router-dom';

function MenuWrapper() {
  return (
    <div
      className="absolute"
      style={{
        bottom: '64px'
      }}
    >
      <Menu className="justify-center uppercase no-underline">
        <MenuItem><NavLink to="/text/about">About</NavLink></MenuItem>
        <MenuItem><NavLink to="/text/services">Services</NavLink></MenuItem>
        <MenuItem><NavLink to="/text/code">code</NavLink></MenuItem>
        <MenuItem><NavLink to="/text/contact">contact</NavLink></MenuItem>
        <MenuItem><NavLink to="/settings">Settings</NavLink></MenuItem>
      </Menu>
    </div>
  );
}

export default MenuWrapper;
