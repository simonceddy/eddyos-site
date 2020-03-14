/* eslint-disable no-unused-vars */
import { getWidth, getHeight } from '../../util/widgetSize';
import {
  SET_WIDGET_SIZE,
  SET_WIDGET_POS,
  RESET_WIDGETS
} from '../actions/widgetActions';
import setWidgetState from '../util/setWidgetState';
import storeWidget from '../../util/storeWidget';
import {
  CLI_STORAGE_KEY,
  SETTINGS_STORAGE_KEY,
  TEXT_STORAGE_KEY
} from '../../shared/types/storageKeys';

// TODO - combine widget reducers to remove excessive boilerplate
// TODO - validate dimensions and fit to screen if required

// WIP
const keys = {
  cli: CLI_STORAGE_KEY,
  settings: SETTINGS_STORAGE_KEY,
  text: TEXT_STORAGE_KEY,
};

const defaultState = {
  settings: {
    x: 15,
    y: 15,
    width: getWidth(250),
    height: getHeight(250),
  },
  cli: {
    x: 10,
    y: 10,
    width: getWidth(250),
    height: getHeight(250),
  },
  text: {
    x: 20,
    y: 20,
    width: getWidth(250),
    height: getHeight(250),
  },
};

const initialState = {
  settings: storeWidget(keys.settings, defaultState.settings).state,
  cli: storeWidget(keys.cli, defaultState.cli).state,
  text: storeWidget(keys.text, defaultState.text).state
};

const resetToDefault = () => {
  Object.keys(defaultState).map((name) => (setWidgetState(keys[name], defaultState[name])));
  return defaultState;
};

const updatePosIfValid = (name, state, payload) => {
  if (state[name] === undefined) return state;
  const widgetState = { ...state[name] };
  setWidgetState(keys[name], widgetState, {
    x: payload.x,
    y: payload.y
  });
  return state;
};

const updateSizeIfValid = (name, state, payload) => {
  if (state[name] === undefined) return state;
  const widgetState = { ...state[name] };
  setWidgetState(keys[name], widgetState, {
    height: payload.height,
    width: payload.width
  });
  return state;
};

export default function widgetReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_WIDGETS:
      // TODO store defaults
      return resetToDefault();
    case SET_WIDGET_SIZE:
      return updateSizeIfValid(action.payload.name, state, action.payload);
    case SET_WIDGET_POS:
      return updatePosIfValid(action.payload.name, state, action.payload);
    default:
      return state;
  }
}
