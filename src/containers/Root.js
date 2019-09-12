/* eslint-disable no-unused-vars */
import React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import App from '../components/App';
import Settings from '../components/Widgets/Settings';
import TextApp from './TextApp';

function Root() {
  const { theme: mode, setThemeMode } = useTheme();
  console.log('root container was rendered');
  return (
    <ThemeProvider theme={{ mode }}>
      <App>
        <Route path="/text" render={() => (<TextApp />)} />
        <Route path="/settings" render={() => (<Settings setTheme={setThemeMode} themeMode={mode} />)} />
      </App>
    </ThemeProvider>
  );
}

export default Root;
