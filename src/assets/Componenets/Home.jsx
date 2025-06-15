import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import "./Home.css";
import PartComponent from "./PartComponent";
import BannerSlider from "./BannerSlider";

const Home = () => {
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const content = [
    {
      title: "Clean Energy",
      image:
        "https://cdn.cars24.com/prod/auto-news24-cms/root/2024/07/16/0a1a597b-bf4d-40c5-8665-6de5727f420c-shutterstock_2369833441.jpg",
      direction: -100,
      description:
        "Manix Motor has been a trusted name in vehicle CNG conversions since 2003. With over two decades of experience, we have successfully converted thousands of vehicles to eco-friendly CNG systems, ensuring better fuel efficiency, reduced emissions, and cost-effective performance for our customers",
    },
    {
      title: "CNG Services",
      image:
        "https://content.jdmagicbox.com/comp/def_content/cng-conversion-kit-repair-and-services/4-cng-conversion-kit-repair-and-services-4-x7ezb.jpg",
      direction: 100,
      description:
        "At Manix Motor, we specialize in a full range of CNG-related services. Backed by an expert team of certified technicians, we ensure safe, reliable, and high-quality CNG kit installations, maintenance, and upgrades. With decades of experience, we’re committed to delivering eco-friendly solutions and top-notch service you can trust.",
    },
    {
      title: "CNG Testing",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2024/2/394744293/QR/VB/RA/60500759/cng-cylinder-hydro-testing-services.jpg",
      direction: -100,
      description:
        "At Manix Motor, we don’t just install CNG kits — we ensure long-term safety and performance. After three years of installation, we offer thorough CNG testing as per government norms to ensure your vehicle remains safe and efficient. Our expert team provides clear guidance, timely reminders, and full support throughout the testing process, keeping your vehicle road-ready and compliant.",
    },
    {
      title: "Mechanical Services",
      image:
        "https://media.gettyimages.com/id/522394158/photo/car-service-procedure.jpg?s=612x612&w=gi&k=20&c=PGLpIJbn31H97zYkGRgOLa1ng894EZXJt0M4Vveh0j4=",
      direction: 100,
      description:
        "To ensure your vehicle runs smoothly and safely, Manix Motor also provides reliable mechanical services. From routine maintenance to expert repairs, our skilled technicians are equipped to handle all your automotive needs with precision and care — keeping your car in top condition, every time.",
    },
  ];

  return (
    <div className="home-container">
      <BannerSlider/>
      {content.map((item, index) => {
        const inView = useInView(refs[index], { once: true });
        const isReversed = index % 2 === 1;

        return (
          <motion.div
            key={index}
            ref={refs[index]}
            className={`slide-box ${isReversed ? "reverse" : ""}`}
            initial={{ x: item.direction, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="slide-image"
            />
            <div className="slide-content">
              <h2 className="slide-title">{item.title}</h2>
              <p className="slide-description">{item.description}</p>
            </div>
          </motion.div>
        );
      })}

      <PartComponent />
    
    </div>
  );
};

export default Home;
