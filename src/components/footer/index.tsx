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

const Footer = async () => {
  const services = await getServices();

  const quickLinks = [
    { title: "الرئيسية", href: Routes.HOME },
    { title: "خدماتنا", href: Routes.SERVICES },
    { title: "اعمالنا", href: Routes.OURWORK },
    { title: "اتصل بنا", href: Routes.CONTACT },
  ];

  return (
    <footer className="bg-primary text-white ">
      {/* الفوتر العلوي */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* معلومات الشركة */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Image src={logo} alt="AMRAC Logo" width={40} height={40} />
            <h3 className="text-xl font-bold">أمراك</h3>
          </div>
          <p className="text-white/80">
            شركة رائدة في مجال الاستشارات الهندسية والتخطيط العمراني، نقدم
            حلولاً إبداعية تلبي أعلى معايير الجودة.
          </p>

          {/* السوشيال */}
          <div className="flex gap-4 text-xl pt-2">
            <Link
              href="https://www.facebook.com/amrac_eg"
              target="_blank"
              aria-label="فيسبوك"
            >
              <FaFacebook className="hover:text-amber-400 transition-colors" />
            </Link>

            <Link
              href="https://x.com/amrac_eg"
              target="_blank"
              aria-label="تويتر"
            >
              <XIcon />
            </Link>

            <Link
              href="https://www.instagram.com/amrac_eg"
              target="_blank"
              aria-label="انستقرام"
            >
              <FaInstagram className="hover:text-amber-400 transition-colors" />
            </Link>

            <Link
              href="https://wa.me/201222717458"
              target="_blank"
              aria-label="واتساب"
            >
              <FaWhatsapp className="hover:text-amber-400 transition-colors" />
            </Link>
          </div>
        </div>

        {/* روابط سريعة */}
        <div>
          <h4 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
            روابط سريعة
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

        {/* خدماتنا */}
        <div>
          <h4 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
            خدماتنا
          </h4>
          <ul className="space-y-2">
            {services.slice(0, 5).map((service, index) => (
              <li key={index}>
                <div className="text-white/80 hover:text-amber-400 transition-colors">
                  {service.title}
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
                    المزيد من خدماتنا
                  </Link>
                </div>
              </li>
            )}
          </ul>
        </div>

        {/* معلومات التواصل */}
        <div className="space-y-4">
          <h4 className="text-lg font-bold mb-4 pb-2 border-b border-white/20">
            تواصل معنا
          </h4>
          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <MdPhoneIphone className="text-amber-400" />
              <span>01222717458</span>
            </p>

            <p className="flex items-center gap-3">
              <FaPhone className="text-amber-400" />
              <span>0452843333</span>
            </p>

            <p className="flex items-center gap-3">
              <FaFax className="text-amber-400" />
              <span>0452843333</span>
            </p>

            <p className="flex items-center gap-3">
              <FaEnvelope className="text-amber-400" />
              <span>amrac@mail.com</span>
            </p>

            <p className="flex items-start gap-3 leading-relaxed">
              <FaMapMarkerAlt className="text-amber-400 mt-1" />
              <span>شارع الجمهورية، ادكو</span>
            </p>
          </div>
        </div>
      </div>

      {/* الفوتر السفلي */}
      <div className="bg-primary-dark py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <div className="text-white/80">
            © {new Date().getFullYear()} جميع الحقوق محفوظة لشركة أمراك
          </div>
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-semibold">#فكر_يعمر</span>
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
