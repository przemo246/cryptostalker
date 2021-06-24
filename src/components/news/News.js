import { useState, useEffect } from 'react';

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
  useEffect(() => {
    const getNews = async () => {
      const [yesterday, today] = getTodayAndYesterdayDate();
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=cryptocurrency&from=${yesterday}&to=${today}&sortBy=popularity&apiKey=715d79a01d574143b994a0dbd3346b9d`
      );
      const JSON = await response.json();
      console.log(JSON);
    };
    getNews();
  }, []);
  return <div>News</div>;
};
