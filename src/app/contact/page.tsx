import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import MapSection from "../_components/MapSection";
import Form from "./_components/Form";
import QrcodeSection from "./_components/QrcodeSection";

const ContactPage = () => {
  return (
    <main>
      <section className="bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen py-12 px-4 mt-16">
        <div className="container mx-auto max-w-7xl">
          {/* Header with AOS animation */}
          <div data-aos="zoom-in" className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-3">
              تواصل معنا
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              نحن هنا للإجابة على جميع استفساراتك. تواصل معنا بأي طريقة تفضلها.
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
                <div className="flex items-start gap-4">
                  <div className="bg-primary bg-opacity-10 p-3 rounded-full">
                    <FaWhatsapp className="text-white text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">واتساب</h3>
                    <p className="text-gray-600 mb-2">
                      تواصل معنا مباشرة عبر واتساب
                    </p>
                    <a
                      aria-label="WhatsApp"
                      href="https://wa.me/966502207777"
                      target="_blank"
                      className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-200 transition"
                    >
                      ابدأ المحادثة
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
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <FaPhone className="text-blue-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      الاتصال الهاتفي
                    </h3>
                    {/* <p className="text-gray-600 mb-2">
                      من الأحد إلى الخميس، 9 صباحاً - 5 مساءً
                    </p> */}
                    <div className="space-y-1">
                      <p className="text-gray-800">0502207777</p>
                      <p className="text-gray-800">0133302922</p>
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
                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <FaEnvelope className="text-purple-600 text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">
                      البريد الإلكتروني
                    </h3>
                    <p className="text-gray-600 mb-2">
                      راسلنا على بريدنا الإلكتروني
                    </p>
                    <a
                      aria-label="Email"
                      href="mailto:info@artx.sa"
                      className="inline-block bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-200 transition"
                    >
                      info@artx.sa
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
                أرسل لنا رسالة
              </h2>

              <Form />
            </div>
          </div>

          {/* Social Media & QR Section */}
          <QrcodeSection />
        </div>
      </section>
      <div>
        <MapSection />
        {/* Footer Note */}
        <div className="text-center mt-16 text-gray-600 py-4">
          <p className="text-lg">
            <span className="font-semibold text-primary">#فكر_يعمر</span> -
            نبتكر لنجعل حياتك أسهل
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;

export async function generateMetadata() {
  return {
    title: "ArtX - تواصل معنا",
    description: "تواصل معنا اليوم وسنكون سعداء بمساعدتك في تنفيذ مشروعك",
    alternates: {
      canonical: "https://artx.sa/contact",
    },
  };
}
