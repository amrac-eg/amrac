import Link from "@/components/link";
import React from "react";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gray-200 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-1/4 w-64 h-64 bg-primary rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-secondary rounded-full mix-blend-overlay filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          جاهزون لبدء مشروعك؟
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          تواصل معنا اليوم وسنكون سعداء بمساعدتك في تنفيذ مشروعك
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            اتصل بنا الآن
          </Link>

          <Link
            href="/contact"
            className="border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            راسلنا عبر البريد
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
