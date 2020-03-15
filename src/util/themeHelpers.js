import { getFromStorage, setInStorage } from './storageHelpers';

export function getTheme() {
  return getFromStorage('eddyosTheme', { mode: 'brightGreenDark' }).mode;
}

export function storeTheme(mode) {
  return setInStorage('eddyosTheme', { mode });
}
