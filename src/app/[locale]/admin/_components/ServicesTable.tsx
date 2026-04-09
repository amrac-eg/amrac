"use client";
import { Services } from "@prisma/client";
import Image from "next/image";
import EditServices from "./EditServices";
import DeleteServices from "./DeleteServices";
import { Locale } from "@/i18n.config";

// Translation object
const translations = {
  ar: {
    edit: "تعديل",
    delete: "حذف",
    imageAlt: "صورة الخدمة",
  },
  en: {
    edit: "Edit",
    delete: "Delete",
    imageAlt: "Service image",
  },
};

interface ServicesTableProps {
  services: Services[];
  locale: Locale;
}

const ServicesCard = ({
  service,
  locale,
}: {
  service: Services;
  locale: Locale;
}) => {
  const t = translations[locale];
  const isRTL = locale === "ar";

  // Helper function to get localized content
  const getLocalizedService = () => {
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

  const localized = getLocalizedService();

  return (
    <div
      className="w-full bg-white rounded-lg shadow-lg overflow-hidden mt-12"
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="relative w-full h-56">
        <Image
          src={service?.image ?? ""}
          alt={localized.title || t.imageAlt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">
          {localized.title}
        </h3>
        <p className="text-gray-600 mt-2">{localized.description}</p>

        <div
          className={`mt-4 flex ${isRTL ? "flex-row-reverse justify-end gap-3" : "justify-between"}`}
        >
          <EditServices Services={service} />
          <DeleteServices id={service.id} publicId={service?.publicId ?? ""} />
        </div>
      </div>
    </div>
  );
};

const ServicesTable = ({ services, locale }: ServicesTableProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
      {services.map((service) => (
        <ServicesCard key={service.id} service={service} locale={locale} />
      ))}
    </div>
  );
};

export default ServicesTable;
