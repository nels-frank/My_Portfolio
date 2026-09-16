import { getAllAnalytics } from '@/Action/analytics';
import DeveloperStory from '@/components/developer-story';
import FinalCTA from '@/components/final-cta';
import HeroSection from '@/components/hero-section';
import ProjectsPreview from '@/components/projects-preview';
import { ServicesPreview } from '@/components/services-preview';
import TechnologyPreview from '@/components/technology-preview';
import { WelcomeBanner } from '@/components/welcome-message';

export default async function Home() {
  const analytics = (await getAllAnalytics('')) || [];

  return (
    <main className="min-h-screen overflow-x-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="flex-1 space-y-8 px-3 pt-8 sm:space-y-10 sm:px-5 sm:pt-8 md:space-y-12 md:px-8 md:pt-16 lg:px-10 lg:pt-16">
        <WelcomeBanner />
        </div>
        <div className="flex-1 space-y-8 px-3 pt-4 sm:space-y-10 sm:px-5 sm:pt-8 md:space-y-12 md:px-8 md:pt-4 lg:px-10 lg:pt-6">
        <HeroSection />
        </div>
        <div className="flex-1 space-y-8 px-3 pt-4 sm:space-y-10 sm:px-5 sm:pt-8 md:space-y-12 md:px-8 md:pt-4 lg:px-10 lg:pt-16">
        <section id="dashboard-content" className="py-8 sm:py-10 md:py-12">
          <ProjectsPreview/>
        </section>

        <section id="developer-story">
          <div className="flex flex-col gap-4 px-[10px] md:px-[22px] lg:px-0">
          <div className="mx-auto w-full max-w-6xl">
          <DeveloperStory />
          </div>
          </div>
        </section>

        <section>
          <ServicesPreview />
        </section>

        <section>
          <TechnologyPreview />
        </section>

        <section>
          <FinalCTA />
        </section>
        </div>
    </main>
  );
}