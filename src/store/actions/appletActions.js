import {
  ADD_APPLET_TO_ACTIVE,
  REMOVE_APPLET_FROM_ACTIVE,
  SET_APPLET_TOP
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
