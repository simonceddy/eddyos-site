import React from 'react';
import { withRouter } from 'react-router-dom';
import RndWrapper from '../shared/components/RndWrapper';
import Settings from '../components/Settings';
import settingsWindowHandler from '../storage/settingsWindowHandler';

const {
  state,
  setPos,
  setSize
} = settingsWindowHandler();


function SettingsWindow({ history, themeMode, setThemeMode }) {
  return (
    <RndWrapper
      containerState={state}
      title="Settings"
      onClose={() => history.push('/')}
      setPos={setPos}
      setSize={setSize}
    >
      <Settings
        themeMode={themeMode}
        setTheme={setThemeMode}
      />
    </RndWrapper>
  );
}

export default withRouter(SettingsWindow);
