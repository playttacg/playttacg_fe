import React from "react";
import LatestNewsCard from "../components/Home/LatestNewsCard";
import { latestNewsCardData, latestEventsCardData } from "../constant/dummyConstant";
import NavBar from "../components/common/NavBar";
import BackgroundGradientLines from "../components/BackgroundGradientLines";
import LatestEventsCard from "../components/Home/LatestEventsCard";

const Home: React.FC = () => {
  
  return (
    <div className="bg-[#0D1117] min-h-screen w-screen relative flex flex-col items-center z-10">
      <BackgroundGradientLines />
      <NavBar />
      <div className="mt-48" />
      <LatestNewsCard cardNewsData={latestNewsCardData} />
      <LatestEventsCard eventCardData = {latestEventsCardData} />
    </div>
  );
};


export default Home;
