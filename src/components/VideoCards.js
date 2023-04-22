import React from 'react';

const VideoCards = ({ title, description, thumbnailUrl }) => {
  return (
    <div className="bg-gray-100 p-4">
      <img src={thumbnailUrl} alt={title} />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default VideoCards;
