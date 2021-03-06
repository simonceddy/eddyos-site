import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { HashRouter as Router } from 'react-router-dom';
import './shared/styles/scrollbar.css';
import './shared/styles/index.css';
import './shared/styles/tailwind.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import * as serviceWorker from './serviceWorker';
import Root from './containers/Root';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
    <Root />
    {/* </Router> */}
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
