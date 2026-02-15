import HeroSection from "@/components/hero/HeroSection";
import MetricsCounter from "@/components/about/MetricsCounter";
import SkillsSection from "@/components/skills/SkillsSection";
import ProjectsSection from "@/components/projects/ProjectsSection";
import Timeline from "@/components/timeline/Timeline";
import ContactSection from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <MetricsCounter />
      <ProjectsSection />
      <SkillsSection />
      <Timeline />
      <ContactSection />
    </main>
  );
}
