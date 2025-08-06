"use client"

import { useState, useEffect } from "react"
import { ArrowRight, Play, CheckCircle, Users, Globe, Award, ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {withBasePath} from '../utils/basePath';
export default function NafasyAI() {
  const [language, setLanguage] = useState<"english" | "arabic">("english")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const isArabic = language === "arabic"
  // Mouse tracking for interactive background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

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

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-blue-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-cyan-600 group-hover:to-blue-600">
                Nafasy.AI
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex ${isArabic ? "space-x-reverse space-x-8" : "space-x-8"}`}>
              {[
                { key: "about", en: "About Us", ar: "من نحن" },
                { key: "technology", en: "Technology", ar: "تقنيتنا" },
                { key: "vision", en: "Vision", ar: "رؤيتنا" },
                { key: "use-cases", en: "Use Cases", ar: "حالات الاستخدام" },
                { key: "leadership", en: "Leadership", ar: "القيادة" },
                { key: "news", en: "News", ar: "الأخبار" },
                { key: "partners", en: "Partners", ar: "الشركاء" },
              ].map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className={`font-bold text-gray-700 hover:text-blue-600 transition-all duration-300 hover:scale-105 relative group px-2`}
                  style={{ minWidth: isArabic ? "110px" : undefined, textAlign: "center" }}
                >
                  {isArabic ? item.ar : item.en}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as "english" | "arabic")}
                className="px-3 py-2 border border-blue-200 rounded-lg bg-white/90 backdrop-blur-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:shadow-md"
              >
                <option value="english">English</option>
                <option value="arabic">العربية</option>
              </select>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-200 animate-in slide-in-from-top duration-300">
              <nav className="flex flex-col space-y-2">
                {[
                  { key: "about", en: "About Us", ar: "من نحن" },
                  { key: "technology", en: "Technology", ar: "تقنيتنا" },
                  { key: "vision", en: "Vision", ar: "رؤيتنا" },
                  { key: "use-cases", en: "Use Cases", ar: "حالات الاستخدام" },
                  { key: "leadership", en: "Leadership", ar: "القيادة" },
                  { key: "news", en: "News", ar: "الأخبار" },
                  { key: "partners", en: "Partners", ar: "الشركاء" },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => scrollToSection(item.key)}
                    className="text-left px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 hover:translate-x-2"
                  >
                    {isArabic ? item.ar : item.en}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100/80 backdrop-blur-sm text-blue-800 rounded-full text-sm font-medium mb-6 transition-all duration-300 hover:scale-105 hover:bg-blue-200/80">
              <Award className={`w-4 h-4 animate-pulse ${isArabic ? "ml-2" : "mr-2"}`} />

              {isArabic ? "تقنية حاصلة على براءة اختراع" : "Patented AI Technology"}
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
              {isArabic ? (
                <>
                  فحص الصحة التنفسية
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block animate-gradient">
                    بالذكاء الاصطناعي
                  </span>
                </>
              ) : (
                <>
                  AI-Powered
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent block animate-gradient">
                    Respiratory Health
                  </span>
                  Screening
                </>
              )}
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
              {isArabic
                ? "نحن رواد في إحداث تحول عالمي في فحوصات الصحة. من خلال تسخير قوة الذكاء الاصطناعي وبساطة الهاتف الذكي، نقدم كشفًا فوريًا ومنخفض التكلفة وغير جراحي للحالات التنفسية."
                : "Pioneering global transformation in health screening through AI and smartphone technology. Real-time, low-cost, non-invasive detection of respiratory conditions."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in slide-in-from-bottom duration-1000 delay-600">
              <Button
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                onClick={() => scrollToSection("about")}
              >
                {isArabic ? "ابدأ الآن" : "Get Started"}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in fade-in slide-in-from-bottom duration-1000 delay-800">
            <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl p-1 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl">
              <div className="bg-white rounded-xl p-8">
                <img
                  src={withBasePath('/images/ai-respiratory-screening-process.png')}
                  alt={
                    isArabic
                      ? "عملية فحص الصحة التنفسية بالذكاء الاصطناعي"
                      : "AI-Powered Respiratory Health Screening Process"
                  }
                  className="w-full h-auto rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { number: "256,600+", label: isArabic ? "مريض تم اختبارهم" : "PCR-Tested Patients" },
        { number: "84%", label: isArabic ? "دقة الكشف" : "Detection Accuracy" },
        { number: "4,500+", label: isArabic ? "مستخدم تجريبي" : "Beta Users" },
        { number: "3", label: isArabic ? "جامعات رائدة" : "Leading Universities" },
      ].map((stat, index) => {
        // Function to convert digits to Arabic numerals
        const toArabicNumbers = (num) => {
          const arabicDigits = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
          return num.replace(/[0-9]/g, (digit) => arabicDigits[digit]);
        };

        const displayNumber = isArabic ? toArabicNumbers(stat.number) : stat.number;

        return (
          <div key={index} className="text-center group">
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2 transition-all duration-300 group-hover:scale-110 group-hover:text-cyan-600">
              {displayNumber}
            </div>
            <div className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-800">
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>


      {/* About Section */}
<section id="about" className="py-20 relative">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Text Section */}
      <div
        className={`${isArabic ? "order-1 lg:order-2 text-right" : "order-1 lg:order-1 text-left"}
          animate-in fade-in slide-in-from-left duration-1000`}
      >
        <h3
          className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-blue-600 ${isArabic ? "text-right" : ""}`}
        >
          {isArabic ? "من نحن" : "About Us"}
        </h3>
        <p
          className={`text-lg text-gray-600 mb-6 leading-relaxed ${isArabic ? "text-right" : ""}`}
        >
          {isArabic
            ? "نحن رواد في إحداث تحول عالمي في فحوصات الصحة. من خلال تسخير قوة الذكاء الاصطناعي وبساطة الهاتف الذكي، نقدم كشفًا فوريًا ومنخفض التكلفة وغير جراحي للحالات التنفسية. مهمتنا هي تمكين المرضى والأطباء والحكومات من خلال تكنولوجيا متقدمة وسهلة الوصول، لجعل الرعاية الصحية الاستباقية حقيقة للجميع."
            : "We are pioneering a global transformation in health screening. By harnessing the power of artificial intelligence and the simplicity of a smartphone, we deliver real-time, low-cost, and non-invasive detection of respiratory conditions. Our mission is to empower patients, clinicians, and governments with superior, accessible technology, making proactive healthcare a reality for all."}
        </p>

        {/* CheckCircle with Text */}
        <div
          className={`flex items-center group ${
            isArabic
              ? "justify-start space-x-reverse space-x-3"
              : "flex-row space-x-3"
          }`}
        >
          <CheckCircle className="h-6 w-6 text-green-500 transition-transform duration-300 group-hover:scale-110" />
          <span className="text-gray-700 font-medium transition-colors duration-300 group-hover:text-green-600">
            {isArabic ? "تقنية حاصلة على براءة اختراع" : "Patented Technology"}
          </span>
        </div>
      </div>

      {/* Image Section */}
      <div
        className={`${isArabic ? "order-1 lg:order-2" : "order-2 lg:order-2"}
          relative animate-in fade-in slide-in-from-right duration-1000`}
      >
        <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl">
          <img
            src={withBasePath('/images/dubai-heatmap.png')}
            alt={
              isArabic
                ? "خريطة حرارية لانتشار الأمراض التنفسية في دبي"
                : "Respiratory disease heatmap in Dubai"
            }
            className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </div>
  </div>
</section>



  {/* Technology Section */}
<section id="technology" className="py-20 bg-white/80 backdrop-blur-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Heading */}
    <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
      <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-blue-600">
        {isArabic ? "تقنيتنا" : "Our Technology"}
      </h3>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          icon: <Globe className="h-8 w-8 text-blue-600" />,
          image: require("@/public/images/H1.jpg"),
          imageAlt: isArabic ? "طفل مريض" : "Sick child",
          title: isArabic ? "مجموعة بيانات ضخمة" : "Massive Dataset",
          description: isArabic
            ? "أكثر من 256,600 مريض تم اختبارهم عبر فحص PCR"
            : "256,600+ PCR-tested patients ensuring robustness and accuracy",
        },
        {
          icon: <Award className="h-8 w-8 text-blue-600" />,
          title: isArabic ? "أداء رائد" : "Breakthrough Performance",
          description: isArabic
            ? "دقة تصل إلى 84٪ في الكشف عن فيروس كوفيد-19"
            : "84% accuracy for COVID-19 screening demonstrating our technology power",
        },
        {
          icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
          title: isArabic ? "آمن حسب التصميم" : "Secure by Design",
          description: isArabic
            ? "بنية تحتية سحابية آمنة مع الالتزام بلوائح الإمارات"
            : "Secure cloud infrastructure compliant with UAE Federal Data Protection Law",
        },
        {
          icon: <Users className="h-8 w-8 text-blue-600" />,
          title: isArabic ? "تم التحقق منه حكوميًا" : "Government Vetted",
          description: isArabic
            ? "عقد بحث وتطوير مع وزارة الصحة الأمريكية"
            : "R&D contract with U.S. Department of Health and Human Services BARDA",
        },
        {
          icon: <Globe className="h-8 w-8 text-blue-600" />,
          title: isArabic ? "تطبيق فعلي" : "Real-World Application",
          description: isArabic
            ? "تم إصدار التطبيق التجريبي لـ 4,500 مستخدم في كولومبيا"
            : "Beta application released to 4,500 users in Colombia proving viability",
        },
        {
          icon: <Award className="h-8 w-8 text-blue-600" />,
          title: isArabic ? "شراكات أكاديمية" : "Academic Partnerships",
          description: isArabic
            ? "تعاون مع جامعتي ستانفورد وواشنطن"
            : "Co-developed with Stanford University and University of Washington",
        },
      ].map((feature, index) => (
        <Card
          key={index}
          className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 bg-gradient-to-br from-white to-blue-50 hover:scale-105 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <CardHeader className={isArabic ? "text-right flex flex-col items-center" : ""}>
            {/* Icon */}
            <div
              className={`mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
                isArabic ? "flex justify-center mb-6" : ""
              }`}
            >
              {feature.icon}
            </div>
            <CardTitle className="text-xl transition-colors duration-300 group-hover:text-blue-600">
              {feature.title}
            </CardTitle>
          </CardHeader>
          <CardContent className={isArabic ? "text-right" : ""}>
            <CardDescription
              className={`text-gray-600 text-base leading-relaxed ${
                isArabic ? "text-justify" : ""
              }`}
            >
              {feature.description}
            </CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>



      {/* Vision Section */}
      <section id="vision" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`${isArabic ? "order-1" : "order-2"} animate-in fade-in slide-in-from-left duration-1000`}>
              <h3
                className={`text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-blue-600 ${isArabic ? "text-right" : "text-left"}`}
              >
                {isArabic ? "رؤيتنا" : "Our Vision"}
              </h3>
              <p className={`text-lg text-gray-600 mb-8 leading-relaxed ${isArabic ? "text-right" : "text-left"}`}>
                {isArabic
                  ? "نتطلع إلى مستقبل تكون فيه الرعاية الصحية استباقية ووقائية. يهدف هذا المشروع إلى تطوير تطبيق هاتف ذكي للفحص السريع وبتكلفة منخفضة للأمراض التنفسية المعدية."
                  : "We envision a future where healthcare is both proactive and preventative. This project aims to develop a smartphone app for rapid, cost-effective prescreening of infectious respiratory diseases."}
              </p>

              <div className="space-y-4">
                {[
                  {
                    step: isArabic ? "١" : "1",
                    title: isArabic ? "جمع البيانات" : "Data Collection",
                    desc: isArabic ? "السعال في تطبيق الهاتف الذكي" : "Cough into Smartphone App",
                  },
                  {
                    step: isArabic ? "٢" : "2",
                    title: isArabic ? "تحليل الذكاء الاصطناعي" : "AI Analysis",
                    desc: isArabic ? "الذكاء الاصطناعي يكتشف أنماط أصوات الأمراض" : "AI Detects Disease Sound Patterns",
                  },
                  {
                    step: isArabic ? "٣" : "3",
                    title: isArabic ? "حالات الاستخدام" : "Applications",
                    desc: isArabic
                      ? "فحص العدوى التنفسية والربو والتدخين"
                      : "Respiratory Screening, Asthma, Smoking Detection",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`flex items-start group animate-in fade-in slide-in-from-left ${
                      isArabic 
                        ? "justify-start space-x-reverse space-x-3"
                        : "flex-row text-left space-x-4"
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-600 ${
                        isArabic ? "mr-4" : "ml-0"
                      }`}
                    >
                      {item.step}
                    </div>
                    <div className={isArabic ? "text-right" : "text-left"}>
                      <h4
                        className={`font-semibold text-gray-900 mb-1 transition-colors duration-300 group-hover:text-blue-600 ${
                          isArabic ? "text-right" : "text-left"
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p className={`text-gray-600 ${isArabic ? "text-right" : "text-left"}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`relative ${isArabic ? "order-1" : "order-2"} animate-in fade-in slide-in-from-right duration-1000`}
            >
              <div className="bg-gradient-to-br from-cyan-100 to-blue-100 rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <img
                  src={withBasePath('/images/ai-respiratory-screening-process.png')}
                  alt={
                    isArabic
                      ? "مخطط عملية فحص الصحة التنفسية بالذكاء الاصطناعي"
                      : "AI respiratory screening process diagram"
                  }
                  className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Use Cases Section */}
      <section id="use-cases" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-blue-600">
              {isArabic ? "حالات الاستخدام" : "Use Cases"}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {isArabic
                ? "تطبيقات متنوعة لتقنيتنا في مختلف القطاعات والبيئات."
                : "Diverse applications of our technology across various sectors and environments"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: isArabic ? "التجمعات العامة الكثيفة" : "High-Density Public Gatherings",
                description: isArabic
                  ? "فحص سريع لملايين الحجاج في مناسبات مثل الحج والعمرة للكشف عن الإنفلونزا وRSV وكوفيد-19 قبل حدوث تفشي المرض."
                  : "Rapidly screen millions of pilgrims at events like Hajj and Umrah to detect flu, RSV, and COVID-19 before outbreaks can occur",
                image: withBasePath('/images/H1.jpg'),
              },
              {
                title: isArabic ? "المطارات ونقاط الحدود" : "Airports & Border Control",
                description: isArabic
                  ? "تنفيذ فحوصات مستهدفة للمسافرين من المناطق عالية الخطورة لتقليل استيراد الأمراض المعدية."
                  : "Implement targeted screening of passengers from high-risk regions to reduce the importation of infectious diseases",
                image: withBasePath('/images/A1.jp'),
              },
              {
                title: isArabic ? "المؤسسات التعليمية" : "Educational Institutions",
                description: isArabic
                  ? "تسهيل الفحص المنتظم في المدارس ورياض الأطفال للكشف عن العدوى قبل انتشارها على نطاق واسع بين الأطفال وعائلاتهم."
                  : "Facilitate regular screening in schools and early childhood settings to detect infections before they spread widely among children and their families",
                image: withBasePath('/images/E1.jpg'),
              },
              {
                title: isArabic ? "الرعاية الصحية والتأمين" : "Healthcare & Insurance",
                description: isArabic
                  ? "الدمج في سير العمل بالمستشفيات والعيادات لفحص المرضى الذين يعانون من أعراض تنفسية قبل الانتقال إلى اختبارات أكثر تكلفة، مما يحسن الكفاءة من حيث التكلفة."
                  : "Integrate into hospital and clinic workflows to prescreen patients with respiratory symptoms before escalating to more expensive tests, improving cost-efficiency",
                image: withBasePath('/images/hospital-waiting-room.png'),
              },
              {
                title: isArabic ? "الطب عن بُعد والرعاية الصحية النائية" : "Telemedicine & Remote Healthcare",
                description: isArabic
                  ? "تعزيز الاستشارات الافتراضية من خلال تمكين الكشف المبكر عن التهابات الجهاز التنفسي، مما يسمح لأولئك في المناطق النائية بالوصول إلى الرعاية الصحية الحرجة."
                  : "Enhance virtual consultations by enabling early detection of respiratory infections, allowing those in remote areas to access critical healthcare",
                image: withBasePath('/images/TM1.jpg'),
              },
              {
                title: isArabic ? "الشركات والمكاتب" : "Corporate & Offices",
                description: isArabic
                  ? "فحص الموظفين للحفاظ على بيئة عمل آمنة وتقليل انتشار الأمراض التنفسية في مكان العمل."
                  : "Employee screening for safe workplace environments and reducing the spread of respiratory diseases in the workplace",
                image: withBasePath('/images/O1.jpg'),
              },
            ].map((useCase, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden rounded-t-lg">
                  <img
                    src={useCase.image || "/placeholder.svg"}
                    alt={useCase.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg transition-colors duration-300 group-hover:text-blue-600">
                    {useCase.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {useCase.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-blue-600">
              {isArabic ? "القيادة" : "Leadership"}
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {isArabic
                ? "فريق من الخبراء والقادة في مجال الذكاء الاصطناعي والرعاية الصحية"
                : "Expert team of leaders in AI and healthcare innovation"}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: isArabic ? "أميل خانزادا" : "Amil Khanzada",
                role: isArabic ? "المؤسس والرئيس التنفيذي" : "Founder & CEO",
                description: isArabic
                  ? "خريج متميز في علوم الحاسوب من جامعة كاليفورنيا بيركلي مع أكثر من عشر سنوات من الخبرة"
                  : "Top computer science graduate from UC Berkeley with over a decade of experience in software development",
                linkedin: "https://www.linkedin.com/in/amilkhanzada",
                image: withBasePath('/images/amil-khanzada.png'),
              },
              {
                name: isArabic ? "البروفيسور ليس أطلس" : "Prof. Les Atlas",
                role: isArabic ? "الشريك المؤسس والمدير التقني" : "Co-Founder & CTO",
                description: isArabic
                  ? "أستاذ الهندسة الكهربائية في جامعة واشنطن وزميل مدى الحياة في IEEE"
                  : "Electrical Engineering Professor at University of Washington and IEEE Life Fellow",
                linkedin: "https://people.ece.uw.edu/atlas/",
                image: withBasePath('/images/prof-les-atlas.png'),
              },
              {
                name: isArabic ? "تامر فهمي" : "Tamer Fahmy",
                role: isArabic ? "مستشار اللوائح التنظيمية" : "MENA Regulatory Advisor",
                description: isArabic
                  ? "مستشار ذو خبرة تزيد عن 20 عامًا في قطاع الرعاية الصحية"
                  : "Experienced advisor with over 20 years in healthcare industry at Philips and Dräger",
                linkedin: "https://ae.linkedin.com/in/tamer-fahmy-b4468614",
                image: withBasePath('/images/tamer-fahmy.png'),
              },
            ].map((leader, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 group animate-in fade-in slide-in-from-bottom"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-all duration-300 hover:scale-105 inline-block"
                    >
                      {leader.name}
                    </a>
                  </CardTitle>
                  <CardDescription className="text-blue-600 font-medium transition-colors duration-300 group-hover:text-cyan-600">
                    {leader.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{leader.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-blue-600">
              {isArabic ? "الأخبار" : "Latest News"}
            </h3>
          </div>

          <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-cyan-50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-in fade-in slide-in-from-bottom duration-1000">
            <CardHeader>
             <div

  className={`flex items-center mb-4 ${
    isArabic ? "justify-start space-x-reverse space-x-3" : "flex-row space-x-3"
  }`}
>
  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
  <span className="text-sm font-medium text-green-600">
    {isArabic ? "أحدث الأخبار" : "Latest Update"}
  </span>
</div>

              <CardTitle className="text-2xl transition-colors duration-300 hover:text-blue-600">
                {isArabic ? "عرض في أسبوع أبوظبي العالمي للصحة 2025" : "Showcased at Abu Dhabi Global Health Week 2025"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-600 leading-relaxed">
                {isArabic
                  ? "في يونيو 2025، عرضنا تقنيتنا للفحص التنفسي المدعوم بالذكاء الاصطناعي في أسبوع أبوظبي العالمي للصحة، وجذبنا انتباه أكثر من 14,000 من قادة ومبتكري الصحة حول العالم. خلال جلسة مغلقة مع دائرة الصحة في أبوظبي، تم الاعتراف بالحل لإمكاناته في دعم الفرز الدقيق مع الحفاظ على أمان وخصوصية بيانات المرضى محليًا."
                  : "In June 2025, we showcased our AI-powered respiratory screening technology at Abu Dhabi Global Health Week, drawing attention from over 14,000 global health leaders and innovators. During a closed-door session with the Department of Health Abu Dhabi, our solution was recognized for its potential to support high-accuracy triage while keeping patient data secure and local."}
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

    {/* Partners Section */}
      <section id="partners" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 transition-colors duration-300 hover:text-blue-600">
              {isArabic ? "الشركاء" : "Our Partners"}
            </h3>
          </div>
          <Card className="border-0 shadow-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-in fade-in slide-in-from-bottom duration-1000">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={isArabic ? "order-1" : "order-2"}>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300 hover:text-blue-600">
                    {isArabic ? "شراكات استراتيجية" : "Strategic Partnerships"}
                  </h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {isArabic
                      ? 'المشروع هو جزء من برنامج تطوير المشاريع "نماذج من أجل الإنسانية" في دبي، ويتعاون مع جامعة محمد بن راشد للطب والعلوم الصحية (MBRU) وجامعة واشنطن.'
                      : "Part of Dubai-based Prototypes for Humanity venture development programme, collaborating with Mohammed Bin Rashid University of Medicine and Health Sciences (MBRU) and University of Washington faculty."}
                 </p>
                </div>
                <div className={`grid grid-cols-2 gap-4 ${isArabic ? "order-1" : "order-2"}`}>
                  {["MBRU", "UW", "Dubai Health", "P4H"].map((partner, index) => (
                    <div
                      key={partner}
                      className="bg-gray-50 rounded-lg p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-blue-50 hover:shadow-md animate-in fade-in slide-in-from-bottom"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                     
                      <p className="text-sm font-medium">{partner}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-cyan-600/90" />
          <div className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48 animate-pulse" />
          <div
            className="absolute w-80 h-80 bg-white/5 rounded-full blur-2xl -bottom-40 -right-40 animate-pulse"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom duration-1000">
            {isArabic ? "انضم إلى مستقبل الرعاية الصحية" : "Join the Future of Healthcare"}
          </h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            {isArabic
              ? "كن جزءًا من الثورة في فحص الأمراض التنفسية بالذكاء الاصطناعي"
              : "Be part of the revolution in AI-powered respiratory disease screening"}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4 group">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  <span className="text-white font-bold">N</span>
                </div>
                <h5 className="text-xl font-bold transition-colors duration-300 group-hover:text-blue-400">
                  Nafasy.AI
                </h5>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                {isArabic
                  ? "رواد في تحويل فحوصات الصحة عالميًا من خلال الذكاء الاصطناعي وتقنية الهاتف الذكي"
                  : "Pioneering global transformation in health screening through AI and smartphone technology"}
              </p>
            </div>
            <div>
              <h6 className="font-semibold mb-4">{isArabic ? "الشركة" : "Company"}</h6>
              <ul className="space-y-2 text-gray-400">
                {[
                  { key: "about", en: "About Us", ar: "من نحن" },
                  { key: "technology", en: "Technology", ar: "تقنيتنا" },
                  { key: "leadership", en: "Leadership", ar: "القيادة" },
                  { key: "news", en: "News", ar: "الأخبار" },
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => scrollToSection(item.key)}
                      className="hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {isArabic ? item.ar : item.en}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h6 className="font-semibold mb-4">{isArabic ? "الحلول" : "Solutions"}</h6>
              <ul className="space-y-2 text-gray-400">
                {[
                  { key: "use-cases", en: "Use Cases", ar: "حالات الاستخدام" },
                  { key: "vision", en: "Our Vision", ar: "رؤيتنا" },
                  { key: "partners", en: "Partners", ar: "الشركاء" },
                ].map((item) => (
                  <li key={item.key}>
                    <button
                      onClick={() => scrollToSection(item.key)}
                      className="hover:text-white transition-all duration-300 hover:translate-x-1"
                    >
                      {isArabic ? item.ar : item.en}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nafasy.AI. {isArabic ? "جميع الحقوق محفوظة" : "All rights reserved"}.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl z-50 group"
        aria-label={isArabic ? "العودة للأعلى" : "Back to top"}
      >
        <ChevronDown className="h-6 w-6 rotate-180 transition-transform duration-300 group-hover:-translate-y-1" />
      </button>

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
  )
}
