import { TOGGLE_WIDGET_ACTIVE, TOGGLE_WIDGET_INACTIVE } from '../actionTypes/widgetActions';

export const RESET_WIDGETS = 'RESET_WIDGETS';
export const SET_WIDGET_POS = 'SET_WIDGET_POS';
export const SET_WIDGET_SIZE = 'SET_WIDGET_SIZE';

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

export const resetWidgets = () => ({
  type: RESET_WIDGETS
});
