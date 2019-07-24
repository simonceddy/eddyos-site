import { createStore } from 'redux';
// import Fs from './Fs';
import rootReducer from './reducers';
import WindowManager from './Windows';
import CommandBus from './cli/CommandBus';

// eslint-disable-next-line no-unused-vars
function Kernel(options) {
  this.booted = false;

  this.keyMap = {
    TOGGLE_CLI: ['c', 'C']
  };

  this.keyHandlers = {
    TOGGLE_CLI: (e) => {
      console.log(e.target);
    }
  };

  // this.fs = new Fs();
  let commandBus = null;

  this.commandBus = () => {
    if (commandBus === null) {
      commandBus = new CommandBus();
    }
    return commandBus;
  };

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
