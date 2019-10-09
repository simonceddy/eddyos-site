import {
  GET_CLI_WIDGET,
  SET_CLI_WIDGET_SIZE,
  SET_CLI_WIDGET_POS
} from '../actionTypes/widgetActions';
import { getWidth, getHeight } from '../../util/widgetSize';
import storeWidget from '../../util/storeWidget';
import setWidgetState from '../util/setWidgetState';

const STORAGE_KEY = 'eddyosCliWidget';

const defaultState = {
  x: 35,
  y: 35,
  width: getWidth(250),
  height: getHeight(250),
};

const initialState = storeWidget(STORAGE_KEY, defaultState).state;

export default function cliWidgetReducer(state = initialState, action) {
  switch (action.type) {
    // TODO validate payloads
    case SET_CLI_WIDGET_SIZE:
      console.log(action.payload);
      return setWidgetState(STORAGE_KEY, state, action.payload);
    case SET_CLI_WIDGET_POS:
      return setWidgetState(STORAGE_KEY, state, action.payload);
    case GET_CLI_WIDGET:
    default:
      return state;
  }
}
