import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../shared/themes';

const primaryB = theme('mode', colourMaps.primaryB);

const StyledContainer = styled.div`
  flex-direction: column;
  border-color: ${primaryB};

  @media (max-width: 640px) {
    flex-direction: column-reverse;
  }
`;

function AppContainer({ children }) {
  return (
    <StyledContainer className="flex-1 flex m-1 border">
      {children}
    </StyledContainer>
  );
}

export default AppContainer;
