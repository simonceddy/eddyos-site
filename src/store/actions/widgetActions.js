import { TOGGLE_WIDGET_ACTIVE, TOGGLE_WIDGET_INACTIVE } from '../actionTypes/widgetActions';

const GET_WIDGET = 'GET_WIDGET';
const SET_WIDGET_POS = 'SET_WIDGET_POS';
const SET_WIDGET_SIZE = 'SET_WIDGET_SIZE';

export const getWidget = (name) => ({
  type: GET_WIDGET,
  payload: {
    name
  }
});

export const setWidgetSize = (name, height, width) => ({
  type: SET_WIDGET_SIZE,
  payload: {
    name,
    height,
    width
  }
});

export const setWidgetPos = (name, x, y) => ({
  type: SET_WIDGET_POS,
  payload: {
    name,
    x,
    y
  }
});

export const toggleWidgetActive = (name) => ({
  type: TOGGLE_WIDGET_ACTIVE,
  payload: {
    name
  }
});

export const toggleWidgetInactive = (name) => ({
  type: TOGGLE_WIDGET_INACTIVE,
  payload: {
    name
  }
});
