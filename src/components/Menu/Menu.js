import React from 'react';
import MenuItem from './MenuItem';

function Menu({ toggler }) {
  return (
    <div className="menu text-2xl flex flex-col text-center my-2 mx-auto">
      <MenuItem to="/text/about" onClick={toggler} exact>About</MenuItem>
      <MenuItem to="/text/services" onClick={toggler} exact>Services</MenuItem>
      <MenuItem to="/text/code" onClick={toggler} exact>Code</MenuItem>
      <MenuItem to="/text/previousWork" onClick={toggler} exact>Previous Work</MenuItem>
      <MenuItem to="/text/contact" onClick={toggler} exact>Contact</MenuItem>
    </div>
  );
}

export default Menu;
