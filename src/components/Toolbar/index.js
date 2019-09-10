import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../shared/themes';
import Icons from './Icons';
import MenuButton from './MenuButton';
import MenuWrapper from '../Menu';

const primaryB = theme('mode', colourMaps.primaryB);

const StyledTaskbar = styled.div`
  background-color: ${primaryB};
`;

function Toolbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => setMenuActive(!menuActive);

  return (
    <StyledTaskbar className="p-1 flex flex-row justify-between items-center">
      <div id="menu-container">
        <MenuButton onClick={toggleMenu} />
        {menuActive ? (<MenuWrapper />) : null}
      </div>
      <Icons />
    </StyledTaskbar>
  );
}

export default Toolbar;
