import React, { useState, useEffect } from "react";
import NewsCard from "./NewsCard";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const fetchArticles = async () => {
    props.setProgress(10);
    const { tag, limit } = props;
    const url = tag
      ? `https://dev.to/api/articles?tag=${tag}`
      : "https://dev.to/api/articles";
    const response = await fetch(url);
    props.setProgress(40);
    const data = await response.json();
    props.setProgress(70);
    setArticles(data.slice(0, limit));
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title =
      props.tag === ""
        ? "DailyTech - Top Articles"
        : `DailyTech - ${capitalizeFirstLetter(props.tag)}`;

    fetchArticles();
  }, [props.tag]);

  const fetchMoreData = async () => {
    const { tag } = props;
    const url = tag
      ? `https://dev.to/api/articles?tag=${tag}&page=${page + 1}`
      : `https://dev.to/api/articles?page=${page + 1}`;
    const response = await fetch(url);
    const data = await response.json();

    const newArticles = data.filter(
      (article) =>
        !articles.find(
          (existingArticle) => existingArticle.title === article.title
        )
    );

    setArticles((prevArticles) => [...prevArticles, ...newArticles]);
    setPage(page + 1);
  };

  const { heading } = props;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <h2 className="text-center" style={{ marginTop: "125px" }}>
            DailyTech - {heading}
          </h2>
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<Spinner />}
          >
            <div className="container">
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 my-2">
                {articles.map((article) => (
                  <NewsCard key={article.url} article={article} />
                ))}
              </div>
            </div>
          </InfiniteScroll>
        </div>
      )}
    </>
  );
};

export default News;
