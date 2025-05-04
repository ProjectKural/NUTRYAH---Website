import { useEffect } from "react";

const GoogleAnalytics = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.setAttribute("async", "");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-2YTWXBFN1N";

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-2YTWXBFN1N');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleAnalytics;
