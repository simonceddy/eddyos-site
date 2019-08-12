import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../themes';
// import MenuWrapper from './MenuWrapper';
import Menu from '../Menu';
import BottomBarIcons from './BottomBarIcons';


const primaryB = theme('mode', colourMaps.primaryB);

const StyledBottomBar = styled.div`
  background-color: ${primaryB}
`;

function BottomBar({ children }) {
  return (
    <StyledBottomBar className="p-1 flex flex-row justify-between">
      <Menu />
      {children}
      <BottomBarIcons />
    </StyledBottomBar>
  );
}

export default BottomBar;
