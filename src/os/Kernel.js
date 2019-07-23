import { createStore } from 'redux';
// import Fs from './Fs';
import rootReducer from './reducers';
import WindowManager from './Windows';

// eslint-disable-next-line no-unused-vars
function Kernel(options) {
  this.booted = false;

  // this.fs = new Fs();

  this.windows = new WindowManager();

  this.getStore = () => {
    if (this.store === undefined) {
      this.store = createStore(rootReducer);
    }

    return this.store;
  };

  this.booted = true;
}

export default Kernel;
