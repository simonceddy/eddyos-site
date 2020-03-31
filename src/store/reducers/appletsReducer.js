import {
  ADD_APPLET_TO_ACTIVE,
  REMOVE_APPLET_FROM_ACTIVE,
  SET_APPLET_TOP,
  SET_APPLET_POSITION,
  SET_APPLET_SIZE
} from '../types';
import {
  appletIsActive,
  prepareApplet,
  setTopApplet,
  resizeApplet,
  repositionApplet,
  storeApplet
} from '../utils';
import { setAppletTop } from '../actions';

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
      if (!action.payload.applet) return state;

      if (appletIsActive(action.payload.applet, state.active)) {
        return appletsReducer(state, setAppletTop(action.payload.applet));
      }
      // console.log(state);
      return {
        ...state,
        active: [
          ...state.active,
          prepareApplet(action.payload.applet, state.active.length)
        ]
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
    case SET_APPLET_SIZE:
      return {
        ...state,
        active: [...state.active.map((applet) => {
          if (applet.Component === action.payload.applet.Component) {
            return storeApplet(resizeApplet(applet, action.payload.height, action.payload.width));
          }
          return applet;
        })]
      };
    case SET_APPLET_POSITION:
      return {
        ...state,
        active: [...state.active.map((applet) => {
          if (applet.Component === action.payload.applet.Component) {
            return storeApplet(repositionApplet(
              applet,
              action.payload.x,
              action.payload.y
            ));
          }
          return { ...applet };
        })]
      };
    default:
      return state;
  }
}
