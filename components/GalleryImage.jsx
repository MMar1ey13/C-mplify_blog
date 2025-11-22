import React from 'react';

const GalleryImage = ({ image }) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <img src={image.imageUrl} alt={image.title} className="w-full h-full object-cover" />
    </div>
  );
};

export default GalleryImage;