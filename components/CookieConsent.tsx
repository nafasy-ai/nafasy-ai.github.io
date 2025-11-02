"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface CookieConsentProps {
    language: "english" | "arabic";
}

export default function CookieConsent({ language }: CookieConsentProps) {
    const [isVisible, setIsVisible] = useState<boolean | null>(null);
    const [currentLanguage, setCurrentLanguage] = useState(language);
    const isArabic = currentLanguage === "arabic";

    useEffect(() => {
        // Update currentLanguage when language prop changes
        setCurrentLanguage(language);
    }, [language]);

    useEffect(() => {
        // Check for existing consent only after component mounts
        const consent = localStorage.getItem("cookieConsent");
        setIsVisible(!consent); // Show if no consent is stored
    }, []);

    const handleConsent = (consent: "accepted" | "declined") => {
        localStorage.setItem("cookieConsent", consent);
        setIsVisible(false);
    };

    // Don't render anything while checking initial consent
    if (isVisible === null) return null;
    // Don't render if consent has been given
    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 z-[9999]">
            <div className="max-w-7xl mx-auto p-4 md:p-6">
                <div
                    className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${isArabic ? "text-right" : "text-left"
                        }`}
                    dir={isArabic ? "rtl" : "ltr"}
                >
                    <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-gray-900">
                            {isArabic ? "إشعار ملفات تعريف الارتباط" : "Cookie Notice"}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base">
                            {isArabic
                                ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. باستخدامك للموقع، فإنك توافق على سياستنا."
                                : "We use cookies to enhance your experience. By using our site, you agree to our policy."}
                        </p>
                        <Link
                            href="/cookie-policy"
                            className="inline-block text-blue-600 hover:text-blue-700 underline text-sm"
                        >
                            {isArabic ? "اقرأ المزيد" : "Learn more"}
                        </Link>
                    </div>
                    <div
                        className={`flex flex-col sm:flex-row gap-3 w-full md:w-auto ${isArabic ? "sm:flex-row-reverse" : ""
                            }`}
                    >
                        <button
                            onClick={() => handleConsent("declined")}
                            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                        >
                            {isArabic ? "رفض" : "Decline"}
                        </button>
                        <button
                            onClick={() => handleConsent("accepted")}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                        >
                            {isArabic ? "موافق" : "Accept"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}