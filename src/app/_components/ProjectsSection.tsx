"use client";
import Image from "next/image";
import { Routes } from "@/components/constants/enums";
import Link from "@/components/link";
import { FaEye } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import { Locale } from "@/i18n.config";
import { ImagemyWork, Ourwork } from "@prisma/client";

// Translation object for static content
const translations = {
  ar: {
    title: "مشاريعنا",
    subtitle: "كل مشروع نقدمه هو مزيج من الابتكار والدقة، يعكس التزامنا بأعلى معايير الجودة الهندسية.",
    cta: "مشاهدة كل المشاريع"
  },
  en: {
    title: "Our Projects",
    subtitle: "Every project we deliver is a blend of innovation and precision, reflecting our commitment to the highest standards of engineering quality.",
    cta: "View All Projects"
  }
};

const ProjectsSection = ({
  ourworks,
  locale,
}: {
  ourworks: (Ourwork & { images?: ImagemyWork[] })[];
  locale: Locale;
}) => {
  const t = translations[locale];
  const isRTL = locale === 'ar';

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  // Helper function to get localized title
  const getLocalizedTitle = (project: Ourwork) => {
    if (locale === 'ar') {
      return project.title_ar;
    }
    return project.title_en;
  };

  return (
    <section className="py-20 bg-gray-50 container" id="projects" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 relative inline-block">
            <span className="relative z-10 px-4 py-4">
              {t.title}
              <span className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary to-amber-400 rounded-full z-0 mt-4"></span>
            </span>
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="100"
            className="text-xl text-gray-600 max-w-3xl mx-auto mt-8"
          >
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {ourworks.slice(0, 4).map((project: Ourwork & { images?: ImagemyWork[] }, index: number) => {
            const localizedTitle = getLocalizedTitle(project);
            return (
              <div
                key={project.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <Link href={`/${Routes.OURWORK}/${project.id}`}>
                  <div className="relative w-full h-96">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={localizedTitle}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-2">{localizedTitle}</h3>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                      <div className="bg-white/90 text-primary p-3 rounded-full">
                        <FaEye className="text-xl" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="500"
          className="text-center mt-12"
        >
          <Link
            href={`${Routes.OURWORK}`}
            className={`inline-flex items-center px-6 py-3 bg-primary text-white rounded-full hover:bg-primary-dark transition-colors shadow-lg hover:shadow-primary/30 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
          >
            {t.cta}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${isRTL ? 'ml-2 rotate-180' : 'mr-2'}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;