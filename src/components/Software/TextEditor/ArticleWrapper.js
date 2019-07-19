import React from 'react';

function ArticleWrapper() {
  return (
    <div>
      {/*  */}
    </div>
  );
}

/* ({ match }) => {
  const article = getArticleByKey(match.params.page);
  console.log(article.payload);
  if (!article) return (<div>404</div>);
  return connect(
    state => ({ article: getArticleByKey(state, match.params.page) })
  )(<TextEditor />);
} */
export default ArticleWrapper;
