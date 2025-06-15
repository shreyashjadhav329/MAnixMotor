import React from 'react';
import { motion } from 'framer-motion';
import './MechanicalWorks.css';

const MechanicalWorks = () => {
  return (
    <div className="mechanical-works-container">
      <h2 className="section-title">Mechanical Works & Services</h2>
      <div className="mechanical-content">
        <motion.img
          src="\Mechanicalworks.jpg"
          alt="Mechanical Services"
          className="mechanical-image"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="mechanical-info"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p>
            At <strong>Manix Motors</strong>, we specialize in a wide range of mechanical repair
            and maintenance services, including engine diagnostics, suspension tuning,
            brake system repairs, and full vehicle inspections. Our skilled technicians
            use advanced tools and genuine parts to ensure your vehicle runs smoothly
            and efficiently.
          </p>
          <ul>
            <li>Engine & Gearbox Overhaul</li>
            <li>Brake Repair & Replacement</li>
            <li>Suspension System Services</li>
            <li>Routine Servicing & Maintenance</li>
            <li>Pre-Owned Car Inspection</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MechanicalWorks;
