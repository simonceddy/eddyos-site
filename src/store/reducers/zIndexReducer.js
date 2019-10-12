import { MOVE_TO_TOP } from '../actions/zIndexActions';

const initialState = {
  cli: 20,
  settings: 20,
  text: 20,
  top: null
};

const setToTop = (name, state) => {
  const newState = {};
  if (!state[name]) return state;
  if (state.top !== null) {
    newState[state.top] = 25;
  }
  newState.top = name;
  newState[name] = 30;
  return { ...initialState, ...newState };
};

export default function zIndexReducer(state = initialState, action) {
  switch (action.type) {
    case MOVE_TO_TOP:
      // console.log('here');
      return setToTop(action.payload.name, state);
    default:
      return state;
  }
}
