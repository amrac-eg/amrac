import Image from "next/image";
import { Routes } from "@/components/constants/enums";
import Link from "@/components/link";
import { FaEye, FaArrowLeft, FaPhone, FaEnvelope } from "react-icons/fa";
import { getProjects } from "@/server/db/ourWork";
import imagebg from "../../../public/images/computer-display-with-3d-render-software-architectural-building-complex-architect-modern-office-desktop-screen-desk-showing-urban-planning-architecture-construction-plans.jpg";

const AllProjectsPage = async () => {
  const ourWork = await getProjects();

  return (
    <div className="bg-gray-50">
      {/* القسم التعريفي */}
      <section className="relative h-96 w-full">
        <Image
          src={imagebg}
          alt="خدماتنا"
          fill
          className="object-cover"
          priority
        />{" "}
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">مشاريعنا</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              نؤمن بأن كل مشروع يمثل فرصة جديدة للتميز والإبداع
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href={`/${Routes.CONTACT}`}
                className="flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition"
              >
                تواصل معنا <FaPhone />
              </Link>
              <Link
                href={`/${Routes.SERVICES}`}
                className="flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition"
              >
                خدماتنا <FaArrowLeft />
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* قسم المشاريع */}
      <div className="grid md:grid-cols-2 gap-8 container mt-16">
        {ourWork.map((project, index) => (
          <div
            key={project.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            <Link href={`/${Routes.OURWORK}/${project.id}`}>
              <div className="relative w-full h-96">
                <Image
                  src={project.image}
                  alt={`${project.title || "المشروع"} - صورة ${index + 1}`}
                  fill
                  className=" transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transition-all duration-300">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                  <div className="bg-white/90 text-primary p-3 rounded-full">
                    <FaEye className="text-xl" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      ;{/* قسم التواصل */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-primary text-white rounded-xl p-8 md:p-12 shadow-lg">
            <h2 className="text-3xl font-bold mb-4">جاهزون لبدء مشروعك؟</h2>
            <p className="text-xl mb-8">
              تواصل معنا اليوم لتنفيذ مشروعك بأعلى معايير الجودة والاحترافية
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link
                href={`/${Routes.CONTACT}`}
                className="flex items-center justify-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition flex-1 text-center"
              >
                <FaPhone /> اتصل بنا
              </Link>
              <Link
                href={`mailto:info@artex.com`}
                className="flex items-center justify-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition flex-1 text-center"
              >
                <FaEnvelope /> راسلنا عبر البريد
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
  return {
    title: "AMRAC - مشاريعنا",
    description: "نقدم حلولاً هندسية مبتكرة تلبي أعلى معايير الجودة والكفاءة",
    alternates: {
      canonical: "https://amrac.netlify.app/our-work",
    },
  };
}
