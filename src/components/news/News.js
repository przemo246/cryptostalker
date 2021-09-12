import { useState, useEffect } from "react";
import { ArticleBig } from "./ArticleBig";
import { ArticleSmall } from "./ArticleSmall";
import Loader from "react-loader-spinner";

const getTodayAndYesterdayDate = () => {
  const currentDate = new Date();
  const yesterdayDate = new Date();
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);
  const today = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;
  const yesterday = `${yesterdayDate.getFullYear()}-${
    yesterdayDate.getMonth() + 1
  }-${yesterdayDate.getDate()}`;
  return [yesterday, today];
};

export const News = () => {
  const [news, setNews] = useState([]);
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    const [yesterday, today] = getTodayAndYesterdayDate();
    const storedArticles = JSON.parse(localStorage.getItem("articles"));
    const getNews = async () => {
      try {
        const response = await fetch(
          `https://us-central1-cryptostalker-18727.cloudfunctions.net/news/?from=${yesterday}&to=${today}`
        );
        const data = await response.json();
        const articles = data.articles.slice(0, 6);
        setLoader(false);
        localStorage.setItem("articles", JSON.stringify(articles));
        setNews(articles);
      } catch (err) {
        console.log(err);
      }
    };
    if (storedArticles) {
      const isArticlesUpToDate = storedArticles.every((article) => {
        const index = article.publishedAt.indexOf("T");
        return article.publishedAt.slice(0, index) === yesterday || today;
      });
      if (isArticlesUpToDate) {
        setNews(storedArticles);
        setLoader(false);
      } else {
        getNews();
      }
    } else {
      getNews();
    }
  }, []);
  return (
    <>
      {loader ? (
        <Loader
          type="TailSpin"
          color="#333"
          height={70}
          width={70}
          visible={loader}
        />
      ) : (
        <div className="articles">
          <div className="articles__heading">
            <h2 className="heading-secondary">
              What's currently moving the prices? 📰
            </h2>
          </div>
          <div className="articles__top">
            <h3 className="heading-tertiary">TOP READS</h3>
            {news.map((data, i) => {
              if (i < 2) {
                return <ArticleBig key={i} data={data} />;
              }
              return null;
            })}
          </div>
          <div className="articles__list">
            <h3 className="heading-tertiary">LATEST</h3>
            {news.map((data, i) => {
              if (i > 1) {
                return <ArticleSmall key={i} data={data} />;
              }
              return null;
            })}
          </div>
        </div>
      )}
    </>
  );
};
