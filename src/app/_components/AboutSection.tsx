"use client";
import React, { useEffect } from "react";
// import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { Award, CheckCircle, TrendingUp, ChevronRight } from "lucide-react";
import Image from "next/image";
import image3 from "../../../public/3.webp";

// روابط صور عالية الجودة لاستخدامها
const professionalImages = {
  main: "https://www.arabnews.com/sites/default/files/styles/n_670_395/public/2021/10/10/2852321-1987454581.jpg?itok=BNJtEYhT",
  design:
    "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  blueprint:
    "https://liveloveuae.com/wp-content/uploads/2024/09/Kingdom-Center-Riad-Arabia-Sauidita_09-1024x754.webp",
};

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
      {/* تأثيرات خلفية ديناميكية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-30"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-amber-50 to-transparent opacity-30"></div>

        {/* نمط هندسي متقطع */}
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
          {/* العنوان مع تأثير خط متدرج */}
          <div className="text-center space-y-4  mb-16" data-aos="fade-down">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
              <span className="relative z-10 px-4 py-4 ">
                رؤيتنا
                <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-amber-400 rounded-full z-0 mt-4"></span>
              </span>
            </h2>
            <p className="text-xl text-primary/80 font-medium max-w-2xl mt-8">
              جودة, ابتكار, تميّز
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start w-full">
            {/* قسم النصوص مع تأثيرات متطورة */}
            <div className="space-y-8">
              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg ml-4">
                    <CheckCircle className="w-6 h-6 text-primary " />
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700 group-hover:text-gray-900">
                    تتميّز{" "}
                    <strong className="text-primary font-semibold">
                      أمراك
                    </strong>{" "}
                    برؤية عصرية تدمج بين الابتكار الفني والدقة التنفيذية، ما
                    يجعلها شريكًا موثوقًا في تطوير المشاريع السكنية والتجارية
                    والتعليمية والطبية والمرافق العامة.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-blue-400/10 rounded-lg ml-4">
                    <Award className="w-6 h-6 text-blue-400" />
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700 group-hover:text-gray-900">
                    تؤمن الشركة بأن لكل مشروع هوية فريدة، لذلك تضع بصمة خاصة
                    تعكس شخصية العميل وتواكب متطلبات المستقبل.
                  </p>
                </div>
              </div>

              <div
                data-aos="fade-right"
                className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-start mb-4">
                  <div className="p-2 bg-green-400/10 rounded-lg ml-4">
                    <TrendingUp className="w-6 h-6 text-green-400" />
                  </div>
                  <p className="text-lg leading-relaxed text-gray-700 group-hover:text-gray-900">
                    تسعى أمراك لتكون إحدى العلامات البارزة في صناعة التصميم
                    المعماري والهندسي في المملكة، من خلال التزامها بالجودة،
                    وحفاظها على الطابع المحلي الأصيل، وتطلّعها المستمر نحو
                    التميّز والريادة.
                  </p>
                </div>
              </div>

              {/* إحصائيات مع تأثيرات */}
              <div data-aos="fade-up" className="grid grid-cols-3 gap-4 mt-8">
                {[
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    value: "+10",
                    label: "اعواما من الخبرة",
                    color: "text-primary",
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    value: "+250",
                    label: "مشروع ناجح",
                    color: "text-blue-400",
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    value: "+130",
                    label: "عميل راضٍ",
                    color: "text-green-400",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-xl shadow-md text-center hover:shadow-lg transition-all hover:-translate-y-1"
                  >
                    <div className={`${item.color} mb-2 `}>{item.icon}</div>
                    <div className="text-2xl font-bold text-gray-900 ">
                      {item.value}
                    </div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* معرض الصور الاحترافي */}
            <div className="relative h-full min-h-[600px]">
              {/* الصورة الرئيسية */}
              <div
                data-aos="zoom-in"
                className="relative w-full h-80 rounded-3xl overflow-hidden shadow-2xl group"
              >
                <Image
                  width={400}
                  height={400}
                  src={professionalImages.main}
                  alt="تصميم معماري حديث"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6"></div>
              </div>

              {/* الصورة الثانية */}
              <div
                data-aos="zoom-in"
                className="absolute right-0 top-60 w-2/3 h-64 rounded-2xl overflow-hidden shadow-xl border-4 border-white group"
              >
                <Image
                  width={400}
                  height={400}
                  src={professionalImages.blueprint}
                  alt="مخططات هندسية دقيقة"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              {/* الصورة الثالثة */}
              <div
                data-aos="zoom-in"
                className="absolute left-0 bottom-0 w-2/3 h-56 rounded-2xl overflow-hidden shadow-xl border-4 border-white group"
              >
                <Image
                  width={400}
                  height={400}
                  src={image3}
                  alt="فريق العمل المحترف"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* بطاقة الخبرة */}
              <div
                data-aos="fade-up"
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl w-72 border border-gray-100 hover:shadow-primary/20 transition-all"
              >
                <div className="flex items-start">
                  <div className="bg-primary/10 p-2 rounded-lg ml-4">
                    <TrendingUp className="w-5 h-5 text-primary " />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-gray-900">
                      +10 عام من الخبرة
                    </h3>
                    <p className="text-sm text-gray-600">
                      في التصميم والاستشارات الهندسية
                    </p>
                    <button className="mt-2 flex items-center text-primary text-sm font-medium">
                      <span>مشاريعنا</span>
                      <ChevronRight className="w-4 h-4 mr-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
