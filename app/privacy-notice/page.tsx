"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function PrivacyNotice() {
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
              {isArabic ? "إشعار الخصوصية" : "Privacy Notice"}
        </h1>

            <div className="prose prose-lg max-w-none">
              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "1. مقدمة" : "1. Introduction"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "الخصوصية أمر أساسي لبعثتنا في شركة نفَسي.أي آي المحدودة (\"نفَسي.أي آي\"، \"نحن\"، \"نا\"، \"لنا\"). نحن شركة تقنية صحية مقرها في مركز دبي المالي العالمي (DIFC) في مهمة لإنشاء المعيار العالمي للذكاء التنفسي المتاح."
                    : 'Your privacy is fundamental to our mission at Nafasy.AI Limited ("Nafasy.AI", "we", "us", "our"). We are a health-technology company based in the Dubai International Financial Centre (DIFC) on a mission to create the global standard for accessible respiratory intelligence.'}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "يشرح إشعار الخصوصية هذا ما هي بياناتك الشخصية التي نجمعها، ولماذا نستخدمها، وكيف نحميها، وما هي الحقوق التي تمتلكها فيما يتعلق ببياناتك عند استخدام خدماتنا، أو المشاركة في دراساتنا السريرية، أو زيارة موقعنا الإلكتروني."
                    : "This Privacy Notice explains what Personal Data we collect, why we use it, how we protect it, and what rights you have in relation to your data when you use our services, participate in our clinical studies, or visit our website."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "2. ما هي بياناتك الشخصية التي نجمعها" : "2. What Personal Data We Collect"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "نجمع البيانات بعدة طرق مختلفة:"
                    : "We collect data in a few different ways:"}
                </p>

                <div className="space-y-4 mb-4">
                  <p className="text-lg text-gray-600 leading-relaxed text-justify">
                    <span className="font-semibold text-gray-900">{isArabic ? "أ) المعلومات التي تقدمها مباشرة لنا:" : "a) Information You Provide Directly to Us:"}</span>
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed mb-3 text-justify">
                    {isArabic
                      ? "عندما تشارك في دراساتنا السريرية، مثل التجربة التجريبية مع Dubai Health، نجمع البيانات بموجب موافقتك الصريحة. يتضمن ذلك:"
                      : "When you participate in our clinical studies, such as the pilot with Dubai Health, we collect data under your explicit consent. This includes:"}
                  </p>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md mb-4">
                    <p className="font-semibold text-gray-900 mb-2 text-lg">
                      {isArabic ? "فئات خاصة من البيانات الشخصية (بيانات صحية):" : "Special Categories of Personal Data (Health Data):"}
                    </p>
                    <ul className={`list-disc ${isArabic ? "mr-6" : "ml-6"} space-y-2 text-lg text-gray-600`}>
                      <li>{isArabic ? "تسجيلات صوتية لسعالك وأصوات تنفسك." : "Audio recordings of your cough and breathing sounds."}</li>
                      <li>{isArabic ? "معلومات حول أعراضك التنفسية وحالة التدخين والحالات الطبية الأخرى ذات الصلة (مثل الربو)." : "Information about your respiratory symptoms, smoking status, and other relevant medical conditions (e.g., asthma)."}</li>
                      <li>{isArabic ? "معلومات تشخيصية ذات صلة، مثل نتائج اختبار PCR لديك لفيروس كوفيد-19 أو الإنفلونزا أو RSV." : "Related diagnostic information, such as your PCR test results for COVID-19, flu, or RSV."}</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md mb-4">
                    <p className="font-semibold text-gray-900 mb-2 text-lg">
                      {isArabic ? "بيانات شخصية أخرى:" : "Other Personal Data:"}
                    </p>
                    <p className="text-lg text-gray-600 leading-relaxed text-justify">
                      {isArabic
                        ? "معلومات ديموغرافية مثل عمرك وجنسك وإثنيتك لضمان أن ذكاءنا الاصطناعي عادل وفعال للجميع."
                        : "Demographic information such as your age, gender, and ethnicity to ensure our AI is fair and effective for everyone."}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed mb-3 text-justify">
                  <span className="font-semibold text-gray-900">{isArabic ? "ب) المعلومات التي نجمعها تلقائيًا:" : "b) Information We Collect Automatically:"}</span>
                </p>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
          {isArabic
                    ? "عندما تزور موقعنا الإلكتروني أو تستخدم تطبيقاتنا، قد نجمع تلقائيًا معلومات تقنية، مثل عنوان IP الخاص بك ونوع المتصفح ومعلومات الجهاز."
                    : "When you visit our website or use our applications, we may automatically collect technical information, such as your IP address, browser type, and device information."}
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-3 text-justify">
                  <span className="font-semibold text-gray-900">{isArabic ? "ج) المعلومات من شركائنا:" : "c) Information from Our Partners:"}</span>
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "قد نتلقى نتائج سريرية غير محددة الهوية من شركائنا، مثل Dubai Health، والتي نربطها بالبيانات التي قدمتها للمساعدة في التحقق من صحة ذكاءنا الاصطناعي."
                    : "We may receive de-identified clinical results from our partners, such as Dubai Health, which we link to the data you provided to help validate our AI."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "3. كيف نستخدم بياناتك الشخصية" : "3. How We Use Your Personal Data"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "الغرض الأساسي منا لمعالجة بياناتك هو تحسين الصحة العالمية. نستخدم بياناتك لـ:"
                    : "Our primary purpose for processing your data is to improve global health. We use your data to:"}
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md mb-4">
                  <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-2 text-lg text-gray-600`}>
                    <li className="text-justify">
                      {isArabic
                        ? "تطوير وتدريب ذكاءنا الاصطناعي: بياناتك الصحية المجهولة الهوية ضرورية لتعليم والتحقق من وتحسين خوارزميات الذكاء الاصطناعي لدينا لاكتشاف علامات أمراض الجهاز التنفسي بدقة."
                        : "Develop and Train our AI: Your anonymized health data is essential for teaching, validating, and improving our AI algorithms to accurately detect signs of respiratory disease."}
                    </li>
                    <li className="text-justify">
                      {isArabic
                        ? "إجراء البحوث العلمية: لنشر النتائج في المجلات العلمية والإسهام في الفهم العالمي للصحة التنفسية."
                        : "Conduct Scientific Research: To publish findings in scientific journals and contribute to the global understanding of respiratory health."}
                    </li>
                    <li className="text-justify">
                      {isArabic
                        ? "توفير وتحسين خدماتنا: لتشغيل موقعنا الإلكتروني وتطبيقاتنا وتطوير المنتجات التجارية المستقبلية لدعم القرارات السريرية ومراقبة الصحة العامة وإدارة الأمراض المزمنة."
                        : "Provide and Improve Our Services: To operate our website and applications and develop future commercial products for clinical decision support, public health surveillance, and chronic disease management."}
                    </li>
                    <li className="text-justify">
                      {isArabic
                        ? "الامتثال للالتزامات القانونية: للوفاء بمتطلباتنا التنظيمية في DIFC والولايات القضائية الأخرى."
                        : "Comply with Legal Obligations: To meet our regulatory requirements in the DIFC and other jurisdictions."}
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "4. الأساس القانوني لمعالجة البيانات" : "4. Our Lawful Basis for Processing"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "بموجب قانون حماية بيانات DIFC، نعتمد على الأسس القانونية التالية:"
                    : "Under the DIFC Data Protection Law, we rely on the following lawful bases:"}
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md mb-4">
                  <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-2 text-lg text-gray-600`}>
                    <li className="text-justify">
                      <span className="font-semibold">{isArabic ? "الموافقة الصريحة:" : "Explicit Consent:"}</span>{" "}
                      {isArabic
                        ? "سنطلب دائمًا موافقتك الصريحة قبل جمع أي فئات خاصة من البيانات الشخصية (بياناتك الصحية) لأغراض البحث والتطوير لدينا."
                        : "We will always ask for your explicit consent before collecting any Special Categories of Personal Data (your health data) for our research and development purposes."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold">{isArabic ? "المصلحة المشروعة:" : "Legitimate Interest:"}</span>{" "}
                      {isArabic
                        ? "قد نعالج بيانات أخرى حيث أنه في مصلحتنا المشروعة القيام بذلك، على سبيل المثال، للحفاظ على أمان موقعنا الإلكتروني أو للتواصل مع شركاء أعمالنا."
                        : "We may process other data where it is in our legitimate interest to do so, for example, to maintain the security of our website or to communicate with our business partners."}
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "5. كيف نشارك بياناتك الشخصية" : "5. How We Share Your Personal Data"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "لا نبيع معلوماتك الشخصية التي تحدد هويتك. قد نشارك بياناتك في الحالات التالية:"
                    : "We do not sell your personally identifiable information. We may share your data in the following circumstances:"}
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md mb-4">
                  <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-2 text-lg text-gray-600`}>
                    <li className="text-justify">
                      <span className="font-semibold">{isArabic ? "بموافقتك:" : "With Your Consent:"}</span>{" "}
                      {isArabic
                        ? "سنشارك بياناتك إذا أعطيتنا الإذن للقيام بذلك."
                        : "We will share your data if you give us permission to do so."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold">{isArabic ? "للبحث (البيانات المجهولة الهوية):" : "For Research (Anonymized Data):"}</span>{" "}
                      {isArabic
                        ? "قد نشارك البيانات المجهولة الهوية أو المجمعة مع شركاء أكاديميين وبحثيين وتجاريين موثوقين حول العالم لتسريع أبحاث الصحة التنفسية. هذه البيانات لا تحدد هويتك شخصيًا."
                        : "We may share anonymized or aggregated data with trusted academic, research, and commercial partners around the world to accelerate respiratory health research. This data does not personally identify you."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold">{isArabic ? "مع مقدمي الخدمات لدينا:" : "With Our Service Providers:"}</span>{" "}
                      {isArabic
                        ? "نستخدم مقدمي خدمات تابعين لأطراف ثالثة موثوقين (مثل AWS للاستضافة السحابية الآمنة) للمساعدة في تشغيلنا. هم ملتزمون بعقود لحماية بياناتك واستخدامها فقط للخدمات التي يقدمونها لنا."
                        : "We use trusted third-party service providers (e.g., AWS for secure cloud hosting) to help us operate. They are contractually bound to protect your data and only use it for the services they provide to us."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold">{isArabic ? "مع موظفينا:" : "With Our Personnel:"}</span>{" "}
                      {isArabic
                        ? "الوصول إلى البيانات مقيد بشدة بموظفي وموظفي ومتدربي نفَسي.أي آي المصرح لهم والذين يلتزمون بضرورات سرية صارمة ومتدربون في حماية البيانات."
                        : "Access to data is strictly limited to authorized Nafasy.AI employees, contractors, and interns who are bound by strict confidentiality obligations and trained in data protection."}
                    </li>
                    <li className="text-justify">
                      <span className="font-semibold">{isArabic ? "لأسباب قانونية:" : "For Legal Reasons:"}</span>{" "}
                      {isArabic
                        ? "قد نكون مطالبين بمشاركة البيانات مع السلطات التنظيمية، مثل DIFC، إذا طلب القانون ذلك."
                        : "We may be required to share data with regulatory authorities, like the DIFC, if required by law."}
                    </li>
                  </ul>
                </div>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-900">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "6. النقل الدولي للبيانات" : "6. International Data Transfers"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "تعمل نفَسي.أي آي عالميًا، مما يعني أننا قد ننقل بياناتك المجهولة الهوية خارج DIFC إلى شركائنا في البحث والفرق التقنية في دول أخرى، بما في ذلك الولايات المتحدة واليونان واليابان."
                    : "Nafasy.AI operates globally, which means we may transfer your anonymized data outside of the DIFC to our research partners and technical teams in other countries, including the United States, Greece, and Japan."}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "نضمن أن جميع عمليات النقل هذه قانونية وأن بياناتك تظل محمية. بالنسبة للتحويلات إلى البلدان التي لا تتمتع بمستوى كافٍ من حماية البيانات كما يحددها DIFC (مثل الولايات المتحدة)، نستخدم ضمانات معتمدة قانونيًا، مثل بنود العقد القياسية (SCCs)."
                    : "We ensure all such transfers are lawful and that your data remains protected. For transfers to countries without an adequate level of data protection as determined by the DIFC (like the United States), we use legally-approved safeguards, such as Standard Contractual Clauses (SCCs)."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "7. أمان البيانات والاحتفاظ بها" : "7. Data Security and Retention"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "نأخذ أمان بياناتك على محمل الجد. نستخدم مجموعة من التدابير التقنية والتنظيمية، بما في ذلك التشفير وضوابط الوصول الصارمة، لحماية بياناتك من الوصول غير المصرح به أو الخسارة."
                    : "We take the security of your data very seriously. We use a range of technical and organizational measures, including encryption and strict access controls, to protect your data from unauthorized access or loss."}
                </p>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "نحتفظ ببياناتك الشخصية فقط طالما كان ذلك ضروريًا. قد يتم الاحتفاظ ببيانات صحية مجهولة الهوية المستخدمة للبحوث العلمية لفترات أطول بما يتماشى مع المعايير التنظيمية والأخلاقية."
                    : "We retain your Personal Data only for as long as necessary. Anonymized health data used for scientific research may be retained for longer periods in line with regulatory and ethical standards."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1100">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "8. حقوقك في حماية البيانات" : "8. Your Data Protection Rights"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "بموجب قانون حماية بيانات DIFC، لديك حقوق مهمة، بما في ذلك:"
                    : "Under the DIFC Data Protection Law, you have important rights, including:"}
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md mb-4">
                  <ul className={`list-disc ${isArabic ? "mr-8" : "ml-8"} space-y-2 text-lg text-gray-600`}>
                    <li className="text-justify">{isArabic ? "الحق في الوصول إلى نسخة من بياناتك الشخصية." : "The right to access a copy of your Personal Data."}</li>
                    <li className="text-justify">{isArabic ? "الحق في تصحيح بياناتك الشخصية غير الدقيقة." : "The right to rectify inaccurate Personal Data."}</li>
                    <li className="text-justify">{isArabic ? "الحق في محو بياناتك الشخصية." : "The right to erase your Personal Data."}</li>
                    <li className="text-justify">{isArabic ? "الحق في تقييد كيفية معالجتنا لبياناتك الشخصية." : "The right to restrict how we process your Personal Data."}</li>
                    <li className="text-justify">{isArabic ? "الحق في سحب الموافقة في أي وقت، دون التأثير على قانونية المعالجة القائمة على الموافقة قبل سحبها." : "The right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal."}</li>
                  </ul>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "لممارسة أي من هذه الحقوق، يرجى الاتصال بمسؤول حماية البيانات لدينا."
                    : "To exercise any of these rights, please contact our Data Protection Officer."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1200">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "9. سياستنا تجاه الأطفال" : "9. Our Policy Towards Children"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "خدماتنا والدراسات السريرية ليست موجهة للأفراد الذين تقل أعمارهم عن 18 عامًا. لا نجمع بيانات شخصية من الأطفال عن علم."
                    : "Our services and clinical studies are not directed to individuals under the age of 18. We do not knowingly collect Personal Data from children."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1300">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "10. تغييرات على إشعار الخصوصية هذا" : "10. Changes to This Privacy Notice"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed text-justify">
                  {isArabic
                    ? "قد نقوم بتحديث إشعار الخصوصية هذا من وقت لآخر. سننشر أي تغييرات على موقعنا الإلكتروني، وحيثما كان ذلك مناسبًا، سنخطرك بالبريد الإلكتروني."
                    : "We may update this Privacy Notice from time to time. We will post any changes on our website and, where appropriate, notify you by email."}
                </p>
              </section>

              <section className="mb-10 animate-in fade-in slide-in-from-bottom duration-1000 delay-1400">
                <h2 className={`text-2xl lg:text-3xl font-bold text-blue-600 mb-4 mt-8 transition-colors duration-300 hover:text-blue-700 ${isArabic ? "text-right" : "text-left"}`}>
                  {isArabic ? "11. اتصل بنا ومسؤول حماية البيانات لدينا (DPO)" : "11. Contact Us & Our Data Protection Officer (DPO)"}
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                  {isArabic
                    ? "إذا كان لديك أي أسئلة حول إشعار الخصوصية هذا أو ترغب في ممارسة حقوقك في حماية البيانات، يرجى الاتصال بمسؤول حماية البيانات لدينا (DPO):"
                    : "If you have any questions about this Privacy Notice or wish to exercise your data protection rights, please contact our Data Protection Officer (DPO):"}
                </p>
                <div className={`${isArabic ? "text-right" : "text-left"} bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100 shadow-md transition-all duration-300 hover:shadow-lg`}>
                  <p className="font-semibold mb-2 text-gray-900 text-lg">Amil Khanzada</p>
                  <p className="font-medium mb-2 text-gray-700">Data Protection Officer</p>
                  <p className="mb-2 text-gray-600">
                    <span className="font-semibold text-gray-900">{isArabic ? "البريد الإلكتروني:" : "Email:"}</span>{" "}
                    <a href="mailto:dpo@nafasy.ai" className="text-blue-600 hover:text-blue-700 hover:underline font-medium transition-colors duration-300">
                      dpo@nafasy.ai
                    </a>
                  </p>
                  <p className="text-gray-600">
                    <span className="font-semibold text-gray-900">{isArabic ? "العنوان:" : "Address:"}</span>{" "}
                    Nafasy.AI Limited, The Gate, Level 14, P.O. Box 74777, Dubai, UAE
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
    </div>
  );
}
