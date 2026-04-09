import React from "react";
import Image from "next/image";
import { Globe, HardHat, Award } from "lucide-react";
import image from "../../../public/مننحن.jpg";
import { Locale } from "@/i18n.config";

// Translation object
const translations = {
  ar: {
    badge: "من نحن",
    title: "أمراك للاستشارات الهندسية",
    subtitle: "نصمم مشاريعكم بثقة وخبرة راسخة.",
    description:
      "شركة متخصصة في تقديم الحلول والاستشارات الهندسية بخبرة تمتد لأكثر من عقد ونصف في السوق المحلي والإقليمي، نقدم خدمات استشارية هندسية دقيقة ترتكز على فهم احتياجات عملائنا وتوظيف أحدث المعايير العالمية، نؤمن أن التخطيط السليم هو أساس النجاح، لذا نركز على التفاصيل ونقدم حلولًا متكاملة تضمن التنفيذ بكفاءة وجودة عالية، رؤيتنا أن نكون شركاء في بناء بيئات أكثر ذكاءً وحياة أفضل لمجتمعاتنا.",
    experienceLabel: "عامًا من الخبرة",
    experienceDesc: "في التصميم والاستشارات الهندسية",
    imageAlt: "فريق عمل أمراك",
    floatingBadge: "أكثر من 15 عامًا من الخبرة",
    vision: {
      title: "رؤيتنا",
      description:
        "أن نكون شركاء في بناء بيئات أكثر ذكاءً وحياة أفضل لمجتمعاتنا",
    },
    mission: {
      title: "رسالتنا",
      description:
        "تسعى أمراك لتكون إحدى العلامات البارزة في صناعة التصميم المعماري والهندسي في مصر والمنطقة، من خلال التزامها بالجودة، وحفاظها على الطابع المحلي الأصيل، وتطلّعها المستمر نحو التميّز والريادة.",
    },
  },
  en: {
    badge: "About Us",
    title: "AMRAC Engineering Consultancy",
    subtitle: "Designing your projects with confidence and proven expertise.",
    description:
      "A specialized company providing engineering solutions and consultations with over a decade and a half of experience in local and regional markets. We offer precise engineering consulting services based on understanding our clients' needs and employing the latest international standards. We believe that proper planning is the foundation of success, so we focus on details and provide integrated solutions that ensure efficient and high-quality execution. Our vision is to be partners in building smarter environments and better lives for our communities.",
    experienceLabel: "Years of Experience",
    experienceDesc: "in Design & Engineering Consulting",
    imageAlt: "AMRAC team",
    floatingBadge: "More than 15 years of experience",
    vision: {
      title: "Our Vision",
      description:
        "To be partners in building smarter environments and better lives for our communities",
    },
    mission: {
      title: "Our Mission",
      description:
        "AMRAC strives to be one of the leading brands in architectural and engineering design in Egypt and the region, through its commitment to quality, preservation of authentic local character, and continuous pursuit of excellence and leadership.",
    },
  },
};

export default function AboutSection2({ locale }: { locale: Locale }) {
  const t = translations[locale];
  const isRTL = locale === "ar";

  return (
    <section
      id="aboutus"
      className="relative py-14 md:py-28 bg-[#f8f8f8] overflow-hidden"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <div className={`space-y-8 ${isRTL ? "text-right" : "text-left"}`}>
            {/* Header */}
            <div className="space-y-4">
              <span
                className={`inline-flex items-center gap-2 text-primary font-medium ${isRTL ? "flex-row" : "flex-row-reverse"}`}
              >
                <HardHat className="w-5 h-5" />
                <span>{t.badge}</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                <span className="block mb-2">{t.title}</span>
                <span className="text-lg md:text-xl font-normal text-gray-600">
                  {t.subtitle}
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>{t.description}</p>

              {/* Vision + Mission (commented in original, kept as reference) */}
              {/* <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-4">
                <div>
                  <h3 className={`font-bold text-lg text-gray-900 mb-2 flex items-center gap-2 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
                    <Award className="w-5 h-5 text-primary" />
                    {t.mission.title}
                  </h3>
                  <p>{t.mission.description}</p>
                </div>
              </div> */}

              {/* Experience */}
              <div
                className={`flex items-center gap-6 bg-white p-6 rounded-xl shadow-sm border ${isRTL ? "flex-row" : "flex-row"}`}
              >
                <div className="text-primary text-4xl font-bold">+15</div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {t.experienceLabel}
                  </p>
                  <p className="text-gray-500 text-sm">{t.experienceDesc}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-full">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-8 border-white">
              <Image
                src={image}
                alt={t.imageAlt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </div>

            {/* Badge */}
            <div
              className={`absolute -bottom-8 ${isRTL ? "-left-8" : "-right-8"} bg-primary text-white p-6 rounded-2xl shadow-lg`}
            >
              <div className="text-center text-lg font-medium">
                {t.floatingBadge}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
