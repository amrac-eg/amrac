"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import {
  FaDrawPolygon,
  FaRulerCombined,
  FaCity,
  FaArrowLeft,
} from "react-icons/fa";

// الخلفية
import pattern from "../../../public/Herosectionback.png";
import Link from "@/components/link";
import { Routes } from "@/components/constants/enums";
import { Locale } from "@/i18n.config";

const HeroSection = ({ locale }: { locale: Locale }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <section className="relative w-full h-auto md:min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* خلفية زخرفية */}
      <div className="absolute top-0 left-0 w-full h-full opacity-60 overflow-hidden">
        <Image
          src={pattern}
          alt="نمط زخرفي هندسي في الخلفية"
          fill
          className="object-cover animate-float"
        />
      </div>

      {/* تأثيرات لونية */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="container mx-auto relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl text-center" data-aos="fade-up">
          {/* العنوان */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-28 md:mt-0">
            <span className="text-primary">أمراك</span> للاستشارات الهندسية
          </h1>

          {/* الوصف المختصر */}
          <p className="text-lg md:text-2xl text-gray-100 mb-4">
            خبرة تمتد على مدار عقدٍ ونصف في مجال التصميم والإشراف المعماري
            محليًا وإقليميًا.
          </p>

          {/* الوصف التفصيلي */}
          <p className="text-base text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            تُعد شركة أمراك للاستشارات الهندسية من الشركات ذات الخبرة الراسخة في
            السوق الهندسي، حيث ساهمت في تصميم والإشراف على عدد من أبرز المشاريع
            المعمارية داخل مصر وخارجها، مع الالتزام بأعلى معايير الجودة
            والابتكار.
          </p>

          {/* الكروت */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-right">
            {[
              {
                icon: (
                  <FaDrawPolygon className="text-amber-400 text-3xl mb-2" />
                ),
                title: "تصميم",
                desc: "حلول مبتكرة تلائم رؤية العميل",
                border: "border-amber-400",
                hover: "hover:bg-amber-400/10",
              },
              {
                icon: (
                  <FaRulerCombined className="text-blue-400 text-3xl mb-2" />
                ),
                title: "دقة هندسية",
                desc: "تفاصيل تنفيذية دقيقة وفق أعلى المعايير",
                border: "border-blue-400",
                hover: "hover:bg-blue-400/10",
              },
              {
                icon: <FaCity className="text-green-400 text-3xl mb-2" />,
                title: "مشاريع ناجحة",
                desc: "+200 مشروع محلي وإقليمي",
                border: "border-green-400",
                hover: "hover:bg-green-400/10",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-gray-800/50 p-6 rounded-lg border-r-4 ${item.border} transition duration-300 ${item.hover}`}
              >
                {item.icon}
                <h2 className="font-bold text-lg mb-1">{item.title}</h2>
                <p className="text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* زر CTA */}
          <button className="flex items-center cursor-pointer mb-3 md:mb-0 justify-center gap-3 bg-primary text-white font-bold py-3 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-amber-500/30 text-lg mx-auto">
            <Link href={`/${Routes.CONTACT}`}>استشر خبرائنا الآن</Link>
            <FaArrowLeft />
          </button>
        </div>
      </div>

      {/* سهم النزول */}
      <Link
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </Link>

      {/* animation */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: scale(1) translate(0, 0);
          }
          25% {
            transform: scale(1.05) translate(-5px, -5px);
          }
          50% {
            transform: scale(1.03) translate(5px, 5px);
          }
          75% {
            transform: scale(1.05) translate(-5px, 5px);
          }
        }
        .animate-float {
          animation: float 30s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
