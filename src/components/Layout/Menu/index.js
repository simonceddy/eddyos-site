import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import MenuItemLg from './MenuItemLg';
import MenuItemSm from './MenuItemSm';
import { colourMaps } from '../../../shared/themes';

const primary = theme('mode', colourMaps.primary);
const primaryB = theme('mode', colourMaps.primaryB);

const MenuBox = styled.div`
  border-color: ${primary};
  background-color: ${primaryB};
  bottom: 60px;
`;

function Menu({ onClick }) {
  return (
    <MenuBox
      role="presentation"
      className="flex flex-col justify-center items-center absolute float-right"
      onClick={onClick}
    >
      <MenuItemLg to="/text/about">About</MenuItemLg>
      <MenuItemLg to="/text/services">Services</MenuItemLg>
      <MenuItemLg to="/text/code">Code</MenuItemLg>
      <MenuItemLg to="/text/contact">Contact</MenuItemLg>
      <div className="flex flex-row justify-between">
        <MenuItemSm to="/settings">Settings</MenuItemSm>
      </div>
    </MenuBox>
  );
}

export default Menu;
