import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import MenuItemLg from './MenuItemLg';
import MenuButton from './MenuButton';
import MenuItemSm from './MenuItemSm';
import { colourMaps } from '../../../src-draft-3/shared/themes';

const primary = theme('mode', colourMaps.primary);
const primaryB = theme('mode', colourMaps.primaryB);

const MenuWrapper = styled.div`
  background: none;

  .os-menu {
    display: none;
    visibility: hidden;
    position: absolute;
    opacity: 0;
    z-index: 10;
    left: 5px;
    bottom: 55px;
  }

  &:hover > .os-menu {
    display: flex;
    visibility: visible;
    opacity: 1;
  }
`;

const MenuBox = styled.div`
  border-color: ${primary};
  background-color: ${primaryB};
`;

function Menu() {
  return (
    <MenuWrapper>
      <MenuBox
        className="os-menu flex-col border"
      >
        <MenuItemLg to="/">Home</MenuItemLg>
        <MenuItemLg to="/text/about">About</MenuItemLg>
        <MenuItemLg to="/">Home</MenuItemLg>
        <MenuItemLg to="/settings">Settings</MenuItemLg>
        <div className="flex flex-row">
          <MenuItemSm to="/cookie-policy">Cookie Policy</MenuItemSm>
        </div>
      </MenuBox>
      <MenuButton />
    </MenuWrapper>
  );
}

export default Menu;
