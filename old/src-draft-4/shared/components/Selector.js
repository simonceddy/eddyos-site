import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../themes';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const SelectWrapper = styled.select`
  background-color: ${secondary};
  color: ${primary};
  border: solid ${primary};
`;

function Selector({ children, onChange, defaultValue }) {
  return (
    <SelectWrapper
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {children}
    </SelectWrapper>
  );
}

export default Selector;
