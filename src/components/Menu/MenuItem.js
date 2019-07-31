import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem({ children, to }) {
  return (
    <NavLink to={to}>
      {children}
    </NavLink>
  );
}

export default MenuItem;
