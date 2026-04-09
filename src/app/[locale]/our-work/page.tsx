import Image from "next/image";
import { Routes } from "@/components/constants/enums";
import Link from "@/components/link";
import { FaEye, FaArrowLeft, FaPhone, FaEnvelope } from "react-icons/fa";
import { getProjects } from "@/server/db/ourWork";
import imagebg from "../../../../public/images/computer-display-with-3d-render-software-architectural-building-complex-architect-modern-office-desktop-screen-desk-showing-urban-planning-architecture-construction-plans.jpg";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

// Translation object
const translations = {
  ar: {
    hero: {
      title: "مشاريعنا",
      subtitle: "نؤمن بأن كل مشروع يمثل فرصة جديدة للتميز والإبداع",
      contactBtn: "تواصل معنا",
      servicesBtn: "خدماتنا"
    },
    cta: {
      title: "جاهزون لبدء مشروعك؟",
      subtitle: "تواصل معنا اليوم لتنفيذ مشروعك بأعلى معايير الجودة والاحترافية",
      callBtn: "اتصل بنا",
      emailBtn: "راسلنا عبر البريد"
    },
    imageAlt: "مشاريعنا - خلفية",
    projectImageAlt: "المشروع"
  },
  en: {
    hero: {
      title: "Our Projects",
      subtitle: "We believe every project is a new opportunity for excellence and creativity",
      contactBtn: "Contact Us",
      servicesBtn: "Our Services"
    },
    cta: {
      title: "Ready to Start Your Project?",
      subtitle: "Contact us today to execute your project with the highest standards of quality and professionalism",
      callBtn: "Call Us",
      emailBtn: "Email Us"
    },
    imageAlt: "Our Projects - Background",
    projectImageAlt: "Project"
  }
};

const AllProjectsPage = async () => {
  const ourWork = await getProjects();
  const locale = await getCurrentLocale();
  const t = translations[locale];
  const isRTL = locale === 'ar';

  // Helper function to get localized title
  const getLocalizedTitle = (project: any) => {
    if (locale === 'ar') {
      return project.title_ar;
    }
    return project.title_en;
  };

  return (
    <div className="bg-gray-50" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section */}
      <section className="relative h-96 w-full">
        <Image
          src={imagebg}
          alt={t.imageAlt}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t.hero.title}</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href={`/${locale}/${Routes.CONTACT}`}
                className={`flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {t.hero.contactBtn} <FaPhone />
              </Link>
              <Link
                href={`/${locale}/${Routes.SERVICES}`}
                className={`flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {t.hero.servicesBtn} <FaArrowLeft className={isRTL ? '' : 'rotate-180'} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <div className="grid md:grid-cols-2 gap-8 container mt-16">
        {ourWork.map((project, index) => {
          const localizedTitle = getLocalizedTitle(project);
          return (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Link href={`/${locale}/${Routes.OURWORK}/${project.id}`}>
                <div className="relative w-full h-96">
                  <Image
                    src={project.image}
                    alt={`${localizedTitle || t.projectImageAlt} ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary text-white rounded-xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
            <p className="text-xl mb-8">{t.cta.subtitle}</p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href={`/${locale}/${Routes.CONTACT}`}
                className={`flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition flex-1 text-center ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <FaPhone /> {t.cta.callBtn}
              </Link>
              <Link
                href={`mailto:amrac@mail.com`}
                className={`flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition flex-1 text-center ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <FaEnvelope /> {t.cta.emailBtn}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjectsPage;

export async function generateMetadata() {
  const locale = await getCurrentLocale();
  
  const metadataTranslations = {
    ar: {
      title: "AMRAC - مشاريعنا",
      description: "نقدم حلولاً هندسية مبتكرة تلبي أعلى معايير الجودة والكفاءة"
    },
    en: {
      title: "AMRAC - Our Projects",
      description: "We provide innovative engineering solutions that meet the highest standards of quality and efficiency"
    }
  };
  
  const t = metadataTranslations[locale as keyof typeof metadataTranslations] || metadataTranslations.ar;
  
  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: "https://amrac.netlify.app/our-work",
    },
  };
}