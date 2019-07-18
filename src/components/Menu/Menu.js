import React from 'react';
import MenuItem from './MenuItem';

function Menu() {
  return (
    <div className="menu text-2xl flex flex-col text-center my-2 mx-auto">
      <MenuItem to="/about" exact>About</MenuItem>
      <MenuItem to="/services" exact>Services</MenuItem>
      <MenuItem to="/code" exact>Code</MenuItem>
      <MenuItem to="/previous-work" exact>Previous Work</MenuItem>
      <MenuItem to="/contact" exact>Contact</MenuItem>
    </div>
  );
}

export default Menu;
