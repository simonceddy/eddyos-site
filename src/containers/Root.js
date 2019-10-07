import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import useTheme from '../hooks/useTheme';
import TextWidget from './TextWidget';
import SettingsWidget from './SettingsWidget';
import CliWidget from './CliWidget';

function Root() {
  // eslint-disable-next-line no-unused-vars
  const { theme: mode, setThemeMode } = useTheme();
  return (
    <ThemeProvider theme={{ mode }}>
      <App>
        <TextWidget />
        <SettingsWidget setTheme={setThemeMode} />
        <CliWidget />
      </App>
    </ThemeProvider>
  );
}

export default Root;
