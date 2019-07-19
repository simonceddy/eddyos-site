import { createReducer } from 'redux-starter-kit';
import articles from '../../storage/articles';

const textEditorReducer = createReducer({
  articles,
  current: null
}, {
  GET_ARTICLE: (state, action) => {
    // console.log(state);
    const article = state.find(page => page.key === action.payload.page);
    console.log(article.body);
  },

  SET_CURRENT: (state, action) => {
    const article = state.articles.find(page => page.key === action.payload.page);
    return Object.assign(state, { current: article.key });
  },
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
