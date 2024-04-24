//localhost:300/articles/learn-node
//uses empty <> </> tag to return block

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentsList from "../components/CommentsList";
import axios from "axios";
import articles from "./article-content";
import AddCommentsForm from "../components/AddCommentsForm";
import NotFoundPage from "./404";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  const { user, isLoading } = useUser();

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/articles/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };

    loadArticleInfo();
  }, [articleId]);

  const article = articles.find((article) => article.name === articleId);

  const addUpvote = async () => {
    const response = await axios.put(`/api/articles/${articleId}/upvote`);
    const updatedArticle = response.data;
    setArticleInfo(updatedArticle);
  };

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <div className="upvotesSection">
        {user
        ? <button onClick={addUpvote}>Upvote</button>
        :<button>Login to upvote</button>}
        <p>This article has {articleInfo.upvotes} upvote(s).</p>
      </div>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
      {user
      ?       <AddCommentsForm
      articleName={articleId}
      onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
    />
      : <button>Login to comment</button>}

      <CommentsList comments={articleInfo.comments} />
    </div>
  );
};

export default ArticlePage;
