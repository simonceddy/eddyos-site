import { ADD_APPLET_TO_ACTIVE, REMOVE_APPLET_FROM_ACTIVE } from '../types';

const defaultState = {
  active: [
    /**
     * Example:
     * {
     *  Component: Settings,
     *  name: 'Settings'
     * }
     */
  ]
};

export default function appletsReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_APPLET_TO_ACTIVE:
      if (state.active.includes(action.payload.applet)) return state;
      console.log(action.payload);
      return { ...state, active: [...state.active, action.payload.applet] };
    case REMOVE_APPLET_FROM_ACTIVE:
      return {
        ...state,
        active: state.active.filter(
          (applet) => applet !== action.payload.applet
        )
      };
    default:
      return state;
  }
}
