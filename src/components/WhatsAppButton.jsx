import React from 'react';

const WhatsAppButton = ({ message, children, className }) => {
  const phoneNumber = "233508396233";
  const encodedMessage = encodeURIComponent(message || "Hi Ellora Cosmetics, I'd like to learn more about your products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
};

export default WhatsAppButton;
