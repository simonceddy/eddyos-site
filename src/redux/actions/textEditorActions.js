import { createAction } from 'redux-starter-kit';

export const getArticle = createAction('GET_ARTICLE');

export const setCurrent = createAction('SET_CURRENT');

export default {
  getArticle,
  setCurrent
};
