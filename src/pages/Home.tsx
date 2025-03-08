import React, { useEffect, useState } from "react";
import LatestNewsCard from "../components/Home/LatestNewsCard";
import NavBar from "../components/common/NavBar";
import BackgroundGradientLines from "../components/BackgroundGradientLines";
import useNewsApi from "../api/useNewsApi";
import { INewsCardApiResponse, INewsCardData } from "../interface/home.interface";

const Home: React.FC = () => {
  const [latestNewsData, setLatestNewsData] = useState<INewsCardData[]>([]);
  const { getKRecentNews } = useNewsApi();

  useEffect(() => {
    const fetchNewsData = async () => {
      const response: INewsCardApiResponse = await getKRecentNews(4);
      console.log(JSON.stringify(response))
      setLatestNewsData(response.response.data.kRecentNews);
    };
    fetchNewsData();
  }, [getKRecentNews]);

  return (
    <div className="bg-[#0D1117] min-h-screen w-screen relative flex flex-col items-center z-10">
      <BackgroundGradientLines />
      <NavBar />
      <div className="mt-48" />
      <div>
        {latestNewsData?.map((newsData) => <LatestNewsCard key={newsData._id} cardNewsData={newsData} />)}
      </div>
    </div>
  );
};

export default Home;
