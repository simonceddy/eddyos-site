import React from 'react';
import { func } from 'prop-types';
import style from 'styled-components';
import theme from 'styled-theming';
import { menuPrimaryColourMap, menuSecondaryColourMap } from '../../shared/themes';

const primary = theme('mode', menuPrimaryColourMap);
const secondary = theme('mode', menuSecondaryColourMap);

const StyledMenuButton = style.button`
  border-color: ${primary};
  color: ${primary};
  background-color: ${secondary};
`;

function MenuButton({ menuToggle }) {
  return (
    <StyledMenuButton
      type="button"
      className="p-1 border border-4 no-underline w-24 text-3xl"
      onClick={menuToggle}
    >
      Menu
    </StyledMenuButton>
  );
}

MenuButton.propTypes = {
  menuToggle: func.isRequired
};

export default MenuButton;
