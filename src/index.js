import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Os from './components/Os';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './shared/styles/scrollbar.css';
import './shared/styles/index.css';
import './shared/styles/tailwind.css';
import Kernel from './os/Kernel';
import Bootloader from './components/Bootloader';

const kernel = new Kernel();

ReactDOM.render(
  <Bootloader kernel={kernel}>
    <Os kernel={kernel} />
  </Bootloader>,
  document.getElementById('root')
);

// console.log(store);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
