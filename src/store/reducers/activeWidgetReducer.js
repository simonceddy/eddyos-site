import {
  GET_WIDGET_STATUS,
  SET_SETTINGS_WIDGET_ACTIVE,
  SET_SETTINGS_WIDGET_INACTIVE,
  SET_TEXT_WIDGET_ACTIVE,
  SET_TEXT_WIDGET_INACTIVE
} from '../actionTypes/widgetActions';

const initialState = {
  cli: false,
  text: false,
  settings: false,
};

export default function activeWidgetReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WIDGET_STATUS:
      return state;
    case SET_SETTINGS_WIDGET_ACTIVE:
      return state;
    case SET_TEXT_WIDGET_ACTIVE:
      return state;
    case SET_SETTINGS_WIDGET_INACTIVE:
      return state;
    case SET_TEXT_WIDGET_INACTIVE:
      return state;
    default:
      return state;
  }
}
