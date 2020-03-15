import React from 'react';
import FormElement from '../../shared/components/Forms/FormElement';

function ThemeSelector({ themes = [], value, onChange }) {
  return (
    <FormElement label="Select theme" htmlFor="theme-selector">
      <select id="theme-selector" value={value} onChange={onChange}>
        {themes.map(({ id, name }) => (
          <option key={id} value={id} label={name} />
        ))}
      </select>
    </FormElement>
  );
}

export default ThemeSelector;
