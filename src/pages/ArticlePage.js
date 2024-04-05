//localhost:300/articles/learn-node
//uses empty <> </> tag to return block

import { useParams } from "react-router-dom";
import articles from "./article-content";
import NotFoundPage from "./404";

const ArticlePage = () => {
  const { articleId } = useParams();
  const article = articles.find((article) => article.name === articleId);

  if (!article) {
    return <NotFoundPage />
  }

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, i) => (
        <p key={i}>{paragraph}</p>
      ))}
    </>
  );
};

export default ArticlePage;
