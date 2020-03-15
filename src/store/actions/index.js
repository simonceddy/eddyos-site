import { SET_ICON_TEXT_SIZE, SET_24_HOUR_TIME, SET_THEME_MODE } from '../types';

export const setIconTextSize = (size) => ({
  type: SET_ICON_TEXT_SIZE,
  payload: { size }
});

export const set24HourTime = (hour12) => ({
  type: SET_24_HOUR_TIME,
  payload: { hour12 }
});

export const setThemeMode = (mode) => ({
  type: SET_THEME_MODE,
  payload: { mode }
});
