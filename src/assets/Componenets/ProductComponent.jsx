import React from "react";
import "./ProductComponent.css";

const products = [
  {
    id: 1,
    name: "Car Europe Gas DI Sequential Kit",
    price: "₹ 40.0 K",
    unit: "/Kit",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/car-mijo-premium-sequential-cng-kit-liktt5nw.jpg"
  },
  {
    id: 2,
    name: "Logistics GPS Tracking Device",
    price: "₹ 4,500 / Pc",
    unit: "/Kit",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/active-vehicle-gps-tracker-device-fgly2191.jpg?w=2048&q=75"
  },
  {
    id: 3,
    name: "Vehicle GPS Tracking Devices",
    price: "₹ 42.0 K",
    unit: "/Kit",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/car-europe-gas-di-sequential-kit-mka42a4r.jpg"
  },
  {
    id: 4,
    name: "Asset Vehicle GPS Tracker Device",
    price: "₹ 4,500 / Pc",
    unit: "/Kit",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/vehicle-gps-tracking-devices-3argft6p.png"
  },
  {
    id: 5,
    name: "Lovato Semi Automatic Highly Durable CNG Kit",
    price: "₹ 40.0 K",
    unit: "/Kit",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/lovato-semi-automatic-highly-durable-cng-kit-6aa2dzzn.jpg"
  },
  {
    id: 6,
    name: "Small GPS Tracker Device",
    price: "₹ 40.0 K",
    unit: "/Kit",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/logistics-gps-tracking-device-zv4uk7zp.jpg"
  },
  {
    id: 7,
    name: "BRC CNG Conversion Kit",
    price: "₹ 40,000 / Kit",
    unit: "/Pc",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/brc-cng-aftermarket-kit-3kbjf9a1.jpg"
  },
  {
    id: 8,
    name: "Lovato CNG OEM-Fitted Kit",
    price: "₹ 40,000",
    unit: "/Pc",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/lovato-liquid-cng-kit-5kdgynzl.png"
  }
];

const ProductComponent = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt={product.name} className="card-img" />
          <div className="card-info">
            <h3>{product.name}</h3>
            <p className="price">{product.price} <span>{product.unit}</span></p>
            <button className="enquire-btn">Enquire Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductComponent;
