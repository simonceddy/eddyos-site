import { SET_12_HOUR_TIME, SET_TIME_FORMAT } from '../types';

const defaultState = {
  hour12: false,
  format: 'hh-mm'
};

export default function clockReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_12_HOUR_TIME:
      return { ...state, hour12: action.payload.hour12 };
    case SET_TIME_FORMAT:
      return { ...state, format: action.payload.format };
    default:
      return state;
  }
}
