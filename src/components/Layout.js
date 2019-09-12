import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../shared/themes';
import Underlay from './Underlay';
import Desktop from './Desktop';
import Toolbar from './Toolbar';

const primaryB = theme('mode', colourMaps.primaryB);

const StyledContainer = styled.div`
  flex-direction: column;
  border-color: ${primaryB};

  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

function Layout({ children }) {
  return (
    <div className="w-full h-full flex flex-col">
      <StyledContainer className="flex-1 flex m-1 border">
        <Underlay />
        <Toolbar />
        <Desktop>
          {children}
        </Desktop>
      </StyledContainer>
    </div>
  );
}

export default Layout;
