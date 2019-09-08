import { TOGGLE_MENU } from '../types/osActionTypes';

const initialState = {
  menuToggled: false
};

function osReducer(state = initialState, action) {
  // console.log(action);
  switch (action.type) {
    case TOGGLE_MENU:
      // console.log(state);
      return Object.assign({}, state, {
        menuToggled: !state.menuToggled
      });
    default:
      return state;
  }
}

export default osReducer;
