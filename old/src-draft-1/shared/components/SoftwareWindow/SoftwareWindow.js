import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
import SoftwareWindowTitle from './SoftwareWindowTitle';
import { darkPrimaryColourMap } from '../../themes';
import SoftwareWindowContent from './SoftwareWindowContent';

const darkPrimary = theme('mode', darkPrimaryColourMap);

const StyledSoftwareWindow = style.div`
  border-color: ${darkPrimary};
  z-index: 10;

  :focus {
    z-index: 20;
  }
`;

function SoftwareWindow({
  children,
  title,
  noClose = false,
  onClose,
}) {
  return (
    <StyledSoftwareWindow
      tabIndex={0}
      className="software-window border border-4 w-full h-full flex flex-col"
    >
      <SoftwareWindowTitle noClose={noClose} onClose={onClose}>
        {title}
      </SoftwareWindowTitle>
      <SoftwareWindowContent>
        {children}
      </SoftwareWindowContent>
    </StyledSoftwareWindow>
  );
}

export async function AsyncSoftwareWindow(props) {
  return (<SoftwareWindow {...props} />);
}

export default SoftwareWindow;
