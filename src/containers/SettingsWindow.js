import React from 'react';
import { withRouter } from 'react-router-dom';
import RndWrapper from '../shared/components/RndWrapper';
import Settings from '../components/Settings';
import settingsWindowHandler from '../storage/settingsWindowHandler';
import { getTheme, setTheme } from '../storage/themeMode';

const {
  state,
  setPos,
  setSize
} = settingsWindowHandler();

const themeMode = getTheme();

const setThemeMode = (val) => {
  console.log(val);
  setTheme(val);
};

function SettingsWindow({ history }) {
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
