import { createStore } from 'redux';
// import Fs from './Fs';
import rootReducer from './reducers';
import WindowManager from './Windows';
import CommandBus from './cli/commandBus';

// eslint-disable-next-line no-unused-vars
function Kernel(options) {
  this.booted = false;

  this.keyMap = {
    toggleCli: ['c', 'C']
  };

  this.keyHandlers = {
    toggleCliHandler: () => {}
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
