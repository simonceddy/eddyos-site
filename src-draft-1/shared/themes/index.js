import {
  apple2ETheme,
  blueYellowTheme,
  lightGreyscaleTheme,
  blackWhiteTheme
} from './colours';

export const themes = [
  { mode: 'dark', name: 'Apple IIE Style' },
  { mode: 'light', name: 'Light Greyscale' },
  { mode: 'blueYellow', name: 'Blue and Yellow' },
  { mode: 'blackWhite', name: 'Black and White' },
];

export const defaultThemeMode = 'blueYellow';

export const primaryColourMap = {
  dark: apple2ETheme.primary,
  light: lightGreyscaleTheme.primary,
  blueYellow: blueYellowTheme.primary,
  blackWhite: blackWhiteTheme.primary
};

export const secondaryColourMap = {
  dark: apple2ETheme.secondary,
  light: lightGreyscaleTheme.secondary,
  blueYellow: blueYellowTheme.secondary,
  blackWhite: blackWhiteTheme.secondary
};

export const underlayColourMap = {
  dark: apple2ETheme.underlay,
  light: lightGreyscaleTheme.underlay,
  blueYellow: blueYellowTheme.underlay,
  blackWhite: blackWhiteTheme.underlay,
};

export const darkPrimaryColourMap = {
  dark: apple2ETheme.darkPrimary,
  light: lightGreyscaleTheme.darkPrimary,
  blueYellow: blueYellowTheme.darkPrimary,
  blackWhite: blackWhiteTheme.darkPrimary,
};

export const lightPrimaryColourMap = {
  dark: apple2ETheme.lightPrimary,
  light: lightGreyscaleTheme.lightPrimary,
  blueYellow: blueYellowTheme.lightPrimary,
  blackWhite: blackWhiteTheme.lightPrimary,
};

export const menuPrimaryColourMap = {
  dark: apple2ETheme.menuPrimary,
  light: lightGreyscaleTheme.menuPrimary,
  blueYellow: blueYellowTheme.menuPrimary,
  blackWhite: blackWhiteTheme.menuPrimary,
};

export const menuSecondaryColourMap = {
  dark: apple2ETheme.menuSecondary,
  light: lightGreyscaleTheme.menuSecondary,
  blueYellow: blueYellowTheme.menuSecondary,
  blackWhite: blackWhiteTheme.menuSecondary,
};
