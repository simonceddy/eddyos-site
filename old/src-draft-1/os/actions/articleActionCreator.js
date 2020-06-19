import { SET_ARTICLE_CONTENT, ADD_ARTICLE } from '../types/articleActionTypes';

export function setArticleContent(key, content) {
  return { type: SET_ARTICLE_CONTENT, key, content };
}

export function addArticle(article) {
  return { type: ADD_ARTICLE, article };
}
