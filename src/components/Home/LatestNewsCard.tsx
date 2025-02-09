import React from 'react';

const LatestNewsCart = ({ cardNewsData }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative w-40 h-40">  {/* Reduced height */}
        <img 
          src={cardNewsData.imageUrl} 
          alt={cardNewsData.title || "Latest News"} 
          className="object-contain w-[90px] h-[90px]" 
        />
      </div>

      {/* Description Section */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900">{cardNewsData.title}</h3>
        <p className="text-gray-700 mt-16">{cardNewsData.description}</p>
      </div>
    </div>
  );
};

export default LatestNewsCart;
