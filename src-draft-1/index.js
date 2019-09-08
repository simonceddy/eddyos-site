import React from 'react';
import ReactDOM from 'react-dom';
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
import Bootstrapper from './components/Os/Bootstrapper';

const os = new Kernel();

// console.log(os);

ReactDOM.render(
  <CookiesProvider>
    <Bootstrapper>
      <App os={os} />
    </Bootstrapper>
  </CookiesProvider>,
  document.getElementById('root')
);

// console.log(store);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
