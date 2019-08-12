import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import Text from './Text';
import Cli from './Cli';
import SettingsWindow from './SettingsWindow';
import useTheme from '../hooks/useTheme';

function Root() {
  const { theme: mode, setThemeMode } = useTheme();

  return (
    <ThemeProvider theme={{ mode }}>

      <div className="w-full h-full flex flex-col">
        <App>
          <Route path="/text" component={Text} />
          <Route path="/cli" component={Cli} />
          <Route
            path="/settings"
            render={() => (
              <SettingsWindow themeMode={mode} setThemeMode={setThemeMode} />
            )}
          />
        </App>
      </div>
    </ThemeProvider>
  );
}

export default Root;
