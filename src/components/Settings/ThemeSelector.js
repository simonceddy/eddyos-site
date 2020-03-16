import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { colourMaps } from '../../shared/themes';
import FormElement from '../../shared/components/Forms/FormElement';

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);
const tertiary = theme('mode', colourMaps.tertiary);

const StyledSelect = styled.select`
  color: ${(tertiary || primary)};
  border-color: ${primary};
  background-color: ${secondary};
`;

function ThemeSelector({ themes = [], value, onChange }) {
  return (
    <FormElement label="Select theme" htmlFor="theme-selector">
      <StyledSelect
        id="theme-selector"
        value={value}
        onChange={onChange}
        className="border-2 p-1"
      >
        {themes.map(({ id, name }) => (
          <option key={id} value={id} label={name} />
        ))}
      </StyledSelect>
    </FormElement>
  );
}

export default ThemeSelector;
