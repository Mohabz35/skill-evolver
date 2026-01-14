import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { SkillDNASection } from "@/components/SkillDNASection";
import { BridgeSystemSection } from "@/components/BridgeSystemSection";
import { AIFeaturesSection } from "@/components/AIFeaturesSection";
import { PricingSection } from "@/components/PricingSection";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <SkillDNASection />
      <BridgeSystemSection />
      <AIFeaturesSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
