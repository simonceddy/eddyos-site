import {
  GET_SETTINGS_WIDGET,
  SET_SETTINGS_WIDGET_SIZE,
  SET_SETTINGS_WIDGET_POS
} from '../actionTypes/widgetActions';
import { getWidth, getHeight } from '../../util/widgetSize';
import storeWidget from '../../util/storeWidget';
import setWidgetState from '../util/setWidgetState';

const STORAGE_KEY = 'eddyosSettingsWidget';

const defaultState = {
  x: 15,
  y: 15,
  width: getWidth(250),
  height: getHeight(250),
};

const initialState = storeWidget(STORAGE_KEY, defaultState).state;

export default function settingsWidgetReducer(state = initialState, action) {
  switch (action.type) {
    // TODO validate payloads
    case SET_SETTINGS_WIDGET_SIZE:
      console.log(action.payload);
      return setWidgetState(STORAGE_KEY, state, action.payload);
    case SET_SETTINGS_WIDGET_POS:
      return setWidgetState(STORAGE_KEY, state, action.payload);
    case GET_SETTINGS_WIDGET:
    default:
      return state;
  }
}
