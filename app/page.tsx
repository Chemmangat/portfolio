import HeroSection from "@/components/hero/HeroSection";
import MetricsCounter from "@/components/about/MetricsCounter";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Timeline from "@/components/timeline/Timeline";
import ContactSection from "@/components/contact/ContactSection";
import Header from "@/components/Header";
import PackagesSection from "@/components/packages/PackagesSection";
import ProductsSection from "@/components/products/ProductsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0c0e]">
      <Header />
      <HeroSection />
      <MetricsCounter />
      <ProductsSection />
      <PackagesSection />
      <ProjectsSection />
      <SkillsSection />
      <Timeline />
      <ContactSection />
    </main>
  );
}
