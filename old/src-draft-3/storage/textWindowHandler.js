import windowStorage from './windowStorage';

// TODO make responsive/add breakpoints
const textWindowInitialState = {
  x: 20,
  y: 20,
  width: 250,
  height: 250,
};

const STORAGE_KEY = 'eddyosTextWin';

const textWindowHandler = () => windowStorage(STORAGE_KEY, textWindowInitialState);

export default textWindowHandler;
