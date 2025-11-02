"use client";

import { createContext, useContext } from 'react';

interface LanguageContextType {
  language: "english" | "arabic";
  setLanguage: (language: "english" | "arabic") => void;
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "english",
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = LanguageContext.Provider;