"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { Award, CheckCircle, TrendingUp, Globe } from "lucide-react";
import Image from "next/image";
import image1 from "../../../public/about/metallic-sculpture-city.jpg.jpeg";
import image2 from "../../../public/about/modern-buildings-boats-san-diego-usa.jpg.jpeg";
import image3 from "../../../public/about/structures-architecture-from-new-york-city.jpg.jpeg";
import { Locale } from "@/i18n.config";

// Translation object
const translations = {
  ar: {
    title: "عن أمراك",
    subtitle: "رؤية – رسالة – تميّز",
    description:
      "شركة أمراك متخصصة في تقديم الحلول والاستشارات الهندسية بخبرة تمتد لأكثر من عقد ونصف في السوق المحلي والإقليمي، حيث نقدم خدمات دقيقة ترتكز على فهم احتياجات العملاء وتطبيق أحدث المعايير العالمية لتحقيق أعلى مستويات الجودة.",
    vision: {
      title: "رؤيتنا",
      description:
        "أن نكون الخيار الموثوق في الاستشارات الهندسية بمصر والمنطقة، من خلال تقديم حلول ذكية ومستدامة تعزز جودة المشاريع من البداية وحتى التنفيذ.",
    },
    mission: {
      title: "رسالتنا",
      description:
        "تسعى أمراك لتكون إحدى العلامات البارزة في صناعة التصميم المعماري والهندسي في مصر والمنطقة، من خلال التزامها بالجودة، والحفاظ على الطابع المحلي الأصيل، والتطلع الدائم نحو التميز والريادة.",
    },
    stats: [
      { label: "عامًا من الخبرة" },
      { label: "مشروع ناجح" },
      { label: "عميل راضٍ" },
    ],
    imageAlt1: "تصميم معماري",
    imageAlt2: "مخططات",
    imageAlt3: "فريق العمل",
    experienceCard: "+15 عام من الخبرة",
    experienceDesc: "في التصميم والاستشارات الهندسية",
  },
  en: {
    title: "About AMRAC",
    subtitle: "Vision – Mission – Excellence",
    description:
      "AMRAC is a specialized company providing engineering solutions and consultations with over a decade and a half of experience in local and regional markets. We offer precise services based on understanding client needs and applying the latest international standards to achieve the highest levels of quality.",
    vision: {
      title: "Our Vision",
      description:
        "To be the trusted choice in engineering consultancy in Egypt and the region, by providing smart and sustainable solutions that enhance project quality from start to execution.",
    },
    mission: {
      title: "Our Mission",
      description:
        "AMRAC strives to be one of the leading brands in architectural and engineering design in Egypt and the region, through its commitment to quality, preservation of authentic local character, and continuous pursuit of excellence and leadership.",
    },
    stats: [
      { label: "Years of Experience" },
      { label: "Successful Projects" },
      { label: "Happy Clients" },
    ],
    imageAlt1: "Architectural design",
    imageAlt2: "Plans and blueprints",
    imageAlt3: "Team work",
    experienceCard: "+15 Years of Experience",
    experienceDesc: "in Design & Engineering Consulting",
  },
};

const AboutSection = ({ locale }: { locale: Locale }) => {
  const t = translations[locale];
  const isRTL = locale === "ar";

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section
      id="about"
      className="relative bg-white py-24 px-4 text-gray-800 overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-50 to-transparent opacity-30"></div>

        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <pattern
            id="pattern"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="20" cy="20" r="1" fill="currentColor"></circle>
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern)"></rect>
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center">
          {/* Title */}
          <div className="text-center space-y-4 mb-16" data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
              <span className="relative z-10 px-4 py-4">
                {t.title}
                <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-amber-400 rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-primary/80 font-medium mt-10">
              {t.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-start w-full">
            {/* Text content */}
            <div className="space-y-8">
              {/* Description */}
              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  {t.description.replace(
                    "أمراك",
                    `${locale === "ar" ? "أمراك" : "AMRAC"}`,
                  )}
                </p>
              </div>

              {/* Vision */}
              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group"
              >
                <div
                  className={`flex items-start mb-4 ${isRTL ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`p-2 bg-primary/10 rounded-lg ${isRTL ? "ml-4" : "mr-4"}`}
                  >
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h3 className="font-bold text-lg mb-2">{t.vision.title}</h3>
                    <p className="text-gray-700">{t.vision.description}</p>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group"
              >
                <div
                  className={`flex items-start mb-4 ${isRTL ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`p-2 bg-amber-400/10 rounded-lg ${isRTL ? "ml-4" : "mr-4"}`}
                  >
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div className={isRTL ? "text-right" : "text-left"}>
                    <h3 className="font-bold text-lg mb-2">
                      {t.mission.title}
                    </h3>
                    <p className="text-gray-700">{t.mission.description}</p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div data-aos="fade-up" className="grid grid-cols-3 gap-4">
                {[
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    value: "+15",
                    color: "text-primary",
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    value: "+200",
                    color: "text-blue-400",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    value: "+130",
                    color: "text-green-400",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-md text-center"
                  >
                    <div className={`${item.color} mb-2 flex justify-center`}>
                      {item.icon}
                    </div>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-sm text-gray-600">
                      {t.stats[i].label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Images */}
            <div className="relative h-full min-h-[600px]">
              <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  width={400}
                  height={400}
                  src={image1}
                  alt={t.imageAlt1}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`absolute ${isRTL ? "left-0" : "right-0"} top-60 w-2/3 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white`}
              >
                <Image
                  width={400}
                  height={400}
                  src={image2}
                  alt={t.imageAlt2}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className={`absolute ${isRTL ? "right-0" : "left-0"} bottom-0 w-2/3 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white`}
              >
                <Image
                  width={400}
                  height={400}
                  src={image3}
                  alt={t.imageAlt3}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Experience Card */}
              <div
                className={`absolute -bottom-6 ${isRTL ? "-right-6" : "-left-6"} bg-white p-6 rounded-xl shadow-2xl w-72`}
              >
                <h3 className="font-bold text-lg mb-1">{t.experienceCard}</h3>
                <p className="text-sm text-gray-600">{t.experienceDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
