"use client";

import { useEffect } from "react";
import Script from "next/script";

// Extend the Window interface to include Cal and openCalendarPopup
declare global {
  interface Window {
    Cal?: {
      (action: string, namespace: string, options?: Record<string, unknown>): void;
      ns: Record<string, (action: string, options?: Record<string, unknown>) => void>;
    };
    openCalendarPopup?: () => void;
  }
}

export const CalendarPopup = () => {
  // Function to load Cal.com integration
  const initializeCalendar = () => {
    if (window.Cal) {
      try {
        window.Cal("init", "30min", { origin: "https://cal.com" });
        window.Cal.ns["30min"]("floatingButton", {
          calLink: "henry-brand-labs/30min",
          config: { layout: "month_view", theme: "dark" },
          buttonText: "Book a Call",
          buttonColor: "#F0CF3B",
          buttonTextColor: "#000000",
          hideButtonIcon: false
        });
        window.Cal.ns["30min"]("ui", {
          theme: "dark",
          cssVarsPerTheme: { light: { "cal-brand": "#000000" } },
          hideEventTypeDetails: false,
          layout: "month_view"
        });
      } catch (error) {
        console.error("Error initializing Cal.com:", error);
      }
    }
  };

  // Handle manual booking button click
  const handleBookCallClick = () => {
    if (window.Cal && window.Cal.ns["30min"]) {
      window.Cal.ns["30min"]("openModal", {
        calLink: "henry-brand-labs/30min",
        config: { layout: "month_view", theme: "dark" }
      });
    }
  };

  // Expose the booking function to be called from outside the component
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.openCalendarPopup = handleBookCallClick;
    }
    
    return () => {
      if (typeof window !== "undefined") {
        delete window.openCalendarPopup;
      }
    };
  }, []);

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={initializeCalendar}
      />
    </>
  );
};

export default CalendarPopup;