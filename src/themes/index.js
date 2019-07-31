import startCase from 'lodash/startCase';
import dark80sGreen from './dark80sGreen';
import rexPowerColt from './rexPowerColt';
import pleasantSunshine from './pleasantSunshine';

export const themes = {
  dark80sGreen,
  rexPowerColt,
  pleasantSunshine
};

export const themeNames = () => Object.keys(themes).map(val => ({
  value: val,
  label: startCase(val)
}));

const loadedColourMaps = {};

export const getTheme = mode => themes[mode];

export const getColourMap = (mode) => {
  if (loadedColourMaps[mode] === undefined) {
    // init colour map for mode
  }
  return loadedColourMaps[mode] || false;
};
