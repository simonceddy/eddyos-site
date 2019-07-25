import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
import SoftwareWindowTitle from './SoftwareWindowTitle';
import { darkPrimaryColourMap } from '../../themes';
import SoftwareWindowContent from './SoftwareWindowContent';

const darkPrimary = theme('mode', darkPrimaryColourMap);

const StyledSoftwareWindow = style.div`
  border-color: ${darkPrimary};
`;

function SoftwareWindow({ children, title }) {
  return (
    <StyledSoftwareWindow className="software-window border border-4 w-full h-full flex flex-col">
      <SoftwareWindowTitle>{title}</SoftwareWindowTitle>
      <SoftwareWindowContent>
        {children}
      </SoftwareWindowContent>
    </StyledSoftwareWindow>
  );
}

export default SoftwareWindow;
