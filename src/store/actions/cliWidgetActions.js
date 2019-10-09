import {
  GET_CLI_WIDGET,
  SET_CLI_WIDGET_POS,
  SET_CLI_WIDGET_SIZE
} from '../actionTypes/widgetActions';

export const getCliWidget = () => ({
  type: GET_CLI_WIDGET
});

export const setCliWidgetSize = (height, width) => ({
  type: SET_CLI_WIDGET_SIZE,
  payload: {
    height,
    width
  }
});

export const setCliWidgetPos = (x, y) => ({
  type: SET_CLI_WIDGET_POS,
  payload: {
    x,
    y
  }
});
