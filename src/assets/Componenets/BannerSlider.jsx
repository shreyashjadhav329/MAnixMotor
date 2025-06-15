import React, { useEffect, useState } from 'react';
import './BannerSlider.css';

const images = [
  '\image1banner.jpeg',
  '\image2banner.jpeg',
  '\image3bannner.jpeg',
  '\image4banner.jpeg'
];

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="image-container"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="text-overlay">
        <h1>Your Trust Our Service</h1>
      
      </div>
    </div>
  );
};

export default BannerSlider;
