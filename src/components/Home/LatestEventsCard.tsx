import React from 'react';
import { LatestEventsCardProps } from './type';

const LatestEventsCard: React.FC<LatestEventsCardProps> = ({ eventCardData }) => {
  return (
    <>
    <div className="container">
      <h2 className='text-white mb-4 ml-10 font-black text-3xl'>Events</h2>
    </div>
    <div className="latest-events-card w-188 text-black border-2 border-white p-1 rounded-[20px] bg-[#f6efef] flex">
      <img className="w-1/3 h-auto object-cover rounded-xl" src={eventCardData.imageUrl} alt="Event" />
      <div className="flex flex-col justify-between pl-3 w-2/3">
      <p className='text-xs mb-4'>{eventCardData.description}</p>
      <div className="flex justify-between items-center">
        <p className='text-xs'>{eventCardData.date} - {eventCardData.venue}</p>
        <button className='know-more-btn bg-white text-black px-4 py-2 rounded-2xl'>Know More</button>
      </div>
      </div>
    </div>
    </>

  );
};

export default LatestEventsCard;