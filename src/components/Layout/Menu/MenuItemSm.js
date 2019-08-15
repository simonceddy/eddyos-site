import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { NavLink } from 'react-router-dom';
import { colourMaps } from '../../../shared/themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const WrappedMenuItemSm = styled.span`
  :hover {
    color: ${primary};
    background: ${secondary};
    border-color: ${primary};
  }
`;

function MenuItemSm({ children, to }) {
  return (
    <WrappedMenuItemSm>
      <NavLink to={to} className="text-xl w-full">
        <span className="w-full">{children}</span>
      </NavLink>
    </WrappedMenuItemSm>
  );
}

export default MenuItemSm;
