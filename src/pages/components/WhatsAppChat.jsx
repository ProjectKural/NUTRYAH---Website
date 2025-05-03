import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import axios from "axios";

const WhatsAppChat = () => {
  const location = useLocation();
  const phone = "918870787448"; // Your WhatsApp number
  const page = location.pathname;

  const messages = {
    "/": "Hello Nutria! I visited your profile and would like to learn more about your services.",
    "/pricing": "Hello Nutria! I visited your profile and would like to learn more about your services.",
    "/products/emr": "Hello Nutria! I visited your profile and would like to learn more about your services.",
  };

  const message = encodeURIComponent(messages[page] || "Hi, I'm interested in your services.");
  const link = `https://wa.me/${phone}?text=${message}`;

  const handleClick = () => {
    // Log to backend
    axios.post("http://127.0.0.1:8000/api/whatsapp-lead", {
      phone,
      message: decodeURIComponent(message),
      page,
      timestamp: new Date().toISOString(),
    }).catch(err => console.error("Logging failed:", err));
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="fixed bottom-10 right-5 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppChat;
