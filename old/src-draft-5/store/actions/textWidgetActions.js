import {
  GET_TEXT_WIDGET,
  SET_TEXT_WIDGET_POS,
  SET_TEXT_WIDGET_SIZE
} from '../actionTypes/widgetActions';

export const getTextWidget = () => ({
  type: GET_TEXT_WIDGET
});

export const setTextWidgetSize = (height, width) => ({
  type: SET_TEXT_WIDGET_SIZE,
  payload: {
    height,
    width
  }
});

export const setTextWidgetPos = (x, y) => ({
  type: SET_TEXT_WIDGET_POS,
  payload: {
    x,
    y
  }
});
