import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuItemSm({ children, to }) {
  return (
    <NavLink to={to} className="text-base">
      {children}
    </NavLink>
  );
}

export default MenuItemSm;
