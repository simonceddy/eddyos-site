import Fs from './Fs';
import ReduxKernel from './reduxOs/Kernel';

// eslint-disable-next-line no-unused-vars
function Kernel(options) {
  const booted = false;

  this.reduxKernel = new ReduxKernel();

  this.fs = new Fs();

  this.booted = () => booted;

  this.getStore = () => this.reduxKernel.getStore();
}

export default Kernel;
