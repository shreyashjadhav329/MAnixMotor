import React from "react";
import "./PartComponent.css"; // Make sure this CSS file is in the same folder

const partData = [
  {
    title: "Conventional Open Loop System",
    description: `Open Loop System contains advanced timing Sensor / Emulator MPFI. The system is pretty basic and it needs regular adjustments if you need the best performance out of it. You will also need to check the Engine lamp due to the lambda error. Open-loop systems don’t calculate Lambda 02 reading but keep the gas flowing according to the requirements.`,
    image: "\sequential.webp",
  },
  {
    title: "Conventional Closed Loop System",
    description: `Closed-Loop System comes with Lambda controller ECU / Stepper Motor / MPFI Emulator. This system has complete automatic gas regulation and it also depends on what the car engine requires. Apart from that, it emulates the Lambda 02 reading to the Main Car ECU to prevent engine check.`,
    image: "\direct-injection.webp",
  },
  {
    title: "Sequential Injections System",
    description: `Available for 3,4,6 & 8 Cylinder engines. CNG Sequential Kits – latest technology product that gives a performance at par with petrol cars. Instead of the GAS-AIR mixer as used in Conventional Kits, Sequential Kit is equipped with GAS Injectors similar to Petrol injectors to Inject a calculated amount of GAS into the engine.`,
    image: "\openloop.webp",
  },
  {
    title: "Direct Injections System",
    description: `Direct Injection Kit is designed for 3,4,6 and 8-cylinder engines. Support All Direct Injection Engines Like T-GDI / FSI /EcoBoost / TSI, etc. The Direct Injection CNG Kits allows adding a maximum of 20% to 30% Gasoline with natural gas for certain cars. It has a minimum amount of gasoline to add with a range of 2-3%. It is available with a Single-stage reducer, adapted to support all engines with direct fuel.`,
    image: "\closeloop.webp",
  },
];

const PartComponent = () => {
  return (
    <div className="part-container">
      {partData.map((part, index) => (
        <div className="part-box" key={index}>
          <div className="part-text">
            <h2 className="part-title">{part.title}</h2>
            <p className="part-desc">{part.description}</p>
          </div>
          <img className="part-image" src={part.image} alt={part.title} />
        </div>
      ))}
    </div>
  );
};

export default PartComponent;
