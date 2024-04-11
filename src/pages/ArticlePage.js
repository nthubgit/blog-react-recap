//localhost:300/articles/learn-node
//uses empty <> </> tag to return block

import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./404";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState ({upvotes: 0, comments: []});

  useEffect(() => {
    setArticleInfo({upvotes: 3, comments: ['helllllo']});
  });

  const { articleId } = useParams();
  const article = articles.find(article => article.name === articleId);

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <p>This article has {articleInfo.upvotes} upvote(s).</p>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </div>
  );
};

export default ArticlePage;
