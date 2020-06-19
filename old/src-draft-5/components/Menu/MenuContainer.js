import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../shared/themes';

const primaryB = theme('mode', colourMaps.primaryB);
const primary = theme('mode', colourMaps.primary);


const StyledMenu = style.div`
  border-color: ${(primary)};
  background-color: ${primaryB};
  color: ${(primary)};
`;

function MenuContainer({ children }) {
  return (
    <StyledMenu>
      {children}
    </StyledMenu>
  );
}


export default MenuContainer;
