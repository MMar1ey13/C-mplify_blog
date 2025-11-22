import React from 'react';

const VideoCard = ({ video }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-4">
      <img src={video.thumbnailUrl} alt={video.title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <h3 className="text-white text-lg font-semibold">{video.title}</h3>
    </div>
  );
};

export default VideoCard;