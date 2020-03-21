import {
  ADD_APPLET_TO_ACTIVE,
  REMOVE_APPLET_FROM_ACTIVE,
  SET_APPLET_TOP,
  SET_APPLET_SIZE,
  SET_APPLET_POSITION
} from '../types';

export const addAppletToActive = (applet) => ({
  type: ADD_APPLET_TO_ACTIVE,
  payload: { applet }
});

export const removeAppletFromActive = (applet) => ({
  type: REMOVE_APPLET_FROM_ACTIVE,
  payload: { applet }
});

export const setAppletTop = (applet) => ({
  type: SET_APPLET_TOP,
  payload: { applet }
});

export const setAppletSize = (applet, height, width) => ({
  type: SET_APPLET_SIZE,
  payload: { applet, height, width }
});

export const setAppletPosition = (applet, x, y) => ({
  type: SET_APPLET_POSITION,
  payload: { applet, x, y }
});
