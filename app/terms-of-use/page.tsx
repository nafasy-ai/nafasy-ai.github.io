"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function TermsOfUse() {
  const [language, setLanguage] = useState<"english" | "arabic">("english");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isArabic = language === "arabic";

  useEffect(() => {
    // Check localStorage for language preference
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as "english" | "arabic" | null;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      } else {
        // Check URL params
        const params = new URLSearchParams(window.location.search);
        const langParam = params.get("lang");
        if (langParam === "arabic" || langParam === "english") {
          setLanguage(langParam);
        }
      }
    }
  }, []);

  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className={`min-h-screen relative overflow-hidden ${isArabic ? "rtl" : "ltr text-left"}`} dir={isArabic ? "rtl" : "ltr"}>
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
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </div>
              <h1 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-3 ${isArabic ? "text-right" : "text-center"}`}>
                {isArabic ? "شروط الاستخدام" : "Terms of Use"}
              </h1>
              <p className="text-gray-500 text-sm mb-6">
                {isArabic ? "آخر تحديث: مارس 2025 | نفَسي.أي آي المحدودة" : "Last Updated: March 2025 | Nafasy.AI Limited"}
              </p>
              <div className="flex flex-wrap gap-2 justify-center">
                <Link href="/privacy-notice" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                  {isArabic ? "إشعار الخصوصية" : "Privacy Notice"}
                </Link>
                <Link href="/cookie-policy" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                  {isArabic ? "سياسة ملفات التعريف" : "Cookie Policy"}
                </Link>
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                  {isArabic ? "شروط الاستخدام" : "Terms of Use"}
                </span>
              </div>
            </div>

            {/* Intro paragraph */}
            <div className={`${isArabic ? "border-r-4 pr-5 rounded-r-xl" : "border-l-4 pl-5 rounded-l-xl"} border-blue-400 bg-blue-50/60 py-4 mb-10`}>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                {isArabic
                  ? "مرحباً بك في نفَسي.أي آي. تحكم شروط الاستخدام هذه (\"الشروط\") وصولك واستخدامك لموقع الويب الموجود على الرابط "
                  : 'Welcome to Nafasy.AI. These Terms of Use ("Terms") govern your access to and use of the website located at '}
                <a href="https://nafasy.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300">
                  https://nafasy.ai/
                </a>
                {isArabic
                  ? " (الـ\"موقع\")، والذي تديره شركة نفَسي.أي آي المحدودة (\"نفَسي.أي آي\"، \"نحن\"، أو \"نا\")."
                  : ' (the "Website"), operated by Nafasy.AI Limited ("Nafasy.AI", "we", "us", or "our").'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "1. الموافقة على الشروط" : "1. Agreement to Terms"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "من خلال الوصول إلى موقعنا أو استخدامه، فإنك توافق على الالتزام بهذه الشروط. إذا لم توافق على هذه الشروط، فلا يجوز لك الوصول إلى الموقع أو استخدامه."
                      : "By accessing or using our Website, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Website."}
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                      <line x1="12" y1="9" x2="12" y2="13"/>
                      <line x1="12" y1="17" x2="12.01" y2="17"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "2. إخلاء مسؤولية طبية مهم" : "2. IMPORTANT MEDICAL DISCLAIMER"}
                  </h2>
                </div>
                <div className="bg-white rounded-2xl border-2 border-red-200 shadow-md overflow-hidden">
                  <div className={`bg-gradient-to-r from-red-500 to-orange-500 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                        <line x1="12" y1="9" x2="12" y2="13"/>
                        <line x1="12" y1="17" x2="12.01" y2="17"/>
                      </svg>
                    </div>
                    <p className="font-bold text-white text-base lg:text-lg">
                      {isArabic ? "إخلاء مسؤولية طبي مهم" : "Important Medical Disclaimer"}
                    </p>
                  </div>
                  <div className="px-6 py-5 bg-red-50/30 space-y-4">
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      {isArabic
                        ? "المحتوى والمعلومات والتقنية الموضحة على هذا الموقع، بما في ذلك أي بيانات تتعلق بدقة الكشف أو حالات الاستخدام المحتملة، هي لأغراض إعلامية فقط."
                        : "The content, information, and technology described on this Website, including any statements regarding detection accuracy or potential use cases, are for informational purposes only."}
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed text-justify">
                      {isArabic
                        ? "لا يوفر هذا الموقع المشورة الطبية أو التشخيص أو العلاج. المعلومات المقدمة ليست بديلاً عن المشورة الطبية المهنية من مقدم رعاية صحية مؤهل. لا تتجاهل أبداً المشورة الطبية المهنية أو تتأخر في البحث عنها بسبب شيء قرأته على هذا الموقع. إذا كنت تعتقد أنك قد تواجه حالة طبية طارئة، اتصل بطبيبك أو خدمات الطوارئ على الفور."
                        : "This Website does not provide medical advice, diagnosis, or treatment. The information provided is not a substitute for professional medical advice from a qualified healthcare provider. Never disregard professional medical advice or delay in seeking it because of something you have read on this Website. If you think you may have a medical emergency, call your doctor or emergency services immediately."}
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "3. حقوق الملكية الفكرية" : "3. Intellectual Property Rights"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5 space-y-4">
                  <div className={`${isArabic ? "border-r-4 pr-4" : "border-l-4 pl-4"} border-blue-200 py-1`}>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                      {isArabic
                        ? "الموقع ومحتواه بالكامل وميزاته ووظائفه—بما في ذلك على سبيل المثال لا الحصر جميع المعلومات والبرمجيات والنصوص والرسومات والشعارات والصور ومقاطع الصوت ونماذج الذكاء الاصطناعي والخوارزميات الأساسية—هي مملوكة لنفَسي.أي آي أو المرخصين لها أو مقدمي المواد الآخرين ومحمية بموجب قوانين حقوق النشر والعلامات التجارية وبراءات الاختراع والأسرار التجارية وغيرها من قوانين الملكية الفكرية أو الملكية."
                        : "The Website and its entire contents, features, and functionality—including but not limited to all information, software, text, graphics, logos, images, audio clips, and the underlying AI models and algorithms—are owned by Nafasy.AI, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws."}
                    </p>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "لا يجوز لك نسخ أو إعادة إنتاج أو توزيع أو تعديل أو إنشاء أعمال مشتقة أو عرض علني أو نقل أي من المواد على موقعنا دون موافقتنا الكتابية المسبقة."
                      : "You may not copy, reproduce, distribute, modify, create derivative works of, publicly display, or transmit any of the material on our Website without our prior written consent."}
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-rose-600 to-red-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "4. الأنشطة المحظورة" : "4. Prohibited Activities"}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "توافق على عدم استخدام الموقع لأي غرض غير قانوني أو بأي طريقة قد تلحق الضرر بالشركة أو سمعتها. يُمنع عليك تحديداً:"
                    : "You agree not to use the Website for any unlawful purpose or in any way that could harm the Company or its reputation. You are specifically restricted from:"}
                </p>
                <div className="bg-white rounded-2xl border border-rose-100 shadow-md overflow-hidden">
                  <div className={`bg-gradient-to-r from-rose-600 to-red-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/>
                      </svg>
                    </div>
                    <p className="font-bold text-white text-base lg:text-lg">
                      {isArabic ? "الأنشطة المحظورة" : "Restricted Activities"}
                    </p>
                  </div>
                  <div className="px-6 py-5">
                    <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-3 text-lg text-gray-600`}>
                      <li className="text-justify">
                        {isArabic
                          ? "استخدام الموقع بأي طريقة قد تكون ضارة للموقع."
                          : "Using the Website in any way that is or may be damaging to the Website."}
                      </li>
                      <li className="text-justify">
                        {isArabic
                          ? "الانخراط في أي تعدين بيانات أو حصاد بيانات أو كشط أو أي نشاط مماثل آخر فيما يتعلق بهذا الموقع."
                          : "Engaging in any data mining, data harvesting, scraping, or any other similar activity in relation to this Website."}
                      </li>
                      <li className="text-justify">
                        {isArabic
                          ? "محاولة فك التجميع أو الهندسة العكسية أو اكتشاف كود المصدر أو الخوارزميات الأساسية لتقنيتنا."
                          : "Attempting to decompile, reverse-engineer, or otherwise discover the source code or underlying algorithms of our technology."}
                      </li>
                      <li className="text-justify">
                        {isArabic
                          ? "استخدام الموقع لنقل أي مواد إعلانية أو ترويجية دون موافقتنا الكتابية المسبقة."
                          : "Using the Website to transmit any advertising or promotional material without our prior written consent."}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "5. مواقع الويب والمحتوى التابعة لأطراف ثالثة" : "5. Third-Party Websites and Content"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "قد يحتوي الموقع على روابط لمواقع ويب أخرى أو محتوى ينتمي أو ينشأ من أطراف ثالثة (مثل شركائنا الأكاديميين والاستراتيجيين). لم يتم التحقق من هذه الروابط التابعة لأطراف ثالثة أو مراقبتها أو التحقق من دقتها من قبلنا، ولسنا مسؤولين عن أي مواقع ويب تابعة لأطراف ثالثة يتم الوصول إليها من خلال الموقع أو أي محتوى منشور عليها."
                      : "The Website may contain links to other websites or content belonging to or originating from third parties (such as our academic and strategic partners). Such third-party links are not investigated, monitored, or checked for accuracy by us, and we are not responsible for any third-party websites accessed through the Website or any content posted on them."}
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1100">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-slate-600 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "6. المدة والإنهاء" : "6. Term and Termination"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "تبقى هذه الشروط سارية المفعول بالكامل أثناء استخدامك للموقع. نحتفظ بالحق، وفقاً لتقديرنا الخاص ودون إشعار، في حرمان أي شخص من الوصول إلى الموقع واستخدامه لأي سبب، بما في ذلك بسبب انتهاك أي تمثيل أو ضمان أو عهد وارد في هذه الشروط."
                      : "These Terms shall remain in full force and effect while you use the Website. We reserve the right, in our sole discretion and without notice, to deny access to and use of the Website to any person for any reason, including for breach of any representation, warranty, or covenant contained in these Terms."}
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1200">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-700 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "7. القانون الحاكم والولاية القضائية" : "7. Governing Law and Jurisdiction"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "تحكم هذه الشروط واستخدامك للموقع وتفسر وفقاً لقوانين مركز دبي المالي العالمي (DIFC). توافق بشكل لا رجوع فيه على أن محاكم DIFC سيكون لها الولاية القضائية الحصرية لتسوية أي نزاع أو مطالبة تنشأ عن أو فيما يتعلق بهذه الشروط أو في اتصال بها."
                      : "These Terms and your use of the Website are governed by and construed in accordance with the laws of the Dubai International Financial Centre (DIFC). You irrevocably agree that the Courts of the DIFC shall have exclusive jurisdiction to settle any dispute or claim arising out of or in connection with these Terms."}
                  </p>
                </div>
              </section>

              {/* Section 8 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1300">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "8. إخلاء مسؤولية الضمانات" : "8. Disclaimer of Warranties"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "يُقدم الموقع على أساس \"كما هو\" و\"كما هو متاح\". لا نقدم أي ضمانات، صريحة أو ضمنية، فيما يتعلق بالموقع وننكر بموجب هذا جميع الضمانات، بما في ذلك على سبيل المثال لا الحصر الضمانات الضمنية للملاءمة للتجارة والملاءمة لغرض معين وعدم الانتهاك. لا نضمن أن الموقع سيكون آمناً أو خالياً من الأخطاء أو الفيروسات."
                      : "The Website is provided on an \"as-is\" and \"as-available\" basis. We make no warranties, expressed or implied, regarding the Website and hereby disclaim all warranties, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Website will be secure or free from bugs or viruses."}
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1400">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                      <line x1="12" y1="8" x2="12" y2="12"/>
                      <line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "9. تحديد المسؤولية" : "9. Limitation of Liability"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "في أي حال من الأحوال لن تكون نفَسي.أي آي، أو مديروها، أو موظفوها، أو شركاؤها مسؤولين أمامك أو أي طرف ثالث عن أي أضرار مباشرة أو غير مباشرة أو تبعية أو مثالية أو عرضية أو عقابية، بما في ذلك الربح المفقود أو البيانات المفقودة، الناشئة عن استخدامك للموقع، حتى لو تم إخطارنا بإمكانية حدوث مثل هذه الأضرار."
                      : "In no event will Nafasy.AI, our directors, employees, or partners be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, or punitive damages, including lost profit or lost data, arising from your use of the Website, even if we have been advised of the possibility of such damages."}
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1500">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-700 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "10. اتصل بنا" : "10. Contact Us"}
                  </h2>
                </div>
                <div className="bg-gradient-to-br from-indigo-700 to-blue-700 rounded-2xl shadow-xl p-6 text-white">
                  <div className={`flex items-center gap-3 mb-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <p className="font-bold text-white text-base lg:text-lg">
                      {isArabic ? "اتصل بنا" : "Contact Us"}
                    </p>
                  </div>
                  <p className="text-indigo-200 text-base leading-relaxed mb-5">
                    {isArabic
                      ? "إذا كان لديك أي أسئلة حول هذه الشروط، يرجى الاتصال بنا على:"
                      : "If you have any questions about these Terms, please contact us at:"}
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <div className={`${isArabic ? "text-right" : "text-left"}`}>
                      <p className="font-bold text-white text-lg">Nafasy.AI Limited</p>
                      <p className="text-indigo-200 text-sm mb-1">The Gate, Level 14, P.O. Box 74777, Dubai, UAE</p>
                      <a
                        href="mailto:info@nafasy.ai"
                        className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 text-sm shadow-md mt-3"
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        info@nafasy.ai
                      </a>
                    </div>
                  </div>
                </div>
              </section>

            </div>

            {/* Footer */}
            <div className={`${isArabic ? "text-right" : "text-center"} mt-12 pt-8 border-t border-gray-200`}>
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
                <Link href="/cookie-policy" className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                  {isArabic ? "سياسة ملفات التعريف" : "Cookie Policy"}
                </Link>
              </div>
            </div>

          </div>
        </div>
      </main>

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
