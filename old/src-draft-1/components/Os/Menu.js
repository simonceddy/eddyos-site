import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
// import Modal from 'react-responsive-modal';
import { menuPrimaryColourMap, menuSecondaryColourMap } from '../../shared/themes';
import MenuItem from './MenuItem';

const primary = theme('mode', menuPrimaryColourMap);
const secondary = theme('mode', menuSecondaryColourMap);

const StyledMenu = style.div`
  background-color: ${secondary};
  border-color: ${primary};
  color: ${primary};
  bottom: 60px;
`;

function Menu({ toggleMenu }) {
  return (
    <StyledMenu className="flex border flex-col justify-around absolute z-10 p-2 text-3xl">
      <MenuItem to="/text" onClick={toggleMenu}>Text Test</MenuItem>
      <MenuItem to="/" onClick={toggleMenu}>Test</MenuItem>
      <MenuItem to="/" onClick={toggleMenu}>Test</MenuItem>
      <MenuItem to="/" onClick={toggleMenu}>Test</MenuItem>
      <MenuItem to="/settings" onClick={toggleMenu}>Settings</MenuItem>
    </StyledMenu>
  );
}

export default Menu;
