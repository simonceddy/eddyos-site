import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { NavLink } from 'react-router-dom';
import { colourMaps } from '../../../src-draft-3/shared/themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const WrappedMenuItemLg = styled.span`
  :hover {
    color: ${primary};
    background: ${secondary};
    border-color: ${primary};
  }
`;

function MenuItemLg({ children, to }) {
  return (
    <WrappedMenuItemLg>
      <NavLink to={to} className="text-2xl w-full">
        <span className="w-full">{children}</span>
      </NavLink>
    </WrappedMenuItemLg>
  );
}

export default MenuItemLg;
