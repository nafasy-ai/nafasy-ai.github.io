// --- START OF FILE layout.tsx ---
"use client";

import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import CookieConsent from '@/components/CookieConsent'
import { useState, useEffect } from 'react'
import { LanguageProvider } from '@/context/LanguageContext'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const [language, setLanguage] = useState<"english" | "arabic">("english");
  const [mounted, setMounted] = useState(false);

  // Client-side only effect
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    // Check URL params first
    const params = new URLSearchParams(window.location.search);
    const langParam = params.get("lang");
    
    if (langParam === "arabic" || langParam === "english") {
      setLanguage(langParam);
      localStorage.setItem("language", langParam);
    } else {
      // Check localStorage
      const savedLanguage = localStorage.getItem("language") as "english" | "arabic" | null;
      if (savedLanguage === "arabic" || savedLanguage === "english") {
        setLanguage(savedLanguage);
      } else {
        // Check browser language
        const browserLang = navigator.language.toLowerCase();
        const isArabicBrowser = browserLang.includes('ar');
        const defaultLanguage = isArabicBrowser ? "arabic" : "english";
        
        setLanguage(defaultLanguage);
        localStorage.setItem("language", defaultLanguage);
      }
    }
  }, []);

  // Language change effect - ensures URL and document direction are updated
  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;
    
    localStorage.setItem("language", language);
    const url = new URL(window.location.href);
    url.searchParams.set("lang", language);
    window.history.replaceState({}, '', url.toString());
    
    document.documentElement.dir = language === "arabic" ? "rtl" : "ltr";
  }, [language, mounted]);

  if (!mounted) {
    return (
      <html lang="en">
        <body>
          <div>Loading...</div>
        </body>
      </html>
    );
  }

  return (
    <html lang={language === "arabic" ? "ar" : "en"}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>
      </head>
      <body 
        className={`${language === "arabic" ? "font-arabic" : ""}`}
        dir={language === "arabic" ? "rtl" : "ltr"}
      >
        <LanguageProvider value={{ language, setLanguage }}>
          {children}
          {/* Removed language prop here, CookieConsent will get it from context */}
          <CookieConsent /> 
        </LanguageProvider>
      </body>
    </html>
  );
}
// --- END OF FILE layout.tsx ---


// --- START OF FILE layout.tsx ---
