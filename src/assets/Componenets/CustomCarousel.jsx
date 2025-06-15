import React, { useEffect, useState } from "react";
import "./CustomCarousel.css";

const images = [
  "https://www.motortrend.com/uploads/2023/05/003-2023-Volvo-S60-Recharge-AWD-Black-Edition-driver-seat.jpg?w=768&width=768&q=75&format=webp",
  "https://img.pikbest.com/photo/20250123/3d-auto-parts-display-in-mechanical-store--e2-80-93-modern-design_11439558.jpg!w700wp",
  "https://jaibholenathgarage.com/GetCacheImg.ashx?image=images/Banner2.jpg"
];

const CustomCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-slide">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`carousel-image ${index === current ? "active" : ""}`}
          />
        ))}
      </div>
      <button className="carousel-button prev" onClick={prevSlide}>
        ‹
      </button>
      <button className="carousel-button next" onClick={nextSlide}>
        ›
      </button>
    </div>
  );
};

export default CustomCarousel;
