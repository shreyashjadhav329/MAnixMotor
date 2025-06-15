import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const testingPoints = [
  "CNG cylinders are pressure vessels that must undergo periodic hydrostatic testing every 3 to 5 years as per government norms.",
  "Hydro testing checks for leaks, deformation, and cylinder wall integrity under high pressure using water.",
  "Testing must be performed only at government-approved CNG cylinder testing centers.",
  "Unmaintained or expired cylinders pose explosion risks and can lead to engine damage or accidents.",
  "After a successful test, a certificate and a new color-coded sticker (validity proof) are issued."
];

const extraInfo = `Regular testing is not just a regulatory formality—it ensures long-term vehicle safety, prevents hazardous gas leaks, and maintains optimal engine performance.

Always verify the test certificate before refueling your CNG vehicle.

Ignoring testing can result in:
- Heavy penalties by transport authorities
- Rejection of insurance claims in case of damage
- Explosion risks during heat exposure or pressure buildup

CNG safety testing is an investment in lives and property.`;

const CNGTestingInfo = () => {
  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowInfo(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: window.innerWidth < 768 ? 'column' : 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '40px 24px',
    gap: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'white',
  };

  const textBlockStyle = {
    width: window.innerWidth < 768 ? '100%' : '50%',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  };

  const paragraphStyle = {
    fontSize: window.innerWidth < 768 ? '16px' : '18px',
    fontWeight: '600',
    lineHeight: '1.6',
    color: '#333',
  };

  const extraInfoStyle = {
    marginTop: '20px',
    backgroundColor: '#FEF9C3',
    border: '1px solid #FDE68A',
    color: '#92400E',
    padding: '20px',
    borderRadius: '12px',
    fontSize: window.innerWidth < 768 ? '15px' : '17px',
    fontWeight: '500',
    lineHeight: '1.6',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  };

  const imageStyle = {
    width: window.innerWidth < 768 ? '300px' : '450px',
    height: 'auto',
    objectFit: 'contain',
    borderRadius: '16px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
  };

  return (
    <div style={containerStyle}>
      {/* Text content from left */}
      <div style={textBlockStyle}>
        {testingPoints.map((point, index) => (
          <motion.p
            key={index}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.4, duration: 0.6 }}
            style={paragraphStyle}
          >
            • {point}
          </motion.p>
        ))}

        {/* Extra info */}
        {showInfo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={extraInfoStyle}
          >
            {extraInfo.split('\n').map((line, i) => (
              <p key={i} style={{ marginBottom: '10px' }}>{line.trim()}</p>
            ))}
          </motion.div>
        )}
      </div>

      {/* Image sliding in from right */}
      <motion.img
        src="/frame1.png" // Replace with your correct image path
        alt="CNG Cylinder Testing"
        initial={{ x: 150, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        style={imageStyle}
      />
    </div>
  );
};

export default CNGTestingInfo;
