import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../shared/themes';

const secondary = theme('mode', colourMaps.secondary);
const primaryC = theme('mode', colourMaps.primaryC);

const StyledUnderlay = styled.div`
  background-color: ${secondary};
`;

const UnderlayText = styled.div`
  color: ${primaryC};
`;

function Underlay() {
  return (
    <StyledUnderlay
      className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center"
      style={{
        zIndex: '-1'
      }}
    >
      <UnderlayText className="text-center text-theme-primary-c flex flex-col">
        <span style={{ fontSize: '7rem' }}>
          Simon Eddy
        </span>
        <span style={{ fontSize: '2rem' }}>
          PHP and JavaScript Developer
        </span>
        <span style={{ fontSize: '2rem' }}>
          Audio Engineer
        </span>
      </UnderlayText>
    </StyledUnderlay>
  );
}

export default Underlay;
