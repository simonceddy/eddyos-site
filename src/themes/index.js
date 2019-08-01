import startCase from 'lodash/startCase';
import dark80sGreen from './dark80sGreen';
import rexPowerColt from './rexPowerColt';
import pleasantSunshine from './pleasantSunshine';

export const themes = {
  dark80sGreen,
  rexPowerColt,
  pleasantSunshine
};

export const colourMaps = {
  primary: {},
  primaryA: {},
  primaryB: {},
  primaryC: {},
  secondary: {},
  text: {},
  heading: {},
  menuButton: {}
};


const initColourMaps = () => {
  Object.entries(themes).map(([name, theme]) => {
    // console.log(theme, name);
    colourMaps.primary[name] = theme.primary;
    colourMaps.primaryA[name] = theme.primaryA;
    colourMaps.primaryB[name] = theme.primaryB;
    colourMaps.primaryC[name] = theme.primaryC;
    colourMaps.secondary[name] = theme.secondary;
    colourMaps.text[name] = theme.text || theme.primary;
    colourMaps.heading[name] = theme.heading || theme.primaryA;
    colourMaps.menuButton[name] = theme.menuButton || theme.secondary;
    return true;
  });
};

initColourMaps();

// console.log(colourMaps);

export const themeNames = () => Object.keys(themes).map(val => ({
  value: val,
  label: startCase(val)
}));

export const getTheme = mode => themes[mode];

export const getColourMap = colour => colourMaps[colour] || false;
