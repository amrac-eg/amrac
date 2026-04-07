import { getServices } from "@/server/db/services";
import AboutSection from "./_components/AboutSection";
import HeroSection from "./_components/HeroSection";
import HomeServicesSection from "./_components/HomeServicesSection";
import MapSection from "./_components/MapSection";
import ProjectsSection from "./_components/ProjectsSection";
import WhySection from "./_components/WhySection";
import { getProjects } from "@/server/db/ourWork";
import AboutSection2 from "./_components/AboutSection2";

export default async function Home() {
  const services = await getServices();
  const ourWork = await getProjects();
  return (
    <>
      <HeroSection />
      <AboutSection2 />
      <AboutSection />
      <HomeServicesSection services={services} />
      <WhySection />
      <ProjectsSection ourworks={ourWork} />
      <MapSection />
    </>
  );
}
