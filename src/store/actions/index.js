import { SET_ICON_TEXT_SIZE, SET_24_HOUR_TIME } from '../types';

export const setIconTextSize = (size) => ({
  type: SET_ICON_TEXT_SIZE,
  payload: { size }
});

export const set24HourTime = (hour12) => ({
  type: SET_24_HOUR_TIME,
  payload: { hour12 }
});
