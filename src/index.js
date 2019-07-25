import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './shared/styles/scrollbar.css';
import './shared/styles/index.css';
import './shared/styles/tailwind.css';

import * as serviceWorker from './serviceWorker';

// import App from './components/App';
import App from './components/Os';
import Kernel from './os/Kernel';

const os = new Kernel();

window.eddyOS = os;

// console.log(os);

ReactDOM.render(
  <CookiesProvider>
    <Provider store={os.getStore()}>
      <BrowserRouter>
        <App os={os} />
      </BrowserRouter>
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);

// console.log(store);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
