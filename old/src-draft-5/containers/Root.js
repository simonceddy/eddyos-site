/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from '../components/App';
import useTheme from '../hooks/useTheme';
import Widgets from './Widgets';

function Root({ history }) {
  const { theme: mode, setThemeMode } = useTheme();
  // const { activeWidgets, addWidget, closeWidget } = useWidgets();
  // console.log(history);

  console.log('rendering root');
  return (
    <ThemeProvider theme={{ mode }}>
      <App>
        <Widgets />
      </App>
    </ThemeProvider>
  );
}

export default withRouter(Root);
