import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import QuoteSection from "@/components/sections/QuoteSection";
import MembersSection from "@/components/sections/MembersSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFDF9] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <MembersSection />
      <Footer />
    </main>
  );
}