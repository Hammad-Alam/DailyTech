import React from "react";
import NewsItem from "./NewsItem";

const NewsCard = (props) => {
  const { article } = props;

  return (
    <div className="col my-2">
      <div style={{ width: "288px", height: "360px" }}>
        <NewsItem
          title={article.title ? article.title.slice(0, 40) : ""}
          description={
            article.description ? article.description.slice(0, 80) : ""
          }
          imageUrl={article.cover_image}
          newsUrl={article.url}
          author={article.user.name}
          date={article.published_at}
        />
      </div>
    </div>
  );
};

export default NewsCard;
