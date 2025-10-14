import HeroSection from '@/components/sections/hero';
import AboutMeSection from '@/components/sections/about-me';
import SkillsSection from '@/components/sections/skills';
import ExperienceSection from '@/components/sections/work'; // ✅ this is your experience section
import ProjectsSection from '@/components/sections/projects'; // ✅ make sure this file exists
import ContactSection from '@/components/sections/contact';


export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutMeSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}

