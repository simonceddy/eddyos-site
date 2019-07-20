/* eslint-disable import/prefer-default-export */
import {
  SET_TEXT_WINDOW_SIZE,
  SET_TEXT_WINDOW_POS
} from '../types/textActionTypes';

export function setPos(x, y) {
  return { type: SET_TEXT_WINDOW_POS, x, y };
}

export function setSize(height, width) {
  return { type: SET_TEXT_WINDOW_SIZE, height, width };
}
