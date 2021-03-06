import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import monorouter from 'monorouter';
// import monorouterReact from 'monorouter-react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './shared/styles/scrollbar.css';
import './shared/styles/index.css';
import './shared/styles/tailwind.css';
import * as serviceWorker from './serviceWorker';
import Root from './containers/Root';
import store from './store';

// console.log(monorouter().setup(monorouterReact()));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Root />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// console.log(store);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
