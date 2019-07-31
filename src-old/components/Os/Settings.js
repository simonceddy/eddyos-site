import React from 'react';
import { func, string } from 'prop-types';
import style from 'styled-components';
import theme from 'styled-theming';
import { themes, primaryColourMap, secondaryColourMap } from '../../shared/themes';

const primary = theme('mode', primaryColourMap);
const secondary = theme('mode', secondaryColourMap);

const SelectWrapper = style.select`
  background-color: ${secondary};
  color: ${primary};
  border: solid ${primary};
`;


function Settings({ themeMode, themeHandler }) {
  let lastId = 0;

  return (
    <div className="w-full h-full">
      <div className="w-full flex flex-col flex-1">
        <div id="theme-selector" className="flex flex-row justify-between">
          <span className="mr-2">Colour theme:</span>
          <SelectWrapper
            onChange={(e) => {
              e.preventDefault();
              themeHandler(e.target.value);
            }}
            defaultValue={themeMode}
          >
            {themes.map(({ mode, name }) => {
              lastId++;
              return (
                <option value={mode} key={lastId}>
                  {name}
                </option>
              );
            })}
          </SelectWrapper>
        </div>
      </div>
    </div>
  );
}

Settings.propTypes = {
  themeMode: string.isRequired,
  themeHandler: func.isRequired
};

export default Settings;
