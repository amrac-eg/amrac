"use client";
import {
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";
import { useEffect } from "react";
import AOS from "aos";
import Link from "@/components/link";
import { Locale } from "@/i18n.config";

// Translation object
const translations = {
  ar: {
    qrSection: {
      title: "مسح سريع للتواصل",
      subtitle: "تواصل معنا عبر واتساب",
      description: "امسح الكود للتواصل معنا مباشرة عبر واتساب بكل سهولة.",
      address: "شارع الجمهورية، ادكو"
    },
    socialSection: {
      title: "تابعنا على وسائل التواصل",
      description: "تابعنا لمعرفة أحدث المشاريع والتحديثات الخاصة بشركة أمراك.",
      facebook: "فيسبوك",
      x: "X",
      instagram: "إنستغرام",
      whatsapp: "واتساب"
    },
    metadata: {
      title: "أمراك - تواصل معنا",
      description: "تواصل معنا اليوم وسنكون سعداء بمساعدتك في تنفيذ مشروعك"
    }
  },
  en: {
    qrSection: {
      title: "Quick Scan to Connect",
      subtitle: "Contact us via WhatsApp",
      description: "Scan the code to contact us directly via WhatsApp with ease.",
      address: "Al Gomhouria Street, Edku"
    },
    socialSection: {
      title: "Follow us on Social Media",
      description: "Follow us to see the latest projects and updates from Amrak Company.",
      facebook: "Facebook",
      x: "X",
      instagram: "Instagram",
      whatsapp: "WhatsApp"
    },
    metadata: {
      title: "Amrak - Contact Us",
      description: "Contact us today and we'll be happy to help you with your project"
    }
  }
};

const QrcodeSection = ({ locale }: { locale: Locale }) => {
  const t = translations[locale];
  const isRTL = locale === 'ar';

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      data-aos="fade-up"
      data-aos-delay="500"
      className="mt-16 grid md:grid-cols-2 gap-8"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* QR Code Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          {t.qrSection.title}
        </h3>
        <div className={`flex flex-col md:flex-row items-center gap-8 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className="bg-gray-100 p-4 rounded-xl">
            <QRCodeCanvas
              value="https://wa.me/201222717458"
              size={160}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin
            />
          </div>
          <div className={isRTL ? 'text-right' : 'text-left'}>
            <h4 className="text-xl font-semibold mb-3">
              {t.qrSection.subtitle}
            </h4>
            <p className="text-gray-600 mb-4">
              {t.qrSection.description}
            </p>
            <div className={`flex items-center gap-2 text-gray-700 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
              <FaMapMarkerAlt className="text-primary" />
              <span>{t.qrSection.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">
          {t.socialSection.title}
        </h3>
        <p className="text-gray-600 mb-6">
          {t.socialSection.description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <Link
            href="https://www.facebook.com/amrac_eg"
            target="_blank"
            className="bg-blue-100 hover:bg-blue-200 text-blue-800 p-4 rounded-xl flex flex-col items-center justify-center transition"
          >
            <FaFacebook className="text-2xl mb-2" />
            <span>{t.socialSection.facebook}</span>
          </Link>

          <Link
            href="https://x.com/amrac_eg"
            target="_blank"
            className="bg-black hover:bg-gray-800 text-white p-4 rounded-xl flex flex-col items-center justify-center transition"
          >
            <XIcon />
            <span>{t.socialSection.x}</span>
          </Link>

          <Link
            href="https://www.instagram.com/amrac_eg"
            target="_blank"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:to-pink-600 text-white p-4 rounded-xl flex flex-col items-center justify-center transition"
          >
            <FaInstagram className="text-2xl mb-2" />
            <span>{t.socialSection.instagram}</span>
          </Link>

          <Link
            href="https://wa.me/201222717458"
            target="_blank"
            className="bg-green-100 hover:bg-green-200 text-green-700 p-4 rounded-xl flex flex-col items-center justify-center transition"
          >
            <FaWhatsapp className="text-2xl mb-2" />
            <span>{t.socialSection.whatsapp}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QrcodeSection;

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 24 24"
    className="w-5 h-5"
  >
    <path d="M17.53 2H21L13.88 10.14L22.5 22H15.89L10.5 14.89L4.29 22H1L8.57 13.29L0.5 2H7.39L12.22 8.47L17.53 2ZM16.24 20H18.11L6.41 3.59H4.45L16.24 20Z" />
  </svg>
);