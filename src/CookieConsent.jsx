import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [consent, setConsent] = useState(localStorage.getItem("cookie_consent"));

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setConsent("true");
  };

  if (consent) return null;

  return (
    <div className="fixed bottom-0 w-full bg-[var(--bg-sub-cold)] text-white p-4 flex justify-between items-center z-50">
      <p className="text-sm">We use cookies for analytics and security. By using our site, you agree to our cookie policy.</p>
      <button onClick={acceptCookies} className="bg-blue-500 px-4 py-2 rounded ml-4">Accept</button>
    </div>
  );
};

export default CookieConsent;
