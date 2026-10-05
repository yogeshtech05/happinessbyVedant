import { HeroSection } from "@/components/home/HeroSection";
import { OccasionsSection } from "@/components/home/OccasionsSection";
import { FeaturedPackagesSection } from "@/components/home/FeaturedPackagesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { EmotionalSection } from "@/components/home/EmotionalSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <OccasionsSection />
      <FeaturedPackagesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <EmotionalSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
