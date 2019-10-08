import {
  GET_WIDGET_SIZE,
  GET_WIDGET_POS,
  SET_WIDGET_SIZE,
  SET_WIDGET_POS
} from '../actionTypes/widgetActions';

export const getWidgetSize = (name) => ({
  type: GET_WIDGET_SIZE,
  payload: {
    name
  }
});

export const getWidgetPos = (name) => ({
  type: GET_WIDGET_POS,
  payload: {
    name
  }
});

export const setWidgetSize = (height, width) => ({
  type: SET_WIDGET_SIZE,
  payload: {
    height,
    width
  }
});

export const setWidgetPos = (x, y) => ({
  type: SET_WIDGET_POS,
  payload: {
    x,
    y
  }
});
