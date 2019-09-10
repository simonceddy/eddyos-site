/* eslint-disable no-unused-vars */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import useTheme from '../hooks/useTheme';
import App from '../components/App';

function Root() {
  const { theme: mode, setThemeMode } = useTheme();
  console.log('root container was rendered');
  return (
    <ThemeProvider theme={{ mode }}>
      <App />
    </ThemeProvider>
  );
}

export default Root;
