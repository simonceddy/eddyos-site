import { SET_24_HOUR_TIME } from '../types';

const defaultState = {
  hour12: false
};

export default function clockReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_24_HOUR_TIME:
      return { ...state, hour12: action.payload.hour12 };
    default:
      return state;
  }
}
