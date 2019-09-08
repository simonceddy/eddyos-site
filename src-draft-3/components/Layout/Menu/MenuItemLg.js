import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { NavLink } from 'react-router-dom';
import { colourMaps } from '../../../shared/themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const WrappedMenuItemLg = styled.div`
  :hover {
    color: ${primary};
    background: ${secondary};
    border-color: ${primary};
  }
`;

function MenuItemLg({ children, to }) {
  return (
    <WrappedMenuItemLg className="w-full text-center">
      <NavLink to={to} className="text-2xl block">
        {children}
      </NavLink>
    </WrappedMenuItemLg>
  );
}

export default MenuItemLg;
