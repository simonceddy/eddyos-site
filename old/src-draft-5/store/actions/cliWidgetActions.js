import {
  GET_CLI_WIDGET,
  SET_CLI_WIDGET_POS,
  SET_CLI_WIDGET_SIZE
} from '../actionTypes/widgetActions';

export const HANDLE_CLI_INPUT = 'HANDLE_CLI_INPUT';

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

export const handleCliInput = (input) => ({
  type: HANDLE_CLI_INPUT,
  payload: {
    input
  }
});
