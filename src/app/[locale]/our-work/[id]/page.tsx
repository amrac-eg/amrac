import { notFound } from "next/navigation";
import Image from "next/image";
import { FaArrowLeft, FaExpand } from "react-icons/fa";
import Link from "next/link";
import { Routes } from "@/components/constants/enums";
import { getProjectById } from "@/server/db/getprojectById";
import { getProjects } from "@/server/db/ourWork";

const ProjectDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const projects = await getProjects();

  const project = await getProjectById(id);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 mt-16 ">
      {/* Header */}
      <header className="bg-white shadow-sm container">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div></div> {/* Empty div for balance */}
          <h1 className="text-xl md:text-2xl font-bold text-gray-800">
            {project.title || "معرض المشروع"}
          </h1>
          <Link
            href={`/${Routes.OURWORK}`}
            className="flex items-center text-gray-600 hover:text-primary transition gap-2"
          >
            <span className="font-medium">عودة للمشاريع</span>
            <FaArrowLeft className="text-lg" />
          </Link>
        </div>
      </header>

      <div className="container mx-auto">
        {/* Main Gallery */}
        <main className="container mx-auto px-4 py-8 ">
          {project.image && (
            <div className="mb-8 rounded-xl overflow-hidden  ">
              <div className="relative w-full h-96 md:h-full">
                {project.image && (
                  <Image
                    src={`${project.image}`}
                    alt={project.title || "صورة المشروع الرئيسية"}
                    className="text-center m-auto"
                    fill
                    priority
                  />
                )}
              </div>
            </div>
          )}

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.images.map((img, idx) => (
              <div
                key={idx}
                className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-64 md:h-80"
              >
                <Image
                  src={img.image || ""}
                  alt={`${project.title || "المشروع"} - صورة ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <FaExpand className="text-white text-2xl" />
                </div>
              </div>
            ))}
          </div>
        </main>

        {/* Navigation to Other Projects */}
        <section className="py-12">
          <div className="container mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8">
              استكشف مشاريع أخرى
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {projects
                .filter((p) => p.id !== project.id)
                .slice(0, 3)
                .map((p, idx) => (
                  <Link
                    href={`/${Routes.OURWORK}/${p.id}`}
                    key={p.id}
                    className="block group"
                  >
                    <div className="relative h-40 md:h-56 rounded-lg overflow-hidden">
                      <Image
                        src={p.image || ""}
                        alt={`${project.title || "المشروع"} - صورة ${idx + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    </div>
                    {p.title && (
                      <h3 className="mt-2 font-medium text-center group-hover:text-primary transition-colors">
                        {p.title}
                      </h3>
                    )}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
