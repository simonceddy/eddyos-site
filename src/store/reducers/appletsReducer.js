import {
  ADD_APPLET_TO_ACTIVE,
  REMOVE_APPLET_FROM_ACTIVE,
  SET_APPLET_TOP
} from '../types';

const prepareApplet = (applet, number) => ({
  ...applet,
  zIndex: 10 + number
});

const appletIsActive = (applet, active = []) => undefined !== active.find(
  (activeApplet) => activeApplet.Component === applet.Component
);

const setTopApplet = (applet, active = []) => {
  console.log(applet);

  return active;
};

const defaultState = {
  active: [
    /**
     * Example:
     * {
     *  Component: Settings,
     *  name: 'Settings',
     *  Icon: Icon,
     *  zIndex: 11
     * }
     */
  ],
  toolbar: [
    // TODO array for handling toolbar icon order
  ]
};

export default function appletsReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_APPLET_TO_ACTIVE:
      if (appletIsActive(action.payload.applet, state.active)) {
        return state;
      }
      console.log(state);
      return {
        ...state,
        active: [...state.active, prepareApplet(action.payload.applet)]
      };
    case REMOVE_APPLET_FROM_ACTIVE:
      return {
        ...state,
        active: state.active.filter(
          (applet) => applet !== action.payload.applet
        )
      };
    case SET_APPLET_TOP:
      return {
        ...state,
        active: setTopApplet(action.payload.applet, state.active)
      };
    default:
      return state;
  }
}
