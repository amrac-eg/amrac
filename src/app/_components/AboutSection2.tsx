import React from "react";
import Image from "next/image";
import { Globe, HardHat } from "lucide-react";
import image from "../../../public/مننحن.jpg";

export default function AboutSection2() {
  return (
    <section
      id="aboutus"
      className="relative py-14 md:py-28 bg-[#f8f8f8] overflow-hidden"
    >
      {/* عناصر ديكورية */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* النصوص */}
          <div className="space-y-8 text-right">
            {/* العنوان */}
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-primary font-medium">
                <HardHat className="w-5 h-5" />
                <span>من نحن</span>
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                <span className="block mb-2">أمراك للاستشارات الهندسية</span>
                <span className="text-lg md:text-xl font-normal text-gray-600">
                  نصمم حلولكم بثقة وخبرة راسخة.
                </span>
              </h2>
            </div>

            {/* الوصف */}
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                نقدم خدمات استشارية هندسية دقيقة ترتكز على فهم احتياجات عملائنا
                وتوظيف أحدث المعايير العالمية. نؤمن أن التخطيط السليم هو أساس
                النجاح، لذا نركز على التفاصيل ونقدم حلولًا متكاملة تضمن التنفيذ
                بكفاءة وجودة عالية. رؤيتنا أن نكون شركاء في بناء بيئات أكثر
                ذكاءً وحياة أفضل لمجتمعاتنا.
              </p>
              {/* الرؤية */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-primary" />
                  رؤيتنا
                </h3>
                <p>
                  أن نكون الخيار الموثوق في الاستشارات الهندسية بالمملكة، من
                  خلال تقديم حلول ذكية ومستدامة تعزز جودة المشاريع من البداية
                  وحتى التنفيذ.
                </p>
              </div>
            </div>
          </div>

          {/* الصورة */}
          <div className="relative h-full">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl border-8 border-white">
              <Image
                src={image} // هنا غير المسار للصورة اللي عندك
                alt="فريق عمل Artex"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                quality={90}
              />
            </div>

            {/* البادج */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-6 rounded-2xl shadow-lg">
              <div className="text-center text-lg font-medium">
                ريادة في تقديم الحلول
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
