import { SET_ICON_TEXT_SIZE } from '../types';

const defaultState = {
  homeIconSize: '5rem'
};

export default function systemSettingsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_ICON_TEXT_SIZE:
      return { ...state, homeIconSize: action.payload.size };
    default:
      return state;
  }
}
