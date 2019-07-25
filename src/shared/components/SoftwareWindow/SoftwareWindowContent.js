import React from 'react';
import Scrollbar from 'react-perfect-scrollbar';
import style from 'styled-components';
import theme from 'styled-theming';
import { primaryColourMap, secondaryColourMap } from '../../themes';

const primary = theme('mode', primaryColourMap);
const secondary = theme('mode', secondaryColourMap);

const StyledSoftwareWindowContent = style.div`
  background-color: ${secondary};
  color: ${primary};
`;

function SoftwareWindowContent({ children }) {
  return (
    <StyledSoftwareWindowContent className="window-content text-xl whitespace-pre-line flex-1 cursor-text overflow-hidden">
      <Scrollbar className="p-2">
        <div>
          {children}
        </div>
      </Scrollbar>
    </StyledSoftwareWindowContent>
  );
}

export default SoftwareWindowContent;
