import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../themes';

const primary = theme('mode', colourMaps.primary);
const primaryB = theme('mode', colourMaps.primaryB);
const menuButton = theme('mode', colourMaps.menuButton);
const secondary = theme('mode', colourMaps.secondary);

const StyledMenuButton = styled.div`
  border-color: ${(menuButton || secondary)};
  background-color: ${primaryB};
  color: ${(menuButton || secondary)};

  :hover {
    border-color: ${primary};
    background-color: ${secondary};
    color: ${primary};
  }
`;

function MenuButton() {
  return (
    <StyledMenuButton
      role="presentation"
      className="border cursor-pointer os-menu-button py-1 px-4 text-2xl block"
    >
      MENU
    </StyledMenuButton>
  );
}

export default MenuButton;
