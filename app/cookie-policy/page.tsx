"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import CookieConsent from "@/components/CookieConsent"; // Update import path

export default function CookiePolicy() {
  const [language, setLanguage] = useState<"english" | "arabic">("english");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isArabic = language === "arabic";

  // Language detection useEffect
  useEffect(() => {
    if (typeof window !== "undefined") {
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
        }
      }
    }
  }, []);

  // Save language preference when it changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("language", language);
      // Update URL with language parameter
      const url = new URL(window.location.href);
      url.searchParams.set("lang", language);
      window.history.replaceState({}, "", url.toString());
    }
  }, [language]);

  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "arabic" : "english"));
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isArabic ? "rtl" : "ltr"}`} dir={isArabic ? "rtl" : "ltr"}>
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50" />

        {/* Animated gradient orbs */}
        <div className="absolute inset-0">
          <div
            className="absolute w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
            style={{
              left: `${mousePosition.x * 0.02}px`,
              top: `${mousePosition.y * 0.02}px`,
              animation: "float 6s ease-in-out infinite",
            }}
          />

          <div
            className="absolute w-80 h-80 bg-gradient-to-r from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl animate-pulse"
            style={{
              right: `${mousePosition.x * 0.01}px`,
              bottom: `${mousePosition.y * 0.01}px`,
              animation: "float 8s ease-in-out infinite reverse",
            }}
          />
          <div
            className="absolute w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-2xl"
            style={{
              left: "20%",
              top: "30%",
              animation: "float 10s ease-in-out infinite",
            }}
          />
        </div>

        {/* Floating particles */}
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

        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Content */}
      <main className="relative py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-md shadow-xl rounded-2xl p-8 lg:p-12 animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-200 ${isArabic ? "text-right" : "text-center"}`}>
              {isArabic ? "سياسة ملفات التعريف" : "Cookie Policy"}
            </h1>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                {isArabic
                  ? "تشرح سياسة ملفات التعريف هذه كيفية استخدام شركة نفَسي.أي آي المحدودة (\"نفَسي.أي آي\"، \"نحن\"، \"نا\"، أو \"لنا\") لملفات تعريف الارتباط والتقنيات المشابهة على موقعنا الإلكتروني، "
                  : 'This Cookie Policy explains how Nafasy.AI Limited ("Nafasy.AI", "we", "us", or "our") uses cookies and similar technologies on our website, '}
                <a
                  href="https://nafasy.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300"
                >
                  https://nafasy.ai/
                </a>
                {isArabic
                  ? " (الـ\"موقع\")."
                  : ' (the "Website").'}
              </p>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "1. ما هي ملفات التعريف؟" : "1. What Are Cookies?"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "ملفات تعريف الارتباط هي ملفات نصية صغيرة يتم وضعها على جهاز الكمبيوتر أو الجهاز المحمول عند زيارة موقع ويب. يتم استخدامها على نطاق واسع لجعل مواقع الويب تعمل، أو تعمل بكفاءة أكبر، وكذلك لتقديم معلومات لأصحاب الموقع."
                    : "Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "2. كيف نستخدم ملفات التعريف" : "2. How We Use Cookies"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "نستخدم ملفات تعريف الارتباط لفهم كيفية استخدام موقعنا، وتحسين تجربة المستخدم لديك، وضمان أمان موقعنا. ملفات تعريف الارتباط التي نستخدمها لا تجمع معلومات تعريف شخصية عنك."
                    : "We use cookies to understand how our Website is used, to improve your user experience, and to ensure the security of our site. The cookies we use do not collect personally identifiable information about you."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "3. أنواع ملفات التعريف التي نستخدمها" : "3. Types of Cookies We Use"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6 text-justify">
                  {isArabic
                    ? "نستخدم الأنواع التالية من ملفات تعريف الارتباط على موقعنا:"
                    : "We use the following types of cookies on our Website:"}
                </p>

                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${isArabic ? "text-right" : "text-left"}`}>
                      {isArabic ? "ملفات تعريف الارتباط الضرورية بشكل صارم:" : "Strictly Necessary Cookies:"}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-3 text-justify">
                      <span className="font-semibold">{isArabic ? "الغرض:" : "Purpose:"}</span>{" "}
                      {isArabic
                        ? "هذه الملفات ضرورية لتصفحك للموقع واستخدام ميزاته الأساسية. إنها ضرورية لأمان ووظائف موقعنا بشكل صحيح."
                        : "These cookies are essential for you to browse the Website and use its basic features. They are necessary for the security and proper functioning of our site."}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                      <span className="font-semibold">{isArabic ? "أمثلة:" : "Examples:"}</span>{" "}
                      {isArabic
                        ? "ملفات تعريف الارتباط التي تدير جلستك وتضمن أمان موقع الويب."
                        : "Cookies that manage your session and ensure website security."}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${isArabic ? "text-right" : "text-left"}`}>
                      {isArabic ? "ملفات تعريف الارتباط للأداء والتحليل:" : "Performance and Analytical Cookies:"}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-3 text-justify">
                      <span className="font-semibold">{isArabic ? "الغرض:" : "Purpose:"}</span>{" "}
                      {isArabic
                        ? "تجمع ملفات تعريف الارتباط هذه معلومات حول كيفية استخدام الزوار لموقعنا، مثل الصفحات التي يتم زيارتها في أغلب الأحيان وما إذا كانوا يتلقون رسائل خطأ. هذا يساعدنا على تحسين أداء موقعنا. جميع المعلومات التي تجمعها ملفات تعريف الارتباط هذه مجمعة وبالتالي مجهولة الهوية."
                        : "These cookies collect information about how visitors use our Website, such as which pages are visited most often and if they receive error messages. This helps us improve the performance of our Website. All information these cookies collect is aggregated and therefore anonymous."}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                      <span className="font-semibold">{isArabic ? "أمثلة:" : "Examples:"}</span>{" "}
                      {isArabic
                        ? "نستخدم Google Analytics لتحليل حركة مرور الموقع وسلوك المستخدم."
                        : "We use Google Analytics to analyze website traffic and user behavior."}
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md">
                    <h3 className={`text-xl font-bold text-gray-900 mb-3 ${isArabic ? "text-right" : "text-left"}`}>
                      {isArabic ? "ملفات تعريف الارتباط الوظيفية:" : "Functional Cookies:"}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed mb-3 text-justify">
                      <span className="font-semibold">{isArabic ? "الغرض:" : "Purpose:"}</span>{" "}
                      {isArabic
                        ? "تسمح ملفات تعريف الارتباط هذه للموقع بتذكر الخيارات التي تقوم بها (مثل تفضيل لغتك) لتوفير تجربة أكثر تخصيصًا."
                        : "These cookies allow the Website to remember choices you make (such as your language preference) to provide a more personalized experience."}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                      <span className="font-semibold">{isArabic ? "أمثلة:" : "Examples:"}</span>{" "}
                      {isArabic
                        ? "ملف تعريف ارتباط يتذكر لغتك المفضلة لعرض الموقع."
                        : "A cookie that remembers your preferred language for viewing the site."}
                    </p>
                  </div>
                </div>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "4. اختياراتك فيما يتعلق بملفات التعريف" : "4. Your Choices Regarding Cookies"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "لديك الحق في تقرير ما إذا كنت ستقبل ملفات تعريف الارتباط أو ترفضها. يمكنك ممارسة تفضيلات ملفات تعريف الارتباط باستخدام إعدادات متصفح الويب الخاص بك."
                    : "You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by using your web browser's settings."}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "تسمح معظم متصفحات الويب بالتحكم في ملفات تعريف الارتباط من خلال إعداداتها. يمكنك ضبط المتصفح الخاص بك لحظر ملفات تعريف الارتباط أو لتنبيهك عند إرسال ملفات تعريف الارتباط. يرجى ملاحظة أنه إذا حظرت جميع ملفات تعريف الارتباط (بما في ذلك ملفات تعريف الارتباط الضرورية بشكل صارم)، فقد لا تتمكن من الوصول إلى جميع أجزاء موقعنا أو أجزاء منه."
                    : "Most web browsers allow you to control cookies through their settings. You can set your browser to block cookies or to alert you when cookies are being sent. Please note that if you block all cookies (including strictly necessary cookies), you may not be able to access all or parts of our Website."}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "لمعرفة المزيد حول ملفات تعريف الارتباط، بما في ذلك كيفية رؤية ملفات تعريف الارتباط التي تم تعيينها وكيفية إدارتها وحذفها، قم بزيارة "
                    : "To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit "}
                  <a
                    href="https://www.aboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300"
                  >
                    www.aboutcookies.org
                  </a>
                  {isArabic ? " أو " : " or "}
                  <a
                    href="https://www.allaboutcookies.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300"
                  >
                    www.allaboutcookies.org
                  </a>
                  {isArabic ? "." : "."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "5. تغييرات على سياسة ملفات التعريف هذه" : "5. Changes to This Cookie Policy"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "قد نقوم بتحديث سياسة ملفات التعريف هذه من وقت لآخر. سنخطرك بأي تغييرات عن طريق نشر سياسة ملفات التعريف الجديدة على هذه الصفحة."
                    : "We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1100">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "6. اتصل بنا" : "6. Contact Us"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "إذا كان لديك أي أسئلة حول استخدامنا لملفات تعريف الارتباط، يرجى الاتصال بمسؤول حماية البيانات لدينا على:"
                    : "If you have any questions about our use of cookies, please contact our Data Protection Officer at:"}
                </p>
                <div className={`${isArabic ? "text-right" : "text-left"} bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md transition-all duration-300 hover:shadow-lg`}>
                  <p className="text-lg text-gray-600 mb-2">
                    <span className="font-semibold text-gray-900">{isArabic ? "البريد الإلكتروني:" : "Email:"}</span>{" "}
                    <a
                      href="mailto:dpo@nafasy.ai"
                      className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300"
                    >
                      dpo@nafasy.ai
                    </a>
                  </p>
                </div>
              </section>
            </div>

            <div className={`${isArabic ? "text-right" : "text-center"} mt-12 pt-8 border-t border-gray-200`}>
              <Link
                href={`/?lang=${language}`}
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                {isArabic ? "العودة إلى الصفحة الرئيسية" : "Return to Home"}
              </Link>
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

      {/* Add CookieConsent component with language prop */}
      <CookieConsent language={language} />
    </div>
  );
}
