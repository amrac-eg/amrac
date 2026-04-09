// ContactPage.tsx
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import MapSection from "../../_components/MapSection";
import Form from "./_components/Form";
import QrcodeSection from "./_components/QrcodeSection";
import { getCurrentLocale } from "@/lib/getCurrentLocale";

// Translation object for ContactPage
const pageTranslations = {
  ar: {
    title: "تواصل معنا",
    subtitle: "نحن هنا للإجابة على جميع استفساراتك. تواصل معنا بأي طريقة تفضلها.",
    whatsapp: {
      title: "واتساب",
      desc: "تواصل معنا مباشرة عبر واتساب",
      button: "ابدأ المحادثة"
    },
    phone: {
      title: "الاتصال الهاتفي",
      numbers: ["01222717458", "0452843333"]
    },
    email: {
      title: "البريد الإلكتروني",
      desc: "راسلنا على بريدنا الإلكتروني",
      address: "amrac@mail.com"
    },
    formTitle: "أرسل لنا رسالة",
    footer: "#فكر_يعمر - نبتكر لنجعل حياتك أسهل",
    metadata: {
      title: "AMRAC - تواصل معنا",
      description: "تواصل معنا اليوم وسنكون سعداء بمساعدتك في تنفيذ مشروعك"
    }
  },
  en: {
    title: "Contact Us",
    subtitle: "We are here to answer all your inquiries. Contact us any way you prefer.",
    whatsapp: {
      title: "WhatsApp",
      desc: "Contact us directly via WhatsApp",
      button: "Start Chat"
    },
    phone: {
      title: "Phone Call",
      numbers: ["01222717458", "0452843333"]
    },
    email: {
      title: "Email",
      desc: "Send us an email",
      address: "amrac@mail.com"
    },
    formTitle: "Send Us a Message",
    footer: "#Think_Build - We innovate to make your life easier",
    metadata: {
      title: "AMRAC - Contact Us",
      description: "Contact us today and we'll be happy to help you with your project"
    }
  }
};

const ContactPage = async () => {
  const locale = await getCurrentLocale();
  const t = pageTranslations[locale];
  const isRTL = locale === 'ar';
  
  return (
    <main dir={isRTL ? "rtl" : "ltr"}>
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4 mt-16">
        <div className="container mx-auto max-w-7xl">
          {/* Header with AOS animation */}
          <div data-aos="zoom-in" className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-3">
              {t.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t.subtitle}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Contact Methods */}
            <div className="space-y-6">
              {/* Contact Card 1 - WhatsApp */}
              <div
                data-aos="zoom-in"
                data-aos-delay="100"
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-primary"
              >
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="text-xl font-semibold mb-1">{t.whatsapp.title}</h3>
                    <p className="text-gray-600 mb-2">{t.whatsapp.desc}</p>
                    <a
                      aria-label="WhatsApp"
                      href="https://wa.me/966502207777"
                      target="_blank"
                      className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition"
                    >
                      {t.whatsapp.button}
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Card 2 - Phone */}
              <div
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaPhone className="text-blue-600 text-2xl" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="text-xl font-semibold mb-1">{t.phone.title}</h3>
                    <div className="space-y-1">
                      {t.phone.numbers.map((num, idx) => (
                        <p key={idx} className="text-gray-800">{num}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Card 3 - Email */}
              <div
                data-aos="zoom-in"
                data-aos-delay="300"
                className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-purple-500"
              >
                <div className={`flex items-start gap-4 ${isRTL ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FaEnvelope className="text-purple-600 text-2xl" />
                  </div>
                  <div className={isRTL ? 'text-right' : 'text-left'}>
                    <h3 className="text-xl font-semibold mb-1">{t.email.title}</h3>
                    <p className="text-gray-600 mb-2">{t.email.desc}</p>
                    <a
                      aria-label="Email"
                      href={`mailto:${t.email.address}`}
                      className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition"
                    >
                      {t.email.address}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle - Contact Form */}
            <div
              data-aos="zoom-in"
              data-aos-delay="400"
              className="bg-white rounded-2xl shadow-xl p-8 lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                {t.formTitle}
              </h2>

              <Form locale={locale} />
            </div>
          </div>

          {/* Social Media & QR Section */}
          <QrcodeSection locale={locale} />
        </div>
      </section>
      <div>
        <MapSection />
        {/* Footer Note */}
        <div className="text-center mt-16 text-gray-600 py-4">
          <p className="text-lg">
            <span className="font-semibold text-primary">{t.footer.split(' - ')[0]}</span> - {t.footer.split(' - ')[1]}
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = pageTranslations[locale as keyof typeof pageTranslations] || pageTranslations.ar;
  
  return {
    title: t.metadata.title,
    description: t.metadata.description,
    alternates: {
      canonical: "https://amrac.netlify.app/contact",
    },
  };
}