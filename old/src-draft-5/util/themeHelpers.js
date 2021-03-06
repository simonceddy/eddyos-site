import { getFromStorage, setInStorage } from './storageHelpers';

export function getTheme() {
  return getFromStorage('eddyosTheme', { mode: 'pleasantSunshine' }).mode;
}

export function storeTheme(mode) {
  setInStorage('eddyosTheme', { mode });
}
