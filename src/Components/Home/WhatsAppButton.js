import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[20px] right-4 bg-[#25D366] p-3 rounded-full shadow-lg z-20"
    >
      <FaWhatsapp className="text-white w-8 h-8" />
    </a>
  );
}
