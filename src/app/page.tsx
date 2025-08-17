import Hero from "../components/hero";
import FlavorCarousel from "../components/flavor-carousel";
// removed BrandStory, MaterialsTech, FlavorTicker, ProductShowcase, LifestyleReel per request
import LabStandards from "../components/lab-standards";
import Newsletter from "../components/newsletter";
// Shoutouts section removed per request
import Footer from "../components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <FlavorCarousel />
      
      <LabStandards />
      <Newsletter />
      <Footer />
    </main>
  );
}
