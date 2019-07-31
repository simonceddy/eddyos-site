import React from 'react';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import MenuButton from './MenuButton';

const MenuWrapper = styled.div`
  background: none;

  .os-menu {
    display: none;
    visibility: hidden;
    font-size: 1.3rem;
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

function Menu() {
  return (
    <MenuWrapper>
      <div
        className="os-menu flex-col bg-theme-primary-b border border-theme-primary p-2"
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/">About</MenuItem>
        <MenuItem to="/">Home</MenuItem>
        <MenuItem to="/settings">Settings</MenuItem>
        Testing
      </div>
      <MenuButton />
    </MenuWrapper>
  );
}

export default Menu;
