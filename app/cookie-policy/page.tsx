"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function CookiePolicy() {
  const { language } = useLanguage();
  const isArabic = language === "arabic";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden ${isArabic ? "rtl" : "ltr"}`} dir={isArabic ? "rtl" : "ltr"}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
            style={{ left: `${mousePosition.x * 0.02}px`, top: `${mousePosition.y * 0.02}px`, animation: "float 6s ease-in-out infinite" }}
          />
          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"
            style={{ right: `${mousePosition.x * 0.01}px`, bottom: `${mousePosition.y * 0.01}px`, animation: "float 8s ease-in-out infinite reverse" }}
          />
          <div
            className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"
            style={{ left: "20%", top: "30%", animation: "float 10s ease-in-out infinite" }}
          />
        </div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `particle-float ${5 + Math.random() * 10}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 lg:p-12 animate-in fade-in slide-in-from-bottom duration-1000">

            {/* Page Hero */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-lg mb-5">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                  <circle cx="8.5" cy="12" r="1.5"/><circle cx="12" cy="8.5" r="1.5"/><circle cx="15.5" cy="12" r="1.5"/>
                </svg>
              </div>
              <h1 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-3 ${isArabic ? "text-right" : "text-center"}`}>
                {isArabic ? "سياسة ملفات التعريف" : "Cookie Policy"}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/privacy-notice" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                  {isArabic ? "إشعار الخصوصية" : "Privacy Notice"}
                </Link>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                  {isArabic ? "سياسة ملفات التعريف" : "Cookie Policy"}
                </span>
                <Link href="/terms-of-use" className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                  {isArabic ? "شروط الاستخدام" : "Terms of Use"}
                </Link>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* Intro */}
              <div className={`${isArabic ? "border-r-4 pr-5 rounded-r-xl" : "border-l-4 pl-5 rounded-l-xl"} border-blue-400 bg-blue-50/60 py-4 mb-10`}>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "تشرح سياسة ملفات التعريف هذه كيفية استخدام شركة نفَسي.أي آي المحدودة (\"نفَسي.أي آي\"، \"نحن\"، \"نا\"، أو \"لنا\") لملفات تعريف الارتباط والتقنيات المشابهة على موقعنا الإلكتروني، "
                    : 'This Cookie Policy explains how Nafasy.AI Limited ("Nafasy.AI", "we", "us", or "our") uses cookies and similar technologies on our website, '}
                  <a href="https://nafasy.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300">
                    https://nafasy.ai/
                  </a>
                  {isArabic ? " (الـ\"موقع\")." : ' (the "Website").'}
                </p>
              </div>

              {/* Section 1 — What Are Cookies */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                      <circle cx="8.5" cy="12" r="1.5"/><circle cx="12" cy="8.5" r="1.5"/><circle cx="15.5" cy="12" r="1.5"/>
                    </svg>
                  </div>
                  <h2 className={`text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600 ${isArabic ? "text-right" : "text-left"}`}>
                    {isArabic ? "1. ما هي ملفات التعريف؟" : "1. What Are Cookies?"}
                  </h2>
                </div>
                <div className={`${isArabic ? "border-r-4 pr-4" : "border-l-4 pl-4"} border-blue-200 py-2`}>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول عند زيارة موقع ويب. يتم استخدامها على نطاق واسع لجعل مواقع الويب تعمل، أو تعمل بكفاءة أكبر، وكذلك لتقديم معلومات لأصحاب الموقع."
                      : "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site."}
                  </p>
                </div>
              </section>

              {/* Section 2 — How We Use Cookies */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                    </svg>
                  </div>
                  <h2 className={`text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600 ${isArabic ? "text-right" : "text-left"}`}>
                    {isArabic ? "2. كيف نستخدم ملفات التعريف" : "2. How We Use Cookies"}
                  </h2>
                </div>
                <div className={`${isArabic ? "border-r-4 pr-4" : "border-l-4 pl-4"} border-indigo-200 py-2`}>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "نستخدم ملفات تعريف الارتباط لفهم كيفية استخدام موقعنا، وتحسين تجربة المستخدم لديك، وضمان أمان موقعنا. ملفات تعريف الارتباط التي نستخدمها لا تجمع معلومات تعريف شخصية عنك."
                      : "We use cookies to understand how our Website is used, to improve your user experience, and to ensure the security of our site. The cookies we use do not collect personally identifiable information about you."}
                  </p>
                </div>
              </section>

              {/* Section 3 — Types of Cookies */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/>
                      <line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>
                    </svg>
                  </div>
                  <h2 className={`text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600 ${isArabic ? "text-right" : "text-left"}`}>
                    {isArabic ? "3. أنواع ملفات التعريف التي نستخدمها" : "3. Types of Cookies We Use"}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
                  {isArabic ? "نستخدم الأنواع التالية من ملفات تعريف الارتباط على موقعنا:" : "We use the following types of cookies on our Website:"}
                </p>
                <div className="space-y-5">

                  {/* Strictly Necessary */}
                  <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    <div className={`bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                        </svg>
                      </div>
                      <h3 className="font-bold text-white text-base lg:text-lg">
                        {isArabic ? "ملفات تعريف الارتباط الضرورية بشكل صارم" : "Strictly Necessary Cookies"}
                      </h3>
                    </div>
                    <div className="px-6 py-5 space-y-3">
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        <span className="font-semibold text-gray-800">{isArabic ? "الغرض:" : "Purpose:"}</span>{" "}
                        {isArabic
                          ? "هذه الملفات ضرورية لتصفحك للموقع واستخدام ميزاته الأساسية. إنها ضرورية لأمان ووظائف موقعنا بشكل صحيح."
                          : "These cookies are essential for you to browse the Website and use its basic features. They are necessary for the security and proper functioning of our site."}
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        <span className="font-semibold text-gray-800">{isArabic ? "أمثلة:" : "Examples:"}</span>{" "}
                        {isArabic
                          ? "ملفات تعريف الارتباط التي تدير جلستك وتضمن أمان موقع الويب."
                          : "Cookies that manage your session and ensure website security."}
                      </p>
                    </div>
                  </div>

                  {/* Performance */}
                  <div className="bg-white rounded-2xl border border-indigo-100 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    <div className={`bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                        </svg>
                      </div>
                      <h3 className="font-bold text-white text-base lg:text-lg">
                        {isArabic ? "ملفات تعريف الارتباط للأداء والتحليل" : "Performance and Analytical Cookies"}
                      </h3>
                    </div>
                    <div className="px-6 py-5 space-y-3">
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        <span className="font-semibold text-gray-800">{isArabic ? "الغرض:" : "Purpose:"}</span>{" "}
                        {isArabic
                          ? "تجمع ملفات تعريف الارتباط هذه معلومات حول كيفية استخدام الزوار لموقعنا، مثل الصفحات التي يتم زيارتها في أغلب الأحيان وما إذا كانوا يتلقون رسائل خطأ. هذا يساعدنا على تحسين أداء موقعنا. جميع المعلومات التي تجمعها ملفات تعريف الارتباط هذه مجمعة وبالتالي مجهولة الهوية."
                          : "These cookies collect information about how visitors use our Website, such as which pages are visited most often and if they receive error messages. This helps us improve the performance of our Website. All information these cookies collect is aggregated and therefore anonymous."}
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        <span className="font-semibold text-gray-800">{isArabic ? "أمثلة:" : "Examples:"}</span>{" "}
                        {isArabic
                          ? "نستخدم Google Analytics لتحليل حركة مرور الموقع وسلوك المستخدم."
                          : "We use Google Analytics to analyze website traffic and user behavior."}
                      </p>
                    </div>
                  </div>

                  {/* Functional */}
                  <div className="bg-white rounded-2xl border border-cyan-100 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    <div className={`bg-gradient-to-r from-cyan-600 to-teal-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/>
                          <line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/>
                          <line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/>
                          <line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>
                        </svg>
                      </div>
                      <h3 className="font-bold text-white text-base lg:text-lg">
                        {isArabic ? "ملفات تعريف الارتباط الوظيفية" : "Functional Cookies"}
                      </h3>
                    </div>
                    <div className="px-6 py-5 space-y-3">
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        <span className="font-semibold text-gray-800">{isArabic ? "الغرض:" : "Purpose:"}</span>{" "}
                        {isArabic
                          ? "تسمح ملفات تعريف الارتباط هذه للموقع بتذكر الخيارات التي تقوم بها (مثل تفضيل لغتك) لتوفير تجربة أكثر تخصيصًا."
                          : "These cookies allow the Website to remember choices you make (such as your language preference) to provide a more personalized experience."}
                      </p>
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        <span className="font-semibold text-gray-800">{isArabic ? "أمثلة:" : "Examples:"}</span>{" "}
                        {isArabic
                          ? "ملف تعريف ارتباط يتذكر لغتك المفضلة لعرض الموقع."
                          : "A cookie that remembers your preferred language for viewing the site."}
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 4 — Your Choices */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="4" y1="6" x2="20" y2="6"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="18" x2="20" y2="18"/>
                      <circle cx="8" cy="6" r="2" fill="white" stroke="none"/>
                      <circle cx="16" cy="12" r="2" fill="white" stroke="none"/>
                      <circle cx="12" cy="18" r="2" fill="white" stroke="none"/>
                    </svg>
                  </div>
                  <h2 className={`text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600 ${isArabic ? "text-right" : "text-left"}`}>
                    {isArabic ? "4. اختياراتك فيما يتعلق بملفات التعريف" : "4. Your Choices Regarding Cookies"}
                  </h2>
                </div>
                <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg mb-5">
                  <div className={`bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 11 12 14 22 4"/>
                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                      </svg>
                    </div>
                    <p className="font-bold text-white text-base lg:text-lg">
                      {isArabic ? "خيارات ملفات التعريف الخاصة بك" : "Your Cookie Options"}
                    </p>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <div className={`flex items-start gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        {isArabic
                          ? "لديك الحق في تقرير ما إذا كنت ستقبل ملفات تعريف الارتباط أو ترفضها. يمكنك ممارسة تفضيلات ملفات تعريف الارتباط باستخدام إعدادات متصفح الويب الخاص بك."
                          : "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by using your web browser's settings."}
                      </p>
                    </div>
                    <div className={`flex items-start gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-2 h-2 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        {isArabic
                          ? "تسمح معظم متصفحات الويب بالتحكم في ملفات تعريف الارتباط من خلال إعداداتها. يمكنك ضبط المتصفح الخاص بك لحظر ملفات تعريف الارتباط أو لتنبيهك عند إرسال ملفات تعريف الارتباط. يرجى ملاحظة أنه إذا حظرت جميع ملفات تعريف الارتباط (بما في ذلك ملفات تعريف الارتباط الضرورية بشكل صارم)، فقد لا تتمكن من الوصول إلى جميع أجزاء موقعنا أو أجزاء منه."
                          : "Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or to alert you when cookies are being sent. Please note that if you block all cookies (including strictly necessary cookies), you may not be able to access all or parts of our Website."}
                      </p>
                    </div>
                  </div>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "لمعرفة المزيد حول ملفات تعريف الارتباط، بما في ذلك كيفية رؤية ملفات تعريف الارتباط التي تم تعيينها وكيفية إدارتها وحذفها، قم بزيارة "
                    : "To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit "}
                  <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300">
                    www.aboutcookies.org
                  </a>
                  {isArabic ? " أو " : " or "}
                  <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300">
                    www.allaboutcookies.org
                  </a>
                  {isArabic ? "." : "."}
                </p>
              </section>

              {/* Section 5 — Changes */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-slate-600 to-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.5 2v6h-6M2.5 22v-6h6"/>
                      <path d="M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
                    </svg>
                  </div>
                  <h2 className={`text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600 ${isArabic ? "text-right" : "text-left"}`}>
                    {isArabic ? "5. تغييرات على سياسة ملفات التعريف هذه" : "5. Changes to This Cookie Policy"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "قد نقوم بتحديث سياسة ملفات التعريف هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة ملفات التعريف الجديدة على هذه الصفحة."
                      : "We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page."}
                  </p>
                </div>
              </section>

              {/* Section 6 — Contact */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1100">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-700 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h2 className={`text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600 ${isArabic ? "text-right" : "text-left"}`}>
                    {isArabic ? "6. اتصل بنا" : "6. Contact Us"}
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-indigo-700 to-blue-700 rounded-2xl shadow-xl p-6 text-white">
                  <div className={`flex items-center gap-3 mb-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <p className="font-bold text-white text-base lg:text-lg">
                      {isArabic ? "اتصل بمسؤول حماية البيانات لدينا" : "Contact Our Data Protection Officer"}
                    </p>
                  </div>
                  <p className="text-indigo-200 text-base leading-relaxed mb-5 text-justify">
                    {isArabic
                      ? "إذا كان لديك أي أسئلة حول استخدامنا لملفات تعريف الارتباط، يرجى الاتصال بمسؤول حماية البيانات لدينا على:"
                      : "If you have any questions about our use of cookies, please contact our Data Protection Officer at:"}
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <a
                      href="mailto:dpo@nafasy.ai"
                      className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 text-sm shadow-md"
                    >
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                      dpo@nafasy.ai
                    </a>
                  </div>
                </div>
              </section>
            </div>

            {/* Footer */}
            <div className="text-center mt-12 pt-8 border-t border-gray-200">
              <Link
                href={`/?lang=${language}`}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {isArabic ? "العودة إلى الصفحة الرئيسية" : "Return to Home"}
              </Link>
              <div className="flex flex-wrap gap-3 justify-center mt-5">
                <Link href="/privacy-notice" className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                  {isArabic ? "إشعار الخصوصية" : "Privacy Notice"}
                </Link>
                <span className="text-gray-300">·</span>
                <Link href="/terms-of-use" className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                  {isArabic ? "شروط الاستخدام" : "Terms of Use"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes particle-float {
          0% { transform: translateY(100vh) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
        @keyframes animate-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: animate-gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
