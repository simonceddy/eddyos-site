import React, { useState } from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import TaskbarRightIcons from './TaskbarRightIcons';
import MenuButton from './MenuButton';
import Menu from '../Menu';
import { colourMaps } from '../../../shared/themes';

const primaryB = theme('mode', colourMaps.primaryB);

const StyledTaskbar = styled.div`
  background-color: ${primaryB};
`;

function Taskbar() {
  const [menuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => { setMenuToggled(!menuToggled); };
  return (
    <StyledTaskbar className="p-1 flex flex-row justify-between items-center">
      {menuToggled ? <Menu onClick={toggleMenu} /> : null}
      <MenuButton onClick={toggleMenu} />
      <TaskbarRightIcons />
    </StyledTaskbar>
  );
}

export default Taskbar;
