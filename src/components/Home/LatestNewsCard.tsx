import React from "react";
import pic from '../../assets/Screenshot 2025-01-18 222115 1.png'
import { INewsCardProps } from "./type";
const LatestNewsCard: React.FC<INewsCardProps> = ({ cardNewsData }) => {
  return (
    <div className="max-w-[320px] rounded-2xl overflow-hidden shadow-md bg-white p-2 border">
      <img className="w-[320px] rounded-xl" src={pic} alt={cardNewsData.title} />
      <div className="mt-2">
        <h2 className="text-sm font-semibold text-gray-800 truncate">{cardNewsData.title}</h2>
        <a
          href={cardNewsData.slug}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline mt-1 inline-block text-xs"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default LatestNewsCard;
