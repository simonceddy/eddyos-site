import windowStorage from './windowStorage';

// TODO make responsive/add breakpoints
const settingsWindowInitialState = {
  x: 15,
  y: 15,
  width: 250,
  height: 250,
};

const STORAGE_KEY = 'eddyosSettingsWin';

const settingsWindowHandler = () => windowStorage(STORAGE_KEY, settingsWindowInitialState);

export default settingsWindowHandler;
