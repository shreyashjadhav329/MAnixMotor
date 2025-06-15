import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  const phoneNumber = "919892309024" // Use country code without '+' sign

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      style={styles.button}
    >
      <FaWhatsapp size={30} color="white" />
    </a>
  );
}

const styles = {
  button: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "0px 4px 8px rgba(0,0,0,0.2)",
    zIndex: 1000,
    textDecoration: "none"
  }
};

export default WhatsAppButton;
