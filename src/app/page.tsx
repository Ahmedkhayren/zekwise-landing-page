import { BusinessTypes } from "@/components/BusinessTypes";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HowItWorks } from "@/components/HowItWorks";
import { LeadForm } from "@/components/LeadForm";
import { PricingSection } from "@/components/PricingSection";
import { ProblemSolution } from "@/components/ProblemSolution";
import { SecuritySection } from "@/components/SecuritySection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Header />
      <HeroSection />
      <ProblemSolution />
      <BusinessTypes />
      <Features />
      <HowItWorks />
      <SecuritySection />
      <PricingSection />
      <LeadForm />
      <Footer />
    </main>
  );
}
