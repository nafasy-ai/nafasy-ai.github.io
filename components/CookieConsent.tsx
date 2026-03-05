"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface CookieConsentProps {
  language?: "english" | "arabic";
}

export default function CookieConsent({}: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState<boolean | null>(null);
  const { language } = useLanguage();
  const isArabic = language === "arabic";

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    setIsVisible(!consent);
  }, []);

  const handleConsent = (consent: "accepted" | "declined") => {
    localStorage.setItem("cookieConsent", consent);
    setIsVisible(false);
  };

  if (isVisible === null || !isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes cookie-slide-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .cookie-banner {
          animation: cookie-slide-up 0.4s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
      `}</style>

      {/* Blocking overlay — prevents all interaction until consent is given */}
      <div className="fixed inset-0 z-[9998] bg-black/30 backdrop-blur-sm" aria-hidden="true" />

      <div
        className={`cookie-banner fixed bottom-5 z-[9999] w-[calc(100%-2.5rem)] max-w-lg
          ${isArabic ? "right-5" : "left-5"}
          bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-900/10
          border border-white/60 overflow-hidden`}
        dir={isArabic ? "rtl" : "ltr"}
      >
        {/* Top gradient accent */}
        <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600" />

        <div className="p-5">
          {/* Header row */}
          <div className={`flex items-center gap-3 mb-3 ${isArabic ? "flex-row-reverse" : ""}`}>
            {/* Cookie icon */}
            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-md">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                <circle cx="8.5" cy="12" r="1.5" fill="white" stroke="none"/>
                <circle cx="12" cy="8.5" r="1.5" fill="white" stroke="none"/>
                <circle cx="15.5" cy="12" r="1.5" fill="white" stroke="none"/>
              </svg>
            </div>
            <div className={isArabic ? "text-right" : ""}>
              <h3 className="font-bold text-gray-900 text-base leading-tight">
                {isArabic ? "إشعار ملفات تعريف الارتباط" : "Cookie Notice"}
              </h3>
              <span className="text-xs text-blue-500 font-medium">
                {isArabic ? "DIFC • الخصوصية والأمان" : "DIFC • Privacy & Security"}
              </span>
            </div>
          </div>

          {/* Body text */}
          <p className={`text-sm text-gray-500 leading-relaxed mb-1 ${isArabic ? "text-right" : "text-left"}`}>
            {isArabic
              ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك وضمان أمان الموقع. يمكنك قبولها أو رفضها في أي وقت."
              : "We use cookies to enhance your experience and ensure site security. You can accept or decline at any time."}
          </p>

          <Link
            href={`/cookie-policy?lang=${language}`}
            className={`inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors mb-4 ${isArabic ? "flex-row-reverse" : ""}`}
          >
            {isArabic ? "اقرأ سياسة ملفات التعريف" : "Read Cookie Policy"}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {isArabic
                ? <path d="M19 12H5M12 5l-7 7 7 7"/>
                : <path d="M5 12h14M12 5l7 7-7 7"/>}
            </svg>
          </Link>

          {/* Buttons */}
          <div className={`flex gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
            <button
              onClick={() => handleConsent("declined")}
              className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 text-gray-600 text-sm font-semibold
                hover:bg-gray-50 hover:border-gray-300 active:scale-95 transition-all duration-150"
            >
              {isArabic ? "رفض" : "Decline"}
            </button>
            <button
              onClick={() => handleConsent("accepted")}
              className="flex-1 px-4 py-2.5 rounded-xl text-white text-sm font-semibold
                bg-gradient-to-r from-blue-600 to-cyan-500
                hover:from-blue-700 hover:to-cyan-600
                shadow-md shadow-blue-500/25
                active:scale-95 transition-all duration-150"
            >
              {isArabic ? "قبول الكل" : "Accept All"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
