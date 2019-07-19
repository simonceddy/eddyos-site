import { createReducer } from 'redux-starter-kit';
import articles from '../../articles';

const textEditorReducer = createReducer(articles, {
  GET_ARTICLE: (state, action) => state.find((page, id) => id === action.payload.page),
  /* {
    console.log(action.payload, state.articles);
    const key = findIndex(
      state.articles,
      page => capitalize(page.title) === capitalize(action.payload.page)
    );

    if (key === undefined) {
      return null;
    }

    return state.articles[key];
  }, */

  RESET_ARTICLES: state => Object.assign(state, { articles })
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

export default textEditorReducer;
