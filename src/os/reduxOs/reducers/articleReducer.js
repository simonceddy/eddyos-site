import toArray from 'lodash/toArray';
import articles from '../../../storage/articles';
import { getArticle } from '../selectors/textSelectors';
import { SET_ARTICLE_CONTENT, ADD_ARTICLE } from '../types/articleActionTypes';

const initialState = toArray(articles);

function articleReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ARTICLE_CONTENT:
      if (!getArticle(state, action.key)) return state;
      return Object.assign({}, state);
    case ADD_ARTICLE:
      if (!getArticle(state, action.article.key)) {
        state.articles.push(action.article);
      }
      return state;
    default:
      return state;
  }
}

export default articleReducer;
