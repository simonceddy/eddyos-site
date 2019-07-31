import React from 'react';
import Select from 'react-select';
import { themeNames } from '../../../themes';

const options = themeNames();

function Settings({ kernel }) {
  const themeMode = kernel.loadBinding('themeMode')();
  const setTheme = kernel.loadBinding('setTheme');
  console.log(themeMode);
  return (
    <div className="flex flex-col">
      <h2>Settings</h2>

      <div className="flex flex-row justify-between">
        <span>
          Select theme:
        </span>
        <Select
          value={themeMode}
          options={options}
          onChange={option => setTheme(option.value)}
        />
      </div>
    </div>
  );
}

export default Settings;
