import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem(props) {
  return (
    <NavLink {...props} className="menu-item">
      <span className="w-full text-center">{props.children}</span>
    </NavLink>
  );
}

export default MenuItem;
