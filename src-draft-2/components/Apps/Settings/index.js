import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
import { themeNames, colourMaps } from '../../../themes';

const options = themeNames();

const primary = theme('mode', colourMaps.primary);
const secondary = theme('mode', colourMaps.secondary);

const SelectWrapper = styled.select`
  background-color: ${secondary};
  color: ${primary};
  border: solid ${primary};
`;

function Settings({ kernel }) {
  const themeMode = kernel.loadBinding('themeMode')();
  const setTheme = kernel.loadBinding('setTheme');
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
