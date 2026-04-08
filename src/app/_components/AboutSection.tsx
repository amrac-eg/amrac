"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import {
  Award,
  CheckCircle,
  TrendingUp,
  Globe,
} from "lucide-react";
import Image from "next/image";
import image1 from "../../../public/about/metallic-sculpture-city.jpg.jpeg";
import image2 from "../../../public/about/modern-buildings-boats-san-diego-usa.jpg.jpeg";
import image3 from "../../../public/about/structures-architecture-from-new-york-city.jpg.jpeg";



const AboutSection = () => {
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
    >
      {/* خلفية */}
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
          {/* العنوان */}
          <div className="text-center space-y-4 mb-16" data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block">
              <span className="relative z-10 px-4 py-4">
                عن أمراك
                <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-amber-400 rounded-full"></span>
              </span>
            </h2>
            <p className="text-xl text-primary/80 font-medium mt-10">
              رؤية – رسالة – تميّز
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-5 items-start w-full">
            {/* النصوص */}
            <div className="space-y-8">
              {/* تعريف */}
              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <p className="text-lg leading-relaxed text-gray-700">
                  شركة <strong className="text-primary">أمراك</strong> متخصصة في
                  تقديم الحلول والاستشارات الهندسية بخبرة تمتد لأكثر من عقد ونصف
                  في السوق المحلي والإقليمي، حيث نقدم خدمات دقيقة ترتكز على فهم
                  احتياجات العملاء وتطبيق أحدث المعايير العالمية لتحقيق أعلى
                  مستويات الجودة.
                </p>
              </div>

              {/* رؤية */}
              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg ml-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">رؤيتنا</h3>
                    <p className="text-gray-700">
                      أن نكون الخيار الموثوق في الاستشارات الهندسية بمصر
                      والمنطقة، من خلال تقديم حلول ذكية ومستدامة تعزز جودة
                      المشاريع من البداية وحتى التنفيذ.
                    </p>
                  </div>
                </div>
              </div>

              {/* رسالة */}
              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 group"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-amber-400/10 rounded-lg ml-4">
                    <Award className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">رسالتنا</h3>
                    <p className="text-gray-700">
                      تسعى أمراك لتكون إحدى العلامات البارزة في صناعة التصميم
                      المعماري والهندسي في مصر والمنطقة، من خلال التزامها
                      بالجودة، والحفاظ على الطابع المحلي الأصيل، والتطلع الدائم
                      نحو التميز والريادة.
                    </p>
                  </div>
                </div>
              </div>

              {/* نقاط القوة */}
              {/* <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-green-400/10 rounded-lg ml-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-lg text-gray-700">
                    نؤمن أن لكل مشروع هوية فريدة، لذلك نعمل على تقديم حلول مبتكرة
                    تعكس رؤية العميل وتواكب متطلبات المستقبل بأعلى درجات
                    الاحترافية.
                  </p>
                </div>
              </div> */}

              {/* إحصائيات */}
              <div data-aos="fade-up" className="grid grid-cols-3 gap-4">
                {[
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    value: "+15",
                    label: "عامًا من الخبرة",
                    color: "text-primary",
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    value: "+200",
                    label: "مشروع ناجح",
                    color: "text-blue-400",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    value: "+130",
                    label: "عميل راضٍ",
                    color: "text-green-400",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white p-4 rounded-xl shadow-md text-center"
                  >
                    <div className={`${item.color} mb-2`}>{item.icon}</div>
                    <div className="text-2xl font-bold">{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* الصور */}
            <div className="relative h-full min-h-[600px]">
              <div className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  width={400}
                  height={400}
                  src={image1}
                  alt="تصميم معماري"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute right-0 top-60 w-2/3 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  width={400}
                  height={400}
                  src={image2}
                  alt="مخططات"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute left-0 bottom-0 w-2/3 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  width={400}
                  height={400}
                  src={image3}
                  alt="فريق العمل"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* كارت الخبرة */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl w-72">
                <h3 className="font-bold text-lg mb-1">+15 عام من الخبرة</h3>
                <p className="text-sm text-gray-600">
                  في التصميم والاستشارات الهندسية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
