import React from 'react';
import CustomCarousel from './CustomCarousel';
import ProductComponent from './ProductComponent';
import './about.css';

function Product() {
  return (
    <div className="about-page">
      <div className="about-carousel">
        <CustomCarousel />
      </div>
      <div className="about-section">
        <ProductComponent />
      </div>
    </div>
  );
}

export default Product;
