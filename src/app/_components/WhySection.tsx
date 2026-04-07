"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const WhySection = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden container">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-50 left-10 w-40 h-40 rounded-full bg-primary"></div>
        <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-amber-400"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}

        <div className="text-center space-y-4  mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            <span className="relative z-10 px-4 py-4 ">
              لماذا تختار <span className="text-primary">أمراك</span>؟
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-amber-400 rounded-full z-0 mt-4"></span>
            </span>
          </h2>
          <p className="text-xl text-primary/80 font-medium max-w-2xl mt-8 m-auto">
            نؤمن بأن كل مشروع يمثل فرصة جديدة للتميز والإبداع
          </p>
        </div>
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "رؤية إبداعية",
              desc: "نبتكر حلولاً هندسية فريدة تلهم الفضاءات وتعزز التجارب",
              icon: "💡",
            },
            {
              title: "دقة تنفيذية",
              desc: "نهتم بكل التفاصيل لضمان جودة لا تتجزأ في كل مرحلة",
              icon: "🎯",
            },
            {
              title: "شراكة مستدامة",
              desc: "نسعى لبناء علاقات طويلة الأمد تقوم على الثقة والشفافية",
              icon: "🤝",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl m-auto text-center  shadow-sm hover:shadow-md transition-all border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={150 * (index + 1)}
            >
              <div className="text-4xl mb-4 text-center">{item.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div
          className="mt-20 bg-white p-8 rounded-xl shadow-sm border border-gray-200 mx-auto text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-xl italic text-gray-700 mb-4 ">
            في أمراك، لا نكتفي بتنفيذ المشاريع بل نضع بصمتنا في كل تصميم،
            مستلهمين من طموحات عملائنا لنقدّم حلولًا هندسية متكاملة ترتقي لمستوى
            التحدي.
          </p>
          <p className="font-bold text-gray-800 text-2xl">- فريق أمراك </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
