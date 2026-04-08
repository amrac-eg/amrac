import { getServices } from "@/server/db/services";
import AboutSection from "../_components/AboutSection";
import HeroSection from "../_components/HeroSection";
import HomeServicesSection from "../_components/HomeServicesSection";
import MapSection from "../_components/MapSection";
import ProjectsSection from "../_components/ProjectsSection";
import WhySection from "../_components/WhySection";
import { getProjects } from "@/server/db/ourWork";
import AboutSection2 from "../_components/AboutSection2";
import { getCurrentLocale } from "@/lib/getCurrentLocale";
import getTrans from "@/lib/translation";

export default async function Home() {
  const services = await getServices();
  const ourWork = await getProjects();
  const locale = await getCurrentLocale();
  const translations = await getTrans(locale);

  return (
    <>
      <HeroSection locale={locale}  />
      <AboutSection2 />
      <AboutSection />
      <HomeServicesSection services={services} />
      <WhySection />
      <ProjectsSection ourworks={ourWork} />
      <MapSection />
    </>
  );
}
