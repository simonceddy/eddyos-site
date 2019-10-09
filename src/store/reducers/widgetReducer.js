/* eslint-disable no-unused-vars */
import { getWidth, getHeight } from '../../util/widgetSize';

// TODO - combine widget reducers to remove excessive boilerplate

const initialState = {
  settings: {
    x: 15,
    y: 15,
    width: getWidth(250),
    height: getHeight(250),
  },
  cli: {
    x: 10,
    y: 10,
    width: getWidth(250),
    height: getHeight(250),
  },
  text: {
    x: 20,
    y: 20,
    width: getWidth(250),
    height: getHeight(250),
  }
};
