/* eslint-disable import/prefer-default-export */
import find from 'lodash/find';

export const getArticlesState = state => state.text.articles;

export const getArticle = (state, key) => find(state.article, val => val.key === key) || {};
