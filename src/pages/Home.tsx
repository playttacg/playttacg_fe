import React, { useEffect } from "react";
import useNewsApi from "../api/useNewsApi";
import LatestNewsCard from "../components/Home/LatestNewsCard";
import { latestNewsCardData } from "../constant/dummyConstant";

const Home: React.FC = () => {
  const { getAllNews } = useNewsApi();

  useEffect(() => {
    const fetchNews = async () => {
      await getAllNews(true);
    };
    fetchNews();
  }, [getAllNews]);

  return <div>
  <LatestNewsCard
    cardNewsData={latestNewsCardData}
  /></div>;
};

export default Home;
