import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
import { primaryColourMap } from '../../shared/themes';

const primary = theme('mode', primaryColourMap);

const DesktopWrapper = style.div`
  color: ${primary};
`;

function Desktop({ children }) {
  return (
    <DesktopWrapper className="w-full h-full flex flex-col rounded-none">
      {children}
    </DesktopWrapper>
  );
}

export default Desktop;
