import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../themes';

const secondary = theme('mode', colourMaps.secondary);
const primaryB = theme('mode', colourMaps.primaryB);

const StyledWindow = styled.div`
  color: ${secondary};
  background-color: ${primaryB};
`;


function WidgetLayout({ children }) {
  return (
    <StyledWindow className="w-full h-full flex flex-col">
      {children}
    </StyledWindow>
  );
}

export default WidgetLayout;
