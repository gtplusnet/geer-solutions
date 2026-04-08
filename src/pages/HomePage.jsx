import HeroSection from '../components/sections/HeroSection';
import ServicesOverview from '../components/sections/ServicesOverview';
import AboutPreview from '../components/sections/AboutPreview';
import StatsBar from '../components/sections/StatsBar';
import CTABanner from '../components/sections/CTABanner';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesOverview />
      <AboutPreview />
      <StatsBar />
      <CTABanner />
    </>
  );
}
