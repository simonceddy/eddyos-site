import { getFromStorage, setInStorage } from './helpers';

export function getTheme() {
  return getFromStorage('eddyosTheme', { mode: 'dark80sGreen' }).mode;
}

export function storeTheme(mode) {
  setInStorage('eddyosTheme', { mode });
}
