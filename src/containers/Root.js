import React from 'react';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import useTheme from '../hooks/useTheme';

function Root() {
  // eslint-disable-next-line no-unused-vars
  const { theme: mode, setThemeMode } = useTheme();
  return (
    <ThemeProvider theme={{ mode }}>
      <App />
    </ThemeProvider>
  );
}

export default Root;
