import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from '../components/Layout/index';
import useTheme from '../hooks/useTheme';

function Root() {
  const { theme: mode, setThemeMode } = useTheme();
  console.log(setThemeMode);
  return (
    <ThemeProvider theme={{ mode }}>
      <Layout>
        Testing
      </Layout>
    </ThemeProvider>
  );
}

export default Root;
