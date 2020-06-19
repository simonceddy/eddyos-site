import React from 'react';
import Selector from '../../../shared/components/Selector';
import { themeNames } from '../../../shared/themes';

const options = themeNames();

function ThemeSelector({ setTheme, currentTheme }) {
  const onChange = (e) => {
    e.preventDefault();
    // console.log(e.target);
    setTheme(e.target.value);
  };

  let lastId = 0;

  return (
    <Selector defaultValue={currentTheme} onChange={onChange}>
      {options.map(({ value, label }) => {
        lastId++;
        return (
          <option value={value} key={lastId}>
            {label}
          </option>
        );
      })}
    </Selector>
  );
}

export default ThemeSelector;
