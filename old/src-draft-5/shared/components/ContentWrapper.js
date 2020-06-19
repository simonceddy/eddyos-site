import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import Scrollbar from 'react-perfect-scrollbar';
import { colourMaps } from '../themes';

const secondary = theme('mode', colourMaps.secondary);
const primary = theme('mode', colourMaps.primary);
const primaryB = theme('mode', colourMaps.primaryB);

const StyledContent = styled.div`
  font-size: 1.2rem;
  color: ${primary};
  background-color: ${secondary};
  border-color: ${primaryB};
`;

function ContentWrapper({ children }) {
  return (
    <StyledContent className="flex-1 border overflow-hidden whitespace-pre-line">
      <Scrollbar className="p-2">
        {children}
      </Scrollbar>
    </StyledContent>
  );
}

export default ContentWrapper;
