import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../shared/themes';

const primary = theme('mode', colourMaps.primary);
const primaryB = theme('mode', colourMaps.primaryB);
const menuButton = theme('mode', colourMaps.menuButton);
const secondary = theme('mode', colourMaps.secondary);

const StyledMenuButton = styled.button`
  border-color: ${(menuButton || secondary)};
  background-color: ${primaryB};
  color: ${(menuButton || secondary)};

  :hover, :focus {
    border-color: ${primary};
    background-color: ${secondary};
    color: ${primary};
  }

  :active {
    border-color: ${secondary};
    background-color: ${primary};
    color: ${secondary};
  }
`;

function MenuButton({ onClick }) {
  return (
    <StyledMenuButton
      id="menu-button"
      type="button"
      className="border cursor-pointer os-menu-button py-1 px-4 text-2xl block relative"
      onClick={onClick}
    >
      MENU
    </StyledMenuButton>
  );
}

export default MenuButton;
