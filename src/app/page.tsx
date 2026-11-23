import { HeroSection } from "@/components/home/HeroSection";
import { OccasionsSection } from "@/components/home/OccasionsSection";
import { FeaturedPackagesSection } from "@/components/home/FeaturedPackagesSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { EmotionalSection } from "@/components/home/EmotionalSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";
import { getStorefrontSummary } from "@/lib/storefront";

export default async function HomePage() {
  const { categories, testimonials } = await getStorefrontSummary();
  return (
    <>
      <HeroSection />
      <OccasionsSection occasions={categories} />
      <FeaturedPackagesSection />
      <HowItWorksSection />
      <WhyChooseUsSection />
      <EmotionalSection />
      <TestimonialsSection testimonials={testimonials} />
      <CTASection />
    </>
  );
}
