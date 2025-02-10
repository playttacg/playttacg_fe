import React, { useEffect } from "react";
import useNewsApi from "../api/useNewsApi";
import LatestNewsCard from "../components/Home/LatestNewsCard";
import { latestNewsCardData } from "../constant/dummyConstant";
import NavBar from "../components/common/NavBar";
import BackgroundGradientLines from "../components/BackgroundGradientLines";

const Home: React.FC = () => {
  const { getAllNews } = useNewsApi();

  useEffect(() => {
    const fetchNews = async () => {
      await getAllNews(true);
    };
    fetchNews();
  }, [getAllNews]);

  return (
    <div className="bg-[#0D1117] min-h-screen w-screen relative flex flex-col items-center z-10">
      <BackgroundGradientLines />
      <NavBar />
      <div className="mt-48" />
      <LatestNewsCard cardNewsData={latestNewsCardData} />
    </div>
  );
};

export default Home;
