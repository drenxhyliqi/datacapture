import { HeroHeader } from "@/components/header";
import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <div className="relative min-h-screen" style={{ backgroundColor: '#101210' }}>
      <HeroHeader />
      <HeroSection />
    </div>
  );
}
