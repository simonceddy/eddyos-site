import React, { useState } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import Text from './Text';
import Cli from './Cli';
import SettingsWindow from './SettingsWindow';
import useTheme from '../hooks/useTheme';
// import WindowManager from './WindowManager';

function Root({ history }) {
  console.log(history);
  const { theme: mode, setThemeMode } = useTheme();
  const [textApp, setTextApp] = useState(false);
  const [settingsApp, setSettingsApp] = useState(false);
  const [cliApp, setCliApp] = useState(false);
  return (
    <ThemeProvider theme={{ mode }}>
      <div className="w-full h-full flex flex-col">
        <App>
          <Route render={() => (
            <>
              {textApp ? (
                <Text
                  onClose={() => {
                    setTextApp(false);
                    history.push('/');
                  }}
                />
              ) : null}
              {settingsApp ? (
                <SettingsWindow
                  themeMode={mode}
                  setThemeMode={setThemeMode}
                  onClose={() => {
                    setSettingsApp(false);
                    history.push('/');
                  }}
                />
              ) : null}
              {cliApp ? (
                <Cli
                  onClose={() => {
                    setCliApp(false);
                    history.push('/');
                  }}
                />
              ) : null}
            </>
          )}
          />
          <Route
            path="/text"
            render={() => {
              setTextApp(true);
              return null;
            }}
          />
          <Route
            path="/cli"
            render={() => {
              setCliApp(true);
              return null;
            }}
          />
          <Route
            path="/settings"
            render={() => {
              setSettingsApp(true);
              return null;
            }}
          />
        </App>
      </div>
    </ThemeProvider>
  );
}

export default withRouter(Root);
