import { createReducer } from 'redux-starter-kit';

const osStateReducer = createReducer({
  menuToggled: false,
},
{
  TOGGLE_MENU: (state, action) => Object.assign(state, action.payload),
  /* ADD_TODO: (state, action) => {
    // "mutate" the array by calling push()
    state.push(action.payload);
  },
  TOGGLE_TODO: (state, action) => {
    const todo = state[action.payload.index];
    // "mutate" the object by overwriting a field
    todo.completed = !todo.completed;
  },
  REMOVE_TODO: (state, action) => state.filter((todo, i) => i !== action.payload.index)
 */
});

export default osStateReducer;
