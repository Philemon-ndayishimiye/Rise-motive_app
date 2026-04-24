// ScrollManager.tsx
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const positions: Record<string, number> = {};

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    const key = location.pathname;

    if (navigationType === "POP") {
      // 🔵 Back/forward → restore scroll
      const saved = positions[key];
      if (saved !== undefined) {
        window.scrollTo(0, saved);
      }
    } else {
      // 🟢 New navigation → scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Handle anchor links (#section)
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }

    return () => {
      // Save position before leaving
      positions[key] = window.scrollY;
    };
  }, [location, navigationType]);

  return null;
};

export default ScrollManager;