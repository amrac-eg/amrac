import {
  FaPhone,
  FaFax,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

import Image from "next/image";
import { Routes } from "../constants/enums";
import logo from "../../../public/favicon.png";
import Link from "../link";
import { getServices } from "@/server/db/services";
import { Locale } from "@/i18n.config";

// Translation object
const translations = {
  ar: {
    companyName: "أمراك",
    companyDesc:
      "شركة رائدة في مجال الاستشارات الهندسية والتخطيط العمراني، نقدم حلولاً إبداعية تلبي أعلى معايير الجودة.",
    quickLinks: {
      title: "روابط سريعة",
      home: "الرئيسية",
      services: "خدماتنا",
      ourwork: "اعمالنا",
      contact: "اتصل بنا",
    },
    services: {
      title: "خدماتنا",
      more: "المزيد من خدماتنا",
    },
    contact: {
      title: "تواصل معنا",
      moreServices: "المزيد من خدماتنا",
    },
    footerBottom: `جميع الحقوق محفوظة لشركة أمراك`,
    hashtag: "#فكر_يعمر",
    social: {
      facebook: "فيسبوك",
      twitter: "تويتر",
      instagram: "انستقرام",
      whatsapp: "واتساب",
    },
  },
  en: {
    companyName: "Amrak",
    companyDesc:
      "A leading company in engineering consultancy and urban planning, providing creative solutions that meet the highest quality standards.",
    quickLinks: {
      title: "Quick Links",
      home: "Home",
      services: "Services",
      ourwork: "Our Work",
      contact: "Contact",
    },
    services: {
      title: "Our Services",
      more: "More Services",
    },
    contact: {
      title: "Contact Us",
      moreServices: "More Services",
    },
    footerBottom: `All Rights Reserved for Amrak Company`,
    hashtag: "#Think_Build",
    social: {
      facebook: "Facebook",
      twitter: "Twitter",
      instagram: "Instagram",
      whatsapp: "WhatsApp",
    },
  },
};

const Footer = async ({ locale }: { locale: Locale }) => {
  const services = await getServices();
  const t = translations[locale];
  const isRTL = locale === "ar";

  // Helper function to get localized service title
  const getLocalizedServiceTitle = (service: any) => {
    if (locale === "ar") {
      return service.title_ar;
    }
    return service.title_en;
  };

  const quickLinks = [
    { title: t.quickLinks.home, href: Routes.HOME },
    { title: t.quickLinks.services, href: Routes.SERVICES },
    { title: t.quickLinks.ourwork, href: Routes.OURWORK },
    { title: t.quickLinks.contact, href: Routes.CONTACT },
  ];

  return (
    <footer className="bg-primary text-white">
      {/* Top Footer */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div className="space-y-4">
          <div
            className={`flex  gap-2 ${isRTL ? "flex-row justify-end" : "flex-row-reverse justify-start"}`}
          >
            <Image src={logo} alt={t.companyName} width={50} height={50} />
          </div>
          <p className="text-white/80">{t.companyDesc}</p>

          {/* Social Media */}
          <div className="flex gap-4 text-xl pt-2">
            <Link
              href="https://www.facebook.com/amrac_eg"
              target="_blank"
              aria-label={t.social.facebook}
            >
              <FaFacebook className="hover:text-amber-400 transition-colors" />
            </Link>

            <Link
              href="https://x.com/amrac_eg"
              target="_blank"
              aria-label={t.social.twitter}
            >
              <XIcon />
            </Link>

            <Link
              href="https://www.instagram.com/amrac_eg"
              target="_blank"
              aria-label={t.social.instagram}
            >
              <FaInstagram className="hover:text-amber-400 transition-colors" />
            </Link>

            <Link
              href="https://wa.me/201222717458"
              target="_blank"
              dir="ltr"
              aria-label={t.social.whatsapp}
            >
              <FaWhatsapp className="hover:text-amber-400 transition-colors" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
            {t.quickLinks.title}
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-amber-400 transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h4 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
            {t.services.title}
          </h4>
          <ul className="space-y-2">
            {services.slice(0, 5).map((service, index) => (
              <li key={index}>
                <div className="text-white/80 hover:text-amber-400 transition-colors">
                  {getLocalizedServiceTitle(service)}
                </div>
              </li>
            ))}
            {services.length > 5 && (
              <li>
                <div className="text-white/80 hover:text-amber-400 transition-colors">
                  <Link
                    className="hover:text-amber-400 transition-colors transform hover:scale-105 border-b border-amber-400 w-fit inline-block pb-0.5"
                    href={`/${Routes.SERVICES}`}
                  >
                    {t.services.more}
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
            {t.contact.title}
          </h4>
          <div className="space-y-3">
            <p
              className={`flex items-center gap-3 ${isRTL ? "flex-row" : "flex-row-reverse"}`}
            >
              <MdPhoneIphone className="text-amber-400" />
              <span>01222717458</span>
            </p>

            <p
              className={`flex items-center gap-3 ${isRTL ? "flex-row" : "flex-row-reverse"}`}
            >
              <FaPhone className="text-amber-400" />
              <span>0452843333</span>
            </p>

            <p
              className={`flex items-center gap-3 ${isRTL ? "flex-row" : "flex-row-reverse"}`}
            >
              <FaFax className="text-amber-400" />
              <span>0452843333</span>
            </p>

            <p
              className={`flex items-center gap-3 ${isRTL ? "flex-row" : "flex-row-reverse"}`}
            >
              <FaEnvelope className="text-amber-400" />
              <span>amrac@mail.com</span>
            </p>

            <p
              className={`flex items-start gap-3 leading-relaxed ${isRTL ? "flex-row" : "flex-row-reverse"}`}
            >
              <FaMapMarkerAlt className="text-amber-400 mt-1" />
              <span>
                {locale === "ar"
                  ? "شارع الجمهورية، ادكو"
                  : "Al Gomhouria Street, Edku"}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-primary-dark py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-white/80">
            © {new Date().getFullYear()} {t.footerBottom}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-semibold">{t.hashtag}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
