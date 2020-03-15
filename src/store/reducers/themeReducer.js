import { SET_THEME_MODE } from '../types';
import { getTheme, storeTheme } from '../../util/themeHelpers';

const defaultState = {
  mode: getTheme()
};

export default function themeReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_THEME_MODE:
      return { ...state, ...storeTheme(action.payload.mode) };
    default:
      return state;
  }
}
