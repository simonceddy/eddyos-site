import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItem({ children, to, onClick }) {
  return (
    <NavLink to={to} onClick={onClick}>{children}</NavLink>
  );
}

export default MenuItem;
