import Fs from './Fs';

// eslint-disable-next-line no-unused-vars
function Kernel(options) {
  const booted = false;

  this.fs = new Fs();

  this.booted = () => booted;
}

export default Kernel;
