//localhost:300/articles/learn-node
//uses empty <> </> tag to return block

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import articles from "./article-content";
import NotFoundPage from "./404";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();
  
  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`http://localhost:8000/api/articles/${articleId}`)
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    }

    loadArticleInfo();
  }, []);

  const article = articles.find(article => article.name === articleId);

  if (!article) {
    return <NotFoundPage />;
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
