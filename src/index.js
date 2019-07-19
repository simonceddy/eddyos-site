import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './shared/styles/index.css';
import './shared/styles/tailwind.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

import * as serviceWorker from './serviceWorker';

import App from './components/App';
import store from './redux/configureStore';

import useOs from './hooks/useOs';

const { os } = useOs();

window.eddyOS = os;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App os={os} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// console.log(store);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
