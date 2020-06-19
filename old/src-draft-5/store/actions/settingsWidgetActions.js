import {
  GET_SETTINGS_WIDGET,
  SET_SETTINGS_WIDGET_POS,
  SET_SETTINGS_WIDGET_SIZE
} from '../actionTypes/widgetActions';

export const getSettingsWidget = () => ({
  type: GET_SETTINGS_WIDGET
});

export const setSettingsWidgetSize = (height, width) => ({
  type: SET_SETTINGS_WIDGET_SIZE,
  payload: {
    height,
    width
  }
});

export const setSettingsWidgetPos = (x, y) => ({
  type: SET_SETTINGS_WIDGET_POS,
  payload: {
    x,
    y
  }
});
