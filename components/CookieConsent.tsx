
// // --- START OF FILE CookieConsent.tsx ---
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useLanguage } from "@/context/LanguageContext"; // Keep this import

// interface CookieConsentProps {
//     // We can actually remove the language prop here,
//     // as CookieConsent will now get its language solely from the context.
//     // However, keeping it won't hurt, it's just not strictly necessary anymore.
//     language?: "english" | "arabic"; // Make it optional or remove if not needed for other purposes
// }

// export default function CookieConsent({ /* language: propLanguage */ }: CookieConsentProps) {
//     const [isVisible, setIsVisible] = useState<boolean | null>(null);
//     const { language } = useLanguage(); // <--- Get the language from the context directly
//     const isArabic = language === "arabic"; // <--- Use the context language here

//     useEffect(() => {
//         // This effect runs on the client-side after mount
//         const consent = localStorage.getItem("cookieConsent");
//         setIsVisible(!consent);
//     }, []);

//     const handleConsent = (consent: "accepted" | "declined") => {
//         localStorage.setItem("cookieConsent", consent);
//         setIsVisible(false);
//     };

//     if (isVisible === null || !isVisible) return null;

//     return (
//         <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 z-[9999]">
//             <div className="max-w-7xl mx-auto p-4 md:p-6">
//                 <div
//                     className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
//                         isArabic ? "text-right" : "text-left"
//                     }`}
//                     dir={isArabic ? "rtl" : "ltr"}
//                 >
//                     <div className="flex-1 space-y-2">
//                         <h3 className="font-semibold text-gray-900">
//                             {isArabic ? "إشعار ملفات تعريف الارتباط" : "Cookie Notice"}
//                         </h3>
//                         <p className="text-gray-600 text-sm md:text-base">
//                             {isArabic
//                                 ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. باستخدامك للموقع، فإنك توافق على سياستنا."
//                                 : "We use cookies to enhance your experience. By using our site, you agree to our policy."}
//                         </p>
//                         <Link
//                             href={`/cookie-policy?lang=${language}`} // Link to cookie policy, respecting current language
//                             className="inline-block text-blue-600 hover:text-blue-700 underline text-sm"
//                         >
//                             {isArabic ? "اقرأ المزيد" : "Learn more"}
//                         </Link>
//                     </div>
//                     <div
//                         className={`flex flex-col sm:flex-row gap-3 w-full md:w-auto ${
//                             isArabic ? "sm:flex-row-reverse" : ""
//                         }`}
//                     >
//                         <button
//                             onClick={() => handleConsent("declined")}
//                             className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
//                         >
//                             {isArabic ? "رفض" : "Decline"}
//                         </button>
//                         <button
//                             onClick={() => handleConsent("accepted")}
//                             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
//                         >
//                             {isArabic ? "موافق" : "Accept"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// // --- END OF FILE CookieConsent.tsx ---




// --- START OF FILE CookieConsent.tsx ---
// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { useLanguage } from "@/context/LanguageContext";

// interface CookieConsentProps {
//     // We can remove the language prop entirely now, as it will get language from context
//     // This simplifies props and makes it clearer that context is the source of truth.
// }

// export default function CookieConsent({ /* no props needed */ }: CookieConsentProps) {
//     const [isVisible, setIsVisible] = useState<boolean | null>(null);
//     const [mounted, setMounted] = useState(false); // New state to track client-side mount

//     // Only get language from context AFTER component has mounted on client
//     const { language } = useLanguage(); 
//     const isArabic = language === "arabic";

//     useEffect(() => {
//         setMounted(true); // Component is now mounted on the client
//         const consent = localStorage.getItem("cookieConsent");
//         setIsVisible(!consent);
//     }, []);

//     const handleConsent = (consent: "accepted" | "declined") => {
//         localStorage.setItem("cookieConsent", consent);
//         setIsVisible(false);
//     };

//     // If not mounted yet, or not visible, return null
//     if (!mounted || isVisible === null || !isVisible) return null;

//     // Now, we are sure it's client-side mounted AND visible
//     return (
//         <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 z-[9999]">
//             <div className="max-w-7xl mx-auto p-4 md:p-6">
//                 <div
//                     className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
//                         isArabic ? "text-right" : "text-left"
//                     }`}
//                     dir={isArabic ? "rtl" : "ltr"}
//                 >
//                     <div className="flex-1 space-y-2">
//                         <h3 className="font-semibold text-gray-900">
//                             {isArabic ? "إشعار ملفات تعريف الارتباط" : "Cookie Notice"}
//                         </h3>
//                         <p className="text-gray-600 text-sm md:text-base">
//                             {isArabic
//                                 ? "نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا. باستخدامك للموقع، فإنك توافق على سياستنا."
//                                 : "We use cookies to enhance your experience. By using our site, you agree to our policy."}
//                         </p>
//                         <Link
//                             href={`/cookie-policy?lang=${language}`}
//                             className="inline-block text-blue-600 hover:text-blue-700 underline text-sm"
//                         >
//                             {isArabic ? "اقرأ المزيد" : "Learn more"}
//                         </Link>
//                     </div>
//                     <div
//                         className={`flex flex-col sm:flex-row gap-3 w-full md:w-auto ${
//                             isArabic ? "sm:flex-row-reverse" : ""
//                         }`}
//                     >
//                         <button
//                             onClick={() => handleConsent("declined")}
//                             className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
//                         >
//                             {isArabic ? "رفض" : "Decline"}
//                         </button>
//                         <button
//                             onClick={() => handleConsent("accepted")}
//                             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
//                         >
//                             {isArabic ? "موافق" : "Accept"}
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
// // --- END OF FILE CookieConsent.tsx ---



// --- START OF FILE CookieConsent.tsx ---
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // Keep this import

interface CookieConsentProps {
    // We can actually remove the language prop here,
    // as CookieConsent will now get its language solely from the context.
    // However, keeping it won't hurt, it's just not strictly necessary anymore.
    language?: "english" | "arabic"; // Make it optional or remove if not needed for other purposes
}

export default function CookieConsent({ /* language: propLanguage */ }: CookieConsentProps) {
    const [isVisible, setIsVisible] = useState<boolean | null>(null);
    const { language } = useLanguage(); // <--- Get the language from the context directly
    const isArabic = language === "arabic"; // <--- Use the context language here

    useEffect(() => {
        // This effect runs on the client-side after mount
        const consent = localStorage.getItem("cookieConsent");
        setIsVisible(!consent);
    }, []);

    const handleConsent = (consent: "accepted" | "declined") => {
        localStorage.setItem("cookieConsent", consent);
        setIsVisible(false);
    };

    if (isVisible === null || !isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t border-gray-200 z-[9999]">
            <div className="max-w-7xl mx-auto p-4 md:p-6">
                <div
                    className={`flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                        isArabic ? "text-right" : "text-left"
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
                            href={`/cookie-policy?lang=${language}`} // Link to cookie policy, respecting current language
                            className="inline-block text-blue-600 hover:text-blue-700 underline text-sm"
                        >
                            {isArabic ? "اقرأ المزيد" : "Learn more"}
                        </Link>
                    </div>
                    <div
                        className={`flex flex-col sm:flex-row gap-3 w-full md:w-auto ${
                            isArabic ? "sm:flex-row-reverse" : ""
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
// --- END OF FILE CookieConsent.tsx ---