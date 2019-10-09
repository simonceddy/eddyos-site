import {
  GET_TEXT_WIDGET,
  SET_TEXT_WIDGET_SIZE,
  SET_TEXT_WIDGET_POS
} from '../actionTypes/widgetActions';
import { getWidth, getHeight } from '../../util/widgetSize';
import storeWidget from '../../util/storeWidget';
import updateObject from '../../util/updateObject';
import { setInStorage } from '../../util/storageHelpers';

const STORAGE_KEY = 'eddyosTextWidget';

const defaultState = {
  x: 20,
  y: 20,
  width: getWidth(250),
  height: getHeight(250),
};

const setWidgetState = (state, updates) => setInStorage(STORAGE_KEY, updateObject(state, updates));

const initialState = storeWidget(STORAGE_KEY, defaultState).state;

export default function textWidgetReducer(state = initialState, action) {
  switch (action.type) {
    // TODO validate payloads
    case SET_TEXT_WIDGET_SIZE:
      console.log(action.payload);
      return setWidgetState(state, action.payload);
    case SET_TEXT_WIDGET_POS:
      return setWidgetState(state, action.payload);
    case GET_TEXT_WIDGET:
    default:
      return state;
  }
}
