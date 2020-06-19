import React from 'react';
import style from 'styled-components';
import theme from 'styled-theming';
import { underlayColourMap, secondaryColourMap } from '../../shared/themes';

const bgColour = theme('mode', secondaryColourMap);

const textColour = theme('mode', underlayColourMap);

const UnderlayWrapper = style.div`
  z-index: -1;
  color: ${textColour};
  background-color: ${bgColour}
`;


function Underlay() {
  return (
    <UnderlayWrapper className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
      <span className="text-center" style={{ fontSize: '7rem' }}>
        Simon Eddy
      </span>
    </UnderlayWrapper>
  );
}

export default Underlay;
