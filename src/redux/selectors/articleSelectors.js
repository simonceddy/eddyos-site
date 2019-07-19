export const getArticleState = store => store.articles;

export const getArticleByKey = (store, key) => {
  console.log(store, key);
  return getArticleState(store) ? { ...getArticleState(store).byIds[key], key } : {};
};

export default {
  getArticleState,
  getArticleByKey
};
