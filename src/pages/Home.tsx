import React, { useEffect, useState } from "react";
import LatestNewsCard from "../components/Home/LatestNewsCard";
import LatestEventsCard from "../components/Home/LatestEventsCard";
import NavBar from "../components/common/NavBar";
import BackgroundGradientLines from "../components/BackgroundGradientLines";
import useNewsApi from "../api/useNewsApi";


const Home: React.FC = () => {
  const [newsData,setNewsData] = useState([]);
  const {getAllNews} = useNewsApi();
  const newFun = async()=>{
    const getNews = await getAllNews();
    const arrData = getNews.response.data.data;
    setNewsData(arrData);
  }
  useEffect(()=>{newFun()},[])

  return (
    <div className="bg-[#0D1117] min-h-screen w-screen relative flex flex-col items-center z-10">
      <BackgroundGradientLines />
      <NavBar />
      {/* show only 4 card data here just like in figma with 2 by 2 grid */}
      <div className="mt-48 w-fit grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6" >
      
      {newsData.map((item, index) => (
      <>
        {index === 0 && <h3 className="text-amber-50 text-xl font-semibold mb-4 md:col-span-2">Latest News</h3>}
        <LatestNewsCard key={index} cardNewsData={item} />
      </>
    ))}
      </div>
    </div>
  );
};

export default Home;
