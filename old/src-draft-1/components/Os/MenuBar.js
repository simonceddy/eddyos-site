import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
import { menuPrimaryColourMap, menuSecondaryColourMap } from '../../shared/themes';

const primary = theme('mode', menuPrimaryColourMap);
const secondary = theme('mode', menuSecondaryColourMap);

const StyledMenuBar = style.div`
  color: ${primary};
  background-color: ${secondary};
`;

function MenuBar({ children }) {
  return (
    <StyledMenuBar className="p-1 flex flex-row justify-between items-center rounded-none">
      {children}
    </StyledMenuBar>
  );
}

export default MenuBar;
