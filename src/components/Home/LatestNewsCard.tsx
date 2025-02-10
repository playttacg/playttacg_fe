import React from "react";
import pic from '../../assets/Screenshot 2025-01-18 222115 1.png'
import { INewsCardProps } from "./type";
const LatestNewsCard: React.FC<INewsCardProps> = ({ cardNewsData }) => {
  return (
    <div className="max-w-[350px] h-fit rounded-2xl overflow-hidden shadow-md bg-white">
      <img className="w-[350px] h-[180px] object-cover" src={pic} alt={cardNewsData.title} />
      <div className="p-2 flex justify-between item-center mb-1">
        <h2 className="text-sm font-semibold text-gray-800 truncate pl-1">{cardNewsData.title}</h2>
        <a
          href={cardNewsData.slug}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-1 mr-2 inline-block text-xs hover:underline-none"
        >
          &gt;
        </a>
      </div>
    </div>
  );
};

export default LatestNewsCard;
