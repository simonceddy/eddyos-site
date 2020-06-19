import {
  GET_WIDGET_STATUS,
  TOGGLE_WIDGET_ACTIVE,
  TOGGLE_WIDGET_INACTIVE
} from '../actionTypes/widgetActions';
import updateObject from '../../util/updateObject';

const initialState = {
  cli: true,
  text: true,
  settings: true,
};

const setIfValid = (name, state, toggled) => {
  if (typeof state[name] !== 'boolean' || typeof toggled !== 'boolean') return state;
  return updateObject(state, { [name]: toggled });
};

export default function activeWidgetReducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_WIDGET_ACTIVE:
      return setIfValid(action.payload.name, state, true);
    case TOGGLE_WIDGET_INACTIVE:
      console.log('here');
      return setIfValid(action.payload.name, state, false);
    case GET_WIDGET_STATUS:
    default:
      return state;
  }
}
