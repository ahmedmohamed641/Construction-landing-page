import HeroSection from "@components/HeroSection/HeroSection";
import Clients from "@components/Clients/Clients";
import Cards from "@components/Cards/Cards";
import Review from "@components/Review/Review";
import Contact from "@components/Contact/Contact";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Clients />
      <Cards />
      <Review />
      <Contact />
    </main>
  );
}
