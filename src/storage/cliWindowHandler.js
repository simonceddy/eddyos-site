import windowStorage from './windowStorage';

// TODO make responsive/add breakpoints
const cliWindowInitialState = {
  x: 35,
  y: 35,
  width: 250,
  height: 250,
};

const STORAGE_KEY = 'eddyosCliWin';

const cliWindowHandler = () => windowStorage(STORAGE_KEY, cliWindowInitialState);

export default cliWindowHandler;
