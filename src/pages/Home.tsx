import React, { useEffect } from "react";
import useNewsApi from "../api/useNewsApi";

const Home: React.FC = () => {
  const { getAllNews } = useNewsApi();

  useEffect(() => {
    const fetchNews = async () => {
      await getAllNews(true);
    };
    fetchNews();
  }, [getAllNews]);

  return <div>Home</div>;
};

export default Home;
