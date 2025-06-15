import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import "./Home.css";
import { image, title } from 'framer-motion/client';

const parts = [
  {
    title:'CNG Tank',
    image:'https://staticimg.amarujala.com/assets/images/2022/11/14/cng-in-dzire_1668425620.png?q=80&w=480&dpr=2.6',
   description: `Established in 2003, Manix Motors is one of the oldest and most trusted CNG tank re-testing centers in Mumbai. With over two decades of industry experience, we have successfully installed CNG kits in more than 3000 vehicles, offering reliable and high-quality services to both individual and commercial clients.

At Manix Motors we specialize in CNG kit installation for petrol and diesel vehicles, including both light and heavy-duty vehicles. Our kits are sourced from top international manufacturers, including Italy and other reputed countries, ensuring world-class performance and durability. All our kits and installations are government-certified and fully compliant with safety standards.

As a leading supplier of CNG products and components, we also offer comprehensive CNG tank re-testing services. Our state-of-the-art testing center in Pune is recognized for its precision, reliability, and adherence to strict quality protocols.

Over the years, Manix Motors has become a pioneer in enabling smooth transitions from traditional fuels like petrol and diesel to clean, eco-friendly CNG alternatives. Our integrated solutions are designed to promote fuel efficiency, environmental safety, and long-term performance.

With more than 12 years of hands-on experience in CNG kit conversions and installations, our expert team at Manix Motors is fully equipped to install CNG kits and provide related spare parts for a wide range of vehicle types. We are known for our commitment to safety, quality, and customer satisfaction, making us a trusted name in Mumbai's CNG industry.`
  },
  {
    title: "Why Choose a CNG Kit? – Powered by Manix Motors",
    image:'https://content.jdmagicbox.com/v2/comp/thane/66/022pbe08266/catalogue/manix-motor-gas-thane-1hsj80jllz.jpg',
  description: `At Manix Motors, we believe in offering sustainable, safe, and smart fuel solutions — and CNG (Compressed Natural Gas) is exactly that. CNG is not only eco-friendly, but also wallet-friendly, making it an ideal alternative to traditional fuels like petrol and diesel.

The primary component of CNG is Methane (CH₄) — the cleanest and lightest hydrocarbon. It is lighter than air, and when mixed with air in low concentrations, it does not ignite easily, making it a safer option compared to petrol or LPG.

When properly installed, CNG is extremely safe and significantly reduces your vehicle’s environmental footprint. Unlike petrol or diesel, the combustion of methane produces only carbon dioxide (CO₂), and the carbon monoxide (CO) emissions are negligible, helping protect the air we breathe.

At Manix Motors, we offer expert CNG kit installations for petrol and diesel vehicles, including light and heavy-duty models, all under the guidelines of VRDE (Vehicle Research & Development Establishment) and ARAI (Automotive Research Association of India). Every kit is:

• Sourced from certified suppliers  
• Installed by trained professionals  
• Tested for quality, safety, and performance  
• Approved by legal and government authorities

CNG-powered vehicles are highly fuel-efficient and cost-effective, especially for daily drivers. Once installed, your vehicle runs as smoothly on CNG as it does on petrol or diesel — only cleaner, cheaper, and more sustainable.

Switch to CNG with confidence — choose Manix Motors for certified, reliable, and safe CNG solutions.`


  },
  {
    title: 'VALTEK (ITALY) INJECTOR RAIL',
    image: '/injectorrail.jpeg',
    description:
      'Valtek Injector Rail from Italy ensures precise gas injection into the engine. It delivers consistent performance, reliability, and efficiency for smooth vehicle operation on CNG.',
  },
  {
    title: 'CNG REGULATOR',
    image: '\CNGregulator (2).jpeg',
    description:
      'The CNG Regulator controls and reduces the high pressure from the CNG tank before it reaches the injector rail. This is critical for maintaining safety and stable engine performance.',
  },
  {
  title: '2-inch CNG Pressure Gauge',
  image: 'https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/2-inch--50-mm-cng-pressure-ga-20240527170358759.png',
  description:
    'This 2-inch (50 mm) CNG pressure gauge is designed to accurately monitor gas pressure in the cylinder. It ensures safety and optimal performance by allowing drivers to keep an eye on tank pressure during vehicle operation.',
}
,
  {
    title: 'AEB (ITALY) MP-48 ECU',
    image: '/AEB.jpeg',
    description:
      'The AEB MP-48 ECU from Italy is the brain of the CNG system, managing fuel injection timing and gas flow. It ensures optimal engine tuning and smooth CNG-to-petrol switching.',
  },
];

const CNGFitting = () => {
  const refs = parts.map(() => useRef(null));

  return (
    <div className="home-container">
      {parts.map((item, index) => {
        const inView = useInView(refs[index], { once: true });
        const isReversed = index % 2 === 1;

        return (
          <motion.div
            key={index}
            ref={refs[index]}
            className={`slide-box ${isReversed ? "reverse" : ""}`}
            initial={{ x: isReversed ? 100 : -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
          >
            <img src={item.image} alt={item.title} className="slide-image" />
            <div className="slide-content">
              <h2 className="slide-title">{item.title}</h2>
              <p className="slide-description">{item.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default CNGFitting;
