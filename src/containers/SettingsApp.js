import React from 'react';
import Widget from '../shared/containers/Widget';
import Settings from '../components/Widgets/Settings';
import settingsWindowHandler from '../storage/settingsWindowHandler';

const {
  state,
  setPos,
  setSize
} = settingsWindowHandler();

function SettingsApp({ themeMode, setTheme }) {
  return (
    <Widget setPos={setPos} setSize={setSize} state={state}>
      <Settings themeMode={themeMode} setTheme={setTheme} />
    </Widget>
  );
}

export default SettingsApp;
