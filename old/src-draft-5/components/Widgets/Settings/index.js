import React from 'react';
import ThemeSelector from './ThemeSelector';

function Settings({ themeMode, setTheme }) {
  return (
    <div className="flex flex-row justify-between">
      <span className="ml-1">Select theme:</span>
      <span className="mr-1">
        <ThemeSelector currentTheme={themeMode} setTheme={setTheme} />
      </span>
    </div>
  );
}

export default Settings;
