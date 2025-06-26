import React, { useState } from 'react';
import images from '../assets/images';

const ImageGallery = ({ images: propertyImages }) => {
  const [mainImage, setMainImage] = useState(0);

  return (
    <div id="ImageGallery_1" className="w-full">
      <div id="ImageGallery_2" className="w-full h-[500px] overflow-hidden rounded-lg">
        <img
          id="ImageGallery_3"
          src={propertyImages[mainImage]}
          alt="Property"
          className="w-full h-full object-cover"
        />
      </div>
      <div id="ImageGallery_4" className="grid grid-cols-4 gap-4 mt-4">
        {propertyImages.slice(0, 4).map((image, index) => (
          <div
            key={index}
            id={`ImageGallery_5_${index}`}
            className={`cursor-pointer h-24 overflow-hidden rounded-lg ${mainImage === index ? 'ring-2 ring-blue-500' : ''}`}
            onClick={() => setMainImage(index)}
          >
            <img
              src={image}
              alt={`Property ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;