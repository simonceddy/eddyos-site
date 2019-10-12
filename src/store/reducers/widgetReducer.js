/* eslint-disable no-unused-vars */
import { getWidth, getHeight } from '../../util/widgetSize';
import updateObject from '../../util/updateObject';
import { SET_WIDGET_SIZE, SET_WIDGET_POS, RESET_WIDGETS } from '../actions/widgetActions';
import setWidgetState from '../util/setWidgetState';
import storeWidget from '../../util/storeWidget';

// TODO - combine widget reducers to remove excessive boilerplate
// TODO - validate dimensions and fit to screen if required

// WIP
const keys = {
  cli: 'eddyosCliWidget',
  settings: 'eddyosSettingsWidget',
  text: 'eddyosTextWidget',
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
  settings: storeWidget(keys.settings, {
    x: 15,
    y: 15,
    width: getWidth(250),
    height: getHeight(250),
  }).state,
  cli: storeWidget(keys.cli, {
    x: 10,
    y: 10,
    width: getWidth(250),
    height: getHeight(250),
  }).state,
  text: storeWidget(keys.text, {
    x: 20,
    y: 20,
    width: getWidth(250),
    height: getHeight(250),
  }).state
};

const updateIfValid = (name, state, updates) => {
  if (state[name] === undefined) return state;
  setWidgetState(keys[name], state, updates);
  return state;
};

export default function widgetReducer(state = initialState, action) {
  switch (action.type) {
    case RESET_WIDGETS:
      // TODO store defaults
      return { ...defaultState };
    case SET_WIDGET_SIZE:
      return updateIfValid(action.payload.name, state, {
        [action.payload.name]: {
          height: action.payload.height,
          width: action.payload.width
        }
      });
    case SET_WIDGET_POS:
      return updateIfValid(action.payload.name, state, {
        [action.payload.name]: {
          x: action.payload.x,
          y: action.payload.y
        }
      });
    default:
      return state;
  }
}
