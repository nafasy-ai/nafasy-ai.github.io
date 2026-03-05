"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ObfuscatedEmail from "@/components/ObfuscatedEmail";

export default function PrivacyNotice() {
  const [language, setLanguage] = useState<"english" | "arabic">("english");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isArabic = language === "arabic";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") as "english" | "arabic" | null;
      if (savedLanguage) {
        setLanguage(savedLanguage);
      } else {
        const params = new URLSearchParams(window.location.search);
        const langParam = params.get("lang");
        if (langParam === "arabic" || langParam === "english") {
          setLanguage(langParam);
        }
      }
    }
  }, []);

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
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h1 className={`text-4xl lg:text-5xl font-bold text-gray-900 mb-3 ${isArabic ? "text-right" : "text-center"}`}>
                {isArabic ? "إشعار الخصوصية" : "Privacy Notice"}
              </h1>
              <div className="flex flex-wrap gap-2 justify-center">
                <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white">
                  {isArabic ? "إشعار الخصوصية" : "Privacy Notice"}
                </span>
                <Link href="/cookie-policy" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                  {isArabic ? "سياسة ملفات التعريف" : "Cookie Policy"}
                </Link>
                <Link href="/terms-of-use" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors">
                  {isArabic ? "شروط الاستخدام" : "Terms of Use"}
                </Link>
              </div>
            </div>

            {/* Intro */}
            <div className={`${isArabic ? "border-r-4 pr-5 rounded-r-xl" : "border-l-4 pl-5 rounded-l-xl"} border-blue-400 bg-blue-50/60 py-4 mb-10`}>
              <p className="text-lg text-gray-600 leading-relaxed text-justify">
                {isArabic
                  ? 'الخصوصية أمر أساسي لبعثتنا في شركة نفَسي.أي آي المحدودة ("نفَسي.أي آي"). يشرح هذا الإشعار ما هي بياناتك الشخصية التي نجمعها، ولماذا نستخدمها، وكيف نحميها، وما هي الحقوق التي تمتلكها فيما يتعلق ببياناتك عند استخدام خدماتنا أو زيارة موقعنا الإلكتروني.'
                  : 'Your privacy is fundamental to our mission at Nafasy.AI Limited ("Nafasy.AI"). This Notice explains what Personal Data we collect, why we use it, how we protect it, and what rights you have in relation to your data when you use our services, participate in our clinical studies, or visit our website.'}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* Section 1 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "1. مقدمة" : "1. Introduction"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5 space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? 'نحن شركة تقنية صحية مقرها في مركز دبي المالي العالمي (DIFC) في مهمة لإنشاء المعيار العالمي للذكاء التنفسي المتاح. نعالج بياناتك بموجب قانون حماية بيانات DIFC ولائحة رقم 10 الخاصة به.'
                      : "We are a health-technology company based in the Dubai International Financial Centre (DIFC) on a mission to create the global standard for accessible respiratory intelligence. We process your data under the DIFC Data Protection Law and its Regulation 10."}
                  </p>
                </div>
              </section>

              {/* Section 2 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "2. ما هي بياناتك الشخصية التي نجمعها" : "2. What Personal Data We Collect"}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-5 text-justify">
                  {isArabic ? "نجمع البيانات بعدة طرق مختلفة:" : "We collect data in a few different ways:"}
                </p>

                {/* a) Health data card */}
                <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg mb-5">
                  <div className={`bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                      </svg>
                    </div>
                    <p className="font-bold text-white text-base lg:text-lg">
                      {isArabic ? "أ) المعلومات التي تقدمها مباشرة لنا" : "a) Information You Provide Directly to Us"}
                    </p>
                  </div>
                  <div className="px-6 py-5 space-y-4">
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                      {isArabic
                        ? "عندما تشارك في دراساتنا السريرية، مثل التجربة التجريبية مع Dubai Health، نجمع البيانات بموجب موافقتك الصريحة، وتشمل:"
                        : "When you participate in our clinical studies, such as the pilot with Dubai Health, we collect data under your explicit consent. This includes:"}
                    </p>
                    <div className={`${isArabic ? "border-r-4 pr-4" : "border-l-4 pl-4"} border-blue-200 py-1`}>
                      <p className="font-semibold text-gray-800 mb-2">{isArabic ? "فئات خاصة من البيانات الشخصية (بيانات صحية):" : "Special Categories of Personal Data (Health Data):"}</p>
                      <ul className={`list-disc ${isArabic ? "mr-6" : "ml-6"} space-y-1 text-lg text-gray-600`}>
                        <li>{isArabic ? "تسجيلات صوتية لسعالك وأصوات تنفسك." : "Audio recordings of your cough and breathing sounds."}</li>
                        <li>{isArabic ? "معلومات حول أعراضك التنفسية وحالة التدخين والحالات الطبية ذات الصلة." : "Information about your respiratory symptoms, smoking status, and other relevant medical conditions (e.g., asthma)."}</li>
                        <li>{isArabic ? "نتائج اختبار PCR لكوفيد-19 أو الإنفلونزا أو RSV." : "Related diagnostic information, such as your PCR test results for COVID-19, flu, or RSV."}</li>
                      </ul>
                    </div>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "بيانات شخصية أخرى: " : "Other Personal Data: "}</span>
                      {isArabic
                        ? "معلومات ديموغرافية مثل عمرك وجنسك وإثنيتك لضمان أن ذكاءنا الاصطناعي عادل وفعال للجميع."
                        : "Demographic information such as your age, gender, and ethnicity to ensure our AI is fair and effective for everyone."}
                    </p>
                  </div>
                </div>

                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5 space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    <span className="font-semibold text-gray-800">{isArabic ? "ب) المعلومات التي نجمعها تلقائيًا: " : "b) Information We Collect Automatically: "}</span>
                    {isArabic
                      ? "عندما تزور موقعنا الإلكتروني، قد نجمع تلقائيًا معلومات تقنية مثل عنوان IP ونوع المتصفح ومعلومات الجهاز."
                      : "When you visit our website or use our applications, we may automatically collect technical information, such as your IP address, browser type, and device information."}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    <span className="font-semibold text-gray-800">{isArabic ? "ج) المعلومات من شركائنا: " : "c) Information from Our Partners: "}</span>
                    {isArabic
                      ? "قد نتلقى نتائج سريرية غير محددة الهوية من شركائنا، مثل Dubai Health، نربطها بالبيانات التي قدمتها للمساعدة في التحقق من صحة ذكاءنا الاصطناعي."
                      : "We may receive de-identified clinical results from our partners, such as Dubai Health, which we link to the data you provided to help validate our AI."}
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "3. كيف نستخدم بياناتك الشخصية" : "3. How We Use Your Personal Data"}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "الغرض الأساسي منا لمعالجة بياناتك هو تحسين الصحة العالمية. نستخدم بياناتك لـ:"
                    : "Our primary purpose for processing your data is to improve global health. We use your data to:"}
                </p>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-3 text-lg text-gray-600`}>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "تطوير وتدريب ذكاءنا الاصطناعي: " : "Develop and Train our AI: "}</span>
                      {isArabic
                        ? "بياناتك الصحية المجهولة الهوية ضرورية لتعليم والتحقق من وتحسين خوارزميات الذكاء الاصطناعي لاكتشاف علامات أمراض الجهاز التنفسي."
                        : "Your anonymized health data is essential for teaching, validating, and improving our AI algorithms to accurately detect signs of respiratory disease."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "إجراء البحوث العلمية: " : "Conduct Scientific Research: "}</span>
                      {isArabic
                        ? "لنشر النتائج في المجلات العلمية والإسهام في الفهم العالمي للصحة التنفسية."
                        : "To publish findings in scientific journals and contribute to the global understanding of respiratory health."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "توفير وتحسين خدماتنا: " : "Provide and Improve Our Services: "}</span>
                      {isArabic
                        ? "لتشغيل موقعنا الإلكتروني وتطوير منتجات مستقبلية لدعم القرارات السريرية ومراقبة الصحة العامة."
                        : "To operate our website and develop future commercial products for clinical decision support, public health surveillance, and chronic disease management."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "الامتثال للالتزامات القانونية: " : "Comply with Legal Obligations: "}</span>
                      {isArabic
                        ? "للوفاء بمتطلباتنا التنظيمية في DIFC والولايات القضائية الأخرى."
                        : "To meet our regulatory requirements in the DIFC and other jurisdictions."}
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "4. الأساس القانوني لمعالجة البيانات" : "4. Our Lawful Basis for Processing"}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "بموجب قانون حماية بيانات DIFC، نعتمد على الأسس القانونية التالية:"
                    : "Under the DIFC Data Protection Law, we rely on the following lawful bases:"}
                </p>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-3 text-lg text-gray-600`}>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "الموافقة الصريحة: " : "Explicit Consent: "}</span>
                      {isArabic
                        ? "سنطلب دائمًا موافقتك الصريحة قبل جمع أي فئات خاصة من البيانات الشخصية (بياناتك الصحية) لأغراض البحث والتطوير."
                        : "We will always ask for your explicit consent before collecting any Special Categories of Personal Data (your health data) for our research and development purposes."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "المصلحة المشروعة: " : "Legitimate Interest: "}</span>
                      {isArabic
                        ? "قد نعالج بيانات أخرى حيث أنه في مصلحتنا المشروعة القيام بذلك، على سبيل المثال، للحفاظ على أمان موقعنا الإلكتروني أو التواصل مع شركاء الأعمال."
                        : "We may process other data where it is in our legitimate interest to do so, for example, to maintain the security of our website or to communicate with our business partners."}
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
                      <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "5. كيف نشارك بياناتك الشخصية" : "5. How We Share Your Personal Data"}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "لا نبيع معلوماتك الشخصية التي تحدد هويتك. قد نشارك بياناتك في الحالات التالية:"
                    : "We do not sell your personally identifiable information. We may share your data in the following circumstances:"}
                </p>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-3 text-lg text-gray-600`}>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "بموافقتك: " : "With Your Consent: "}</span>
                      {isArabic ? "سنشارك بياناتك إذا أعطيتنا الإذن للقيام بذلك." : "We will share your data if you give us permission to do so."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "للبحث (البيانات المجهولة الهوية): " : "For Research (Anonymized Data): "}</span>
                      {isArabic
                        ? "قد نشارك البيانات المجهولة أو المجمعة مع شركاء أكاديميين وبحثيين وتجاريين موثوقين حول العالم. هذه البيانات لا تحدد هويتك شخصيًا."
                        : "We may share anonymized or aggregated data with trusted academic, research, and commercial partners around the world to accelerate respiratory health research. This data does not personally identify you."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "مع مقدمي الخدمات لدينا: " : "With Our Service Providers: "}</span>
                      {isArabic
                        ? "نستخدم مقدمي خدمات موثوقين (مثل AWS للاستضافة السحابية الآمنة) ملتزمين بعقود لحماية بياناتك."
                        : "We use trusted third-party service providers (e.g., AWS for secure cloud hosting) contractually bound to protect your data."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "مع موظفينا: " : "With Our Personnel: "}</span>
                      {isArabic
                        ? "الوصول مقيد بشدة بموظفي نفَسي.أي آي المصرح لهم والمتدربين في حماية البيانات."
                        : "Access to data is strictly limited to authorized Nafasy.AI employees, contractors, and interns bound by strict confidentiality obligations and trained in data protection."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold text-gray-800">{isArabic ? "لأسباب قانونية: " : "For Legal Reasons: "}</span>
                      {isArabic
                        ? "قد نكون مطالبين بمشاركة البيانات مع السلطات التنظيمية، مثل DIFC، إذا طلب القانون ذلك."
                        : "We may be required to share data with regulatory authorities, like the DIFC, if required by law."}
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-slate-600 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "6. النقل الدولي للبيانات" : "6. International Data Transfers"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5 space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "تعمل نفَسي.أي آي عالميًا، مما يعني أننا قد ننقل بياناتك المجهولة الهوية خارج DIFC إلى شركائنا في البحث والفرق التقنية في دول أخرى، بما في ذلك الولايات المتحدة واليونان واليابان."
                      : "Nafasy.AI operates globally, which means we may transfer your anonymized data outside of the DIFC to our research partners and technical teams in other countries, including the United States, Greece, and Japan."}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "نضمن أن جميع عمليات النقل قانونية وأن بياناتك تظل محمية. للتحويلات إلى دول لا تتمتع بمستوى كافٍ من حماية البيانات، نستخدم بنود العقد القياسية (SCCs)."
                      : "We ensure all such transfers are lawful and that your data remains protected. For transfers to countries without an adequate level of data protection as determined by the DIFC, we use legally-approved safeguards, such as Standard Contractual Clauses (SCCs)."}
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-700 to-indigo-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "7. أمان البيانات والاحتفاظ بها" : "7. Data Security and Retention"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5 space-y-4">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "نأخذ أمان بياناتك على محمل الجد. نستخدم التشفير وضوابط الوصول الصارمة لحماية بياناتك من الوصول غير المصرح به أو الخسارة."
                      : "We take the security of your data very seriously. We use a range of technical and organizational measures, including encryption and strict access controls, to protect your data from unauthorized access or loss."}
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "نحتفظ ببياناتك الشخصية فقط طالما كان ذلك ضروريًا. قد يتم الاحتفاظ ببيانات صحية مجهولة الهوية لفترات أطول بما يتماشى مع المعايير التنظيمية والأخلاقية."
                      : "We retain your Personal Data only for as long as necessary. Anonymized health data used for scientific research may be retained for longer periods in line with regulatory and ethical standards."}
                  </p>
                </div>
              </section>

              {/* Section 8 — AI Transparency (DIFC Reg 10) */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1100">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                      <path d="M7 8h3l2 4 2-4h3"/>
                    </svg>
                  </div>
                  <div className={`flex flex-wrap items-center gap-2 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                      {isArabic ? "8. الشفافية بشأن أنظمة الذكاء الاصطناعي والأنظمة المستقلة" : "8. Transparency Regarding AI and Autonomous Systems"}
                    </h2>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-600 text-white shadow-sm shrink-0">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                      DIFC Reg 10
                    </span>
                  </div>
                </div>

                <div className={`${isArabic ? "border-r-4 pr-5 rounded-r-xl" : "border-l-4 pl-5 rounded-l-xl"} border-blue-400 bg-blue-50/60 py-4 mb-6`}>
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "في نفَسي.أي آي، نؤمن بحقك في فهم كيفية استخدام الذكاء الاصطناعي في عملنا. يشرح هذا القسم ممارساتنا المتعلقة بالذكاء الاصطناعي بلغة واضحة، بما يتوافق مع لائحة حماية بيانات DIFC رقم 10."
                      : "At Nafasy.AI, we believe you have the right to understand how artificial intelligence is used in our work. This section explains our AI practices in plain language, in alignment with DIFC Data Protection Regulation 10."}
                  </p>
                </div>

                <div className="space-y-5">

                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl border border-blue-100 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    <div className={`bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                        </svg>
                      </div>
                      <p className="font-bold text-white text-base lg:text-lg">{isArabic ? "ما يفعله ذكاءنا الاصطناعي" : "What Our AI Does"}</p>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        {isArabic
                          ? "تستخدم تقنيتنا الأساسية الذكاء الاصطناعي لتحليل الأصوات التنفسية — وتحديدًا التسجيلات الصوتية لسعالك وتنفسك. من خلال تحديد الأنماط الصوتية الدقيقة، يهدف نموذج الذكاء الاصطناعي لدينا إلى اكتشاف المؤشرات الحيوية المرتبطة بالحالات التنفسية مثل كوفيد-19 والإنفلونزا والـ RSV."
                          : "Our core technology uses AI to analyze respiratory sounds — specifically, audio recordings of your cough and breathing. By identifying subtle acoustic patterns within these sounds, our AI model is designed to detect biomarkers associated with respiratory conditions such as COVID-19, influenza, and RSV."}
                      </p>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl border border-indigo-100 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    <div className={`bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
                          <circle cx="8" cy="6" r="2" fill="white" stroke="none"/>
                          <circle cx="16" cy="12" r="2" fill="white" stroke="none"/>
                          <circle cx="11" cy="18" r="2" fill="white" stroke="none"/>
                        </svg>
                      </div>
                      <p className="font-bold text-white text-base lg:text-lg">{isArabic ? "الأغراض والقيود المحددة من قِبل الإنسان" : "Human-Defined Purposes and Constraints"}</p>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        {isArabic
                          ? "لا يعمل نظام الذكاء الاصطناعي لدينا بشكل مستقل ولا يتخذ قرارات ذاتية. يعمل بصرامة ضمن الأغراض والقيود التشغيلية التي يحددها فريقنا البحثي والسريري. دور الذكاء الاصطناعي هو إجراء التحليل الصوتي وتوليد درجة احتمالية؛ ولا يضع تشخيصات سريرية. يتم تفسير جميع مخرجات الذكاء الاصطناعي والتصرف بناءً عليها حصريًا من قِبل متخصصين مؤهلين."
                          : "Our AI system does not operate autonomously or make independent decisions. It functions strictly within purposes and operational constraints defined by our human research and clinical teams. The AI's role is to perform acoustic analysis and generate a probability score; it does not make clinical diagnoses. All AI outputs are interpreted and acted upon exclusively by qualified professionals."}
                      </p>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl border border-cyan-100 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    <div className={`bg-gradient-to-r from-cyan-600 to-teal-600 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                        </svg>
                      </div>
                      <p className="font-bold text-white text-base lg:text-lg">{isArabic ? "الرقابة البشرية في الحلقة" : "Human-in-the-Loop Oversight"}</p>
                    </div>
                    <div className="px-6 py-5">
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        {isArabic
                          ? "نحافظ على رقابة بشرية صارمة على جميع عمليات الذكاء الاصطناعي. يتم التحقق من النتائج التي يولدها الذكاء الاصطناعي بشكل منهجي مقابل المعايير الذهبية السريرية — وتحديدًا نتائج اختبارات PCR المؤكدة مختبريًا. هذا الإطار البشري الرقابي أساسي لمنهجية بحثنا والتزامنا بسلامة المرضى."
                          : "We maintain rigorous human oversight of all our AI processes. AI-generated findings are systematically validated against clinical gold standards — specifically, laboratory-confirmed PCR test results — to ensure accuracy and reliability. This human-in-the-loop framework is fundamental to our research methodology and our commitment to patient safety."}
                      </p>
                    </div>
                  </div>

                  {/* Card 4 — Right to Erasure */}
                  <div className="bg-white rounded-2xl border-2 border-amber-200 shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
                    <div className={`bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-4 flex items-center gap-3 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-9 h-9 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                      </div>
                      <p className="font-bold text-white text-base lg:text-lg">{isArabic ? "حقك في المحو والقيود التقنية لنماذج الذكاء الاصطناعي" : "Your Right to Erasure & AI Model Technical Limitations"}</p>
                    </div>
                    <div className="px-6 py-5 bg-amber-50/30">
                      <p className="text-lg text-gray-600 leading-relaxed text-justify">
                        {isArabic
                          ? "يحق لك طلب محو بياناتك الشخصية. إذا مارست هذا الحق، فسنحذف بياناتك الخام القابلة للتحديد فورًا. ومع ذلك، بمجرد إخضاع بياناتك للتجهيل الكامل واستخدامها في تدريب نموذج الذكاء الاصطناعي، يصبح من المستحيل تقنيًا عزل تأثيرها من الأوزان الرياضية — وهذه خاصية متأصلة في نماذج التعلم الآلي. أي بيانات في هذه المرحلة لم تعد بيانات شخصية بموجب القانون — لا يمكن استخدامها للتعريف بك. وبالتالي، يتم احترام حقك في المحو بالكامل فيما يتعلق بجميع البيانات القابلة للتعريف التي نحتفظ بها."
                          : "You have the right to request the erasure of your Personal Data. If you exercise this right, we will promptly delete your identifiable raw data — including your original audio recording — from our systems. However, once your data has been fully anonymized and used to train an AI model's learned parameters (its mathematical weights), it is technically impossible to isolate and remove its influence from those weights — this is an inherent characteristic of how machine learning models are built. Any data at this stage is no longer Personal Data under law — it cannot be used to identify you. Your right to erasure is therefore fully honoured with respect to all identifiable data we hold."}
                      </p>
                    </div>
                  </div>

                  {/* Card 5 — DPO AI Contact */}
                  <div className="bg-gradient-to-br from-indigo-700 to-blue-700 rounded-2xl shadow-xl p-6 text-white">
                    <div className={`flex items-center gap-3 mb-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                          <polyline points="22,6 12,13 2,6"/>
                        </svg>
                      </div>
                      <p className="font-bold text-white text-base lg:text-lg">{isArabic ? "تواصل مع مسؤول حماية البيانات للاستفسارات المتعلقة بالذكاء الاصطناعي" : "Contact Our DPO for AI-Related Queries"}</p>
                    </div>
                    <p className="text-indigo-200 text-base leading-relaxed mb-5 text-justify">
                      {isArabic
                        ? "إذا كان لديك أي أسئلة حول ممارساتنا المتعلقة بالذكاء الاصطناعي أو ترغب في ممارسة حقوق حماية البيانات الخاصة بك، يرجى التواصل مع مسؤول حماية البيانات لدينا مباشرة."
                        : "If you have any questions about our AI practices or wish to exercise your data protection rights in relation to AI processing, please contact our Data Protection Officer directly."}
                    </p>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                      <div className={isArabic ? "text-right" : ""}>
                        <p className="font-bold text-white text-lg">Amil Khanzada</p>
                        <p className="text-indigo-200 text-sm mb-4">{isArabic ? "مسؤول حماية البيانات" : "Data Protection Officer"}</p>
                        <ObfuscatedEmail
                          user="dpo"
                          domain="nafasy.ai"
                          iconSize={15}
                          className={`inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 text-sm shadow-md ${isArabic ? "flex-row-reverse" : ""}`}
                        />
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              {/* Section 9 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1200">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-cyan-600 to-teal-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "9. حقوقك في حماية البيانات" : "9. Your Data Protection Rights"}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "بموجب قانون حماية بيانات DIFC، لديك حقوق مهمة، بما في ذلك:"
                    : "Under the DIFC Data Protection Law, you have important rights, including:"}
                </p>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-2 text-lg text-gray-600`}>
                    <li className="text-justify">{isArabic ? "الحق في الوصول إلى نسخة من بياناتك الشخصية." : "The right to access a copy of your Personal Data."}</li>
                    <li className="text-justify">{isArabic ? "الحق في تصحيح بياناتك الشخصية غير الدقيقة." : "The right to rectify inaccurate Personal Data."}</li>
                    <li className="text-justify">{isArabic ? "الحق في محو بياناتك الشخصية." : "The right to erase your Personal Data."}</li>
                    <li className="text-justify">{isArabic ? "الحق في تقييد كيفية معالجتنا لبياناتك الشخصية." : "The right to restrict how we process your Personal Data."}</li>
                    <li className="text-justify">{isArabic ? "الحق في سحب الموافقة في أي وقت، دون التأثير على قانونية المعالجة السابقة." : "The right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal."}</li>
                  </ul>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mt-4 text-justify">
                  {isArabic
                    ? "لممارسة أي من هذه الحقوق، يرجى الاتصال بمسؤول حماية البيانات لدينا."
                    : "To exercise any of these rights, please contact our Data Protection Officer."}
                </p>
              </section>

              {/* Section 10 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1200">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
                      <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "10. سياستنا تجاه الأطفال" : "10. Our Policy Towards Children"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "خدماتنا والدراسات السريرية ليست موجهة للأفراد الذين تقل أعمارهم عن 18 عامًا. لا نجمع بيانات شخصية من الأطفال عن علم."
                      : "Our services and clinical studies are not directed to individuals under the age of 18. We do not knowingly collect Personal Data from children."}
                  </p>
                </div>
              </section>

              {/* Section 11 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1300">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-slate-600 to-blue-600 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21.5 2v6h-6M2.5 22v-6h6"/>
                      <path d="M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "11. تغييرات على إشعار الخصوصية هذا" : "11. Changes to This Privacy Notice"}
                  </h2>
                </div>
                <div className="bg-white/60 rounded-xl border border-gray-100 shadow-sm px-6 py-5">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    {isArabic
                      ? "قد نقوم بتحديث إشعار الخصوصية هذا من وقت لآخر. سننشر أي تغييرات على موقعنا الإلكتروني، وحيثما كان ذلك مناسبًا، سنخطرك بالبريد الإلكتروني."
                      : "We may update this Privacy Notice from time to time. We will post any changes on our website and, where appropriate, notify you by email."}
                  </p>
                </div>
              </section>

              {/* Section 12 */}
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1400">
                <div className={`flex items-center gap-3 mt-8 mb-5 ${isArabic ? "flex-row-reverse" : ""}`}>
                  <div className="w-9 h-9 bg-gradient-to-br from-indigo-700 to-blue-700 rounded-xl flex items-center justify-center shrink-0 shadow-md">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                      <polyline points="22,6 12,13 2,6"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "12. اتصل بنا ومسؤول حماية البيانات لدينا (DPO)" : "12. Contact Us & Our Data Protection Officer (DPO)"}
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed mb-5 text-justify">
                  {isArabic
                    ? "إذا كان لديك أي أسئلة حول إشعار الخصوصية هذا أو ترغب في ممارسة حقوقك في حماية البيانات، يرجى الاتصال بمسؤول حماية البيانات لدينا (DPO):"
                    : "If you have any questions about this Privacy Notice or wish to exercise your data protection rights, please contact our Data Protection Officer (DPO):"}
                </p>
                <div className="bg-gradient-to-br from-indigo-700 to-blue-700 rounded-2xl shadow-xl p-6 text-white">
                  <div className={`flex items-center gap-3 mb-4 ${isArabic ? "flex-row-reverse" : ""}`}>
                    <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center shrink-0">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </div>
                    <p className="font-bold text-white text-base lg:text-lg">{isArabic ? "اتصل بمسؤول حماية البيانات لدينا" : "Contact Our Data Protection Officer"}</p>
                  </div>
                  <p className="text-indigo-200 text-base leading-relaxed mb-5">
                    {isArabic
                      ? "يسعدنا الرد على أي استفسارات تتعلق بخصوصيتك:"
                      : "We are happy to answer any privacy-related queries:"}
                  </p>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5">
                    <div className={isArabic ? "text-right" : ""}>
                      <p className="font-bold text-white text-lg">Amil Khanzada</p>
                      <p className="text-indigo-200 text-sm mb-1">{isArabic ? "مسؤول حماية البيانات" : "Data Protection Officer"}</p>
                      <p className="text-indigo-200 text-sm mb-4">Nafasy.AI Limited, The Gate, Level 14, P.O. Box 74777, Dubai, UAE</p>
                      <ObfuscatedEmail
                        user="dpo"
                        domain="nafasy.ai"
                        iconSize={14}
                        className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 font-semibold px-5 py-2.5 rounded-full transition-colors duration-200 text-sm shadow-md mt-1"
                      />
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
                <Link href="/cookie-policy" className="text-sm text-blue-600 hover:text-blue-700 hover:underline transition-colors">
                  {isArabic ? "سياسة ملفات التعريف" : "Cookie Policy"}
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
