import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import App from '../components/App';
import TextApp from './TextApp';
import SettingsApp from './SettingsApp';

function Root() {
  const { theme: mode, setThemeMode } = useTheme();
  console.log('root container was rendered');
  return (
    <ThemeProvider theme={{ mode }}>
      <App>
        <Route path="/text" render={() => (<TextApp />)} />
        <Route
          path="/settings"
          render={() => (<SettingsApp setTheme={setThemeMode} themeMode={mode} />)}
        />
      </App>
    </ThemeProvider>
  );
}

export default Root;
