import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import MenuItem from './MenuItem';
import { colourMaps } from '../../shared/themes';

const primaryB = theme('mode', colourMaps.primaryB);
const primary = theme('mode', colourMaps.primary);
// const secondary = theme('mode', colourMaps.secondary);

const StyledMenu = styled.div`
  border-color: ${(primary)};
  background-color: ${primaryB};
  color: ${(primary)};
`;

function MenuItems({ toggled = false, toggleMenu = () => null }) {
  const display = toggled ? 'flex' : 'none';
  return (
    <StyledMenu
      id="menu-items"
      className="absolute bottom-auto p-0 border w-32 flex flex-col justify-center items-center text-xl z"
      style={{
        display
      }}
      onPointerLeave={() => toggleMenu(!toggled)}
    >
      <ul className="w-full">
        <MenuItem to="/">Testing</MenuItem>
        <MenuItem to="/text/about">About</MenuItem>
        <MenuItem to="/text/services">Services</MenuItem>
        <MenuItem to="/text/code">code</MenuItem>
        <MenuItem to="/text/contact">contact</MenuItem>
        <MenuItem to="/settings">Settings</MenuItem>
      </ul>
    </StyledMenu>
  );
}

export default MenuItems;
