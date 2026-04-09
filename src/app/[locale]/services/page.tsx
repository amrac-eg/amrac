import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import imagebg from "../../../../public/images/digital-increasing-bar-graph-with-businessman-hand-overlay.jpg";
import { getServices } from "@/server/db/services";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

// Translation object
const translations = {
  ar: {
    hero: {
      title: "حلولنا المتكاملة",
      subtitle:
        "نقدم مجموعة متكاملة من الخدمات الهندسية التي تلبي جميع احتياجاتك بدقة واحترافية",
    },
    services: {
      title: "اكتشف خدماتنا",
      subtitle: "حلول مصممة خصيصًا لتحقيق أهدافك بمستوى عالي من الجودة والدقة",
    },
    cta: {
      title: "مستعد لبدء مشروعك؟",
      subtitle:
        "تواصل مع فريقنا اليوم للحصول على استشارة مجانية وتقييم احتياجاتك",
      button: "تواصل معنا الآن",
    },
    process: {
      title: "كيف نعمل",
      steps: [
        { title: "الاستشارة", desc: "نستمع لمتطلباتك ونحللها" },
        { title: "التخطيط", desc: "نضع خطة عمل مفصلة" },
        { title: "التنفيذ", desc: "ننفذ المشروع بدقة" },
        { title: "التسليم", desc: "نسلم المشروع بجودة عالية" },
      ],
    },
    imageAlt: "خدماتنا - خلفية",
    serviceImageAlt: "خدمة",
  },
  en: {
    hero: {
      title: "Our Integrated Solutions",
      subtitle:
        "We offer a comprehensive range of engineering services that meet all your needs with precision and professionalism",
    },
    services: {
      title: "Discover Our Services",
      subtitle:
        "Tailored solutions designed to achieve your goals with high quality and precision",
    },
    cta: {
      title: "Ready to Start Your Project?",
      subtitle:
        "Contact our team today for a free consultation and needs assessment",
      button: "Contact Us Now",
    },
    process: {
      title: "How We Work",
      steps: [
        {
          title: "Consultation",
          desc: "We listen to and analyze your requirements",
        },
        { title: "Planning", desc: "We create a detailed action plan" },
        { title: "Execution", desc: "We execute the project with precision" },
        { title: "Delivery", desc: "We deliver the project with high quality" },
      ],
    },
    imageAlt: "Our Services - Background",
    serviceImageAlt: "Service",
  },
};

export default async function ServicesPage() {
  const services = await getServices();
  const locale = await getCurrentLocale();
  const t = translations[locale];
  const isRTL = locale === "ar";

  // Helper function to get localized content
  const getLocalizedService = (service: any) => {
    if (locale === "ar") {
      return {
        title: service.title_ar,
        description: service.description_ar,
      };
    }
    return {
      title: service.title_en,
      description: service.description_en,
    };
  };

  return (
    <div className="bg-gray-50 mt-14" dir={isRTL ? "rtl" : "ltr"}>
      {/* Hero Section with Background Image */}
      <section className="relative h-96 w-full">
        <Image
          src={imagebg}
          alt={t.imageAlt}
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">{t.hero.subtitle}</p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.services.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const localized = getLocalizedService(service);
            return (
              <Card
                key={service.id}
                className="overflow-hidden group hover:shadow-lg transition-all"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={service.image ?? ""}
                    alt={localized.title || t.serviceImageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">
                    {localized.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{localized.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.cta.title}</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">{t.cta.subtitle}</p>
          <Link href={`/${locale}/contact`}>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg"
            >
              {t.cta.button}
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Process Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t.process.title}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-amber-400 mx-auto mb-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {t.process.steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export async function generateMetadata() {
  const locale = await getCurrentLocale();

  const metadataTranslations = {
    ar: {
      title: "AMRAC - خدماتنا",
      description:
        "نحن نقدم خدمات مصممة خصيصًا لتحقيق استراتيجية تميز واحتياجاتك",
    },
    en: {
      title: "AMRAC - Our Services",
      description:
        "We offer tailored services designed to achieve your differentiation strategy and meet your needs",
    },
  };

  const t =
    metadataTranslations[locale as keyof typeof metadataTranslations] ||
    metadataTranslations.ar;

  return {
    title: t.title,
    description: t.description,
    alternates: {
      canonical: "https://amrac.netlify.app/services",
    },
  };
}
