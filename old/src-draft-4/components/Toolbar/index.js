import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../shared/themes';
import Icons from './Icons';
import Menu from '../Menu';

const primaryB = theme('mode', colourMaps.primaryB);

const StyledTaskbar = styled.div`
  background-color: ${primaryB};
`;

function Toolbar() {
  return (
    <StyledTaskbar className="p-1 flex flex-row justify-between items-center">
      <Menu />
      <Icons />
    </StyledTaskbar>
  );
}

export default Toolbar;
