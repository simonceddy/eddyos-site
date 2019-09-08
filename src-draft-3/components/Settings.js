import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { themeNames, colourMaps } from '../shared/themes';

const options = themeNames();

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const SelectWrapper = styled.select`
  background-color: ${secondary};
  color: ${primary};
  border: solid ${primary};
`;

// TODO remove kernel and simplify
function Settings({ themeMode, setTheme }) {
  let lastId = 0;
  // console.log(options);
  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-between">
        <span>
          Select theme:
        </span>
        <SelectWrapper
          onChange={(e) => {
            e.preventDefault();
            // console.log(e.target);
            setTheme(e.target.value);
          }}
          defaultValue={themeMode}
        >
          {options.map(({ value, label }) => {
            lastId++;
            return (
              <option value={value} key={lastId}>
                {label}
              </option>
            );
          })}
        </SelectWrapper>
      </div>
    </div>
  );
}

export default Settings;
