import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './shared/styles/scrollbar.css';
import './shared/styles/index.css';
import './shared/styles/tailwind.css';
import * as serviceWorker from './serviceWorker';
import Root from './containers/Root';
import { getTheme } from './storage/themeMode';

const mode = getTheme();

ReactDOM.render(
  <ThemeProvider theme={{ mode }}>
    <Router>
      <Root />
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// console.log(store);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
