"use client";
import { useEffect } from "react";
import AOS from "aos";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "@/components/link";
import { Routes } from "@/components/constants/enums";
import { Services } from "@prisma/client";
import { Locale } from "@/i18n.config";

interface ServicesTableProps {
  services: Services[];
  locale: Locale
}

// Translation object for static content
const translations = {
  ar: {
    title: "خدماتنا",
    subtitle: "حلول هندسية متكاملة تلبي احتياجاتك بدقة واحترافية",
    cta: "اكتشف جميع خدماتنا"
  },
  en: {
    title: "Our Services",
    subtitle: "Integrated engineering solutions that meet your needs with precision and professionalism",
    cta: "Discover All Our Services"
  }
};

const HomeServicesSection = ({ services, locale }: ServicesTableProps) => {
  const t = translations[locale];
  const isRTL = locale === 'ar';

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const topServices = services.slice(0, 3);

  // Helper function to get localized content
  const getLocalizedContent = (service: Services) => {
    if (locale === 'ar') {
      return {
        title: service.title_ar,
        description: service.description_ar
      };
    }
    return {
      title: service.title_en,
      description: service.description_en
    };
  };

  return (
    <section
      className="relative py-20 bg-gradient-to-b from-gray-50 to-white container"
      id="home-services"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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

        {/* Services Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {topServices.map((service, index) => {
            const localized = getLocalizedContent(service);
            return (
              <div
                key={service.id}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="hover:-translate-y-2 transition-transform duration-300"
              >
                <Card className="h-full overflow-hidden group border border-gray-200 hover:border-primary/50 transition-all duration-300">
                  <div className="relative h-60 overflow-hidden">
                    {service.image && (
                      <Image
                        src={service.image}
                        alt={localized.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-white">
                      {localized.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="">
                      {localized.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full shadow-lg transition-all"
            asChild
          >
            <Link href={`${Routes.SERVICES}`}>{t.cta}</Link>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-amber-400/10 to-transparent -z-10" />
    </section>
  );
};

export default HomeServicesSection;