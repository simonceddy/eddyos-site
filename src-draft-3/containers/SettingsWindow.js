import React from 'react';
import { withRouter } from 'react-router-dom';
import RndWrapper from '../shared/containers/RndWrapper';
import Settings from '../components/Settings';
import settingsWindowHandler from '../storage/settingsWindowHandler';
import { SETTINGS_WINDOW_MIN_WIDTH } from '../shared/settings';

const {
  state,
  setPos,
  setSize
} = settingsWindowHandler();


function SettingsWindow({ onClose, themeMode, setThemeMode }) {
  return (
    <RndWrapper
      containerState={state}
      title="Settings"
      onClose={onClose}
      setPos={setPos}
      setSize={setSize}
      minWidth={SETTINGS_WINDOW_MIN_WIDTH}
    >
      <Settings
        themeMode={themeMode}
        setTheme={setThemeMode}
      />
    </RndWrapper>
  );
}

export default withRouter(SettingsWindow);
