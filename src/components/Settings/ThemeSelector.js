import React from 'react';
import FormElement from '../../shared/components/Forms/FormElement';
import StyledSelect from '../../shared/components/Styled/StyledSelect';

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
