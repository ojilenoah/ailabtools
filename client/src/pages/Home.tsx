import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesGrid } from "@/components/features-grid";
import { PlatformHighlights } from "@/components/platform-highlights";
import { BenefitsSection } from "@/components/benefits-section";
import { Footer } from "@/components/footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>AI for Simulating Laboratory Experiments</title>
        <meta name="description" content="Explore, learn, and innovate in safe, virtual environments powered by intelligent simulation." />
      </Helmet>
      
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <FeaturesGrid />
          <PlatformHighlights />
          <BenefitsSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
