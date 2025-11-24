import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { ProductOverview } from './components/ProductOverview';
import { KeyFeatures } from './components/KeyFeatures';
import { Manufacturing } from './components/Manufacturing';
import { ProjectShowcase } from './components/ProjectShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-[#2C3E50] antialiased selection:bg-[#0066FF] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <ProductOverview />
        <KeyFeatures />
        <Manufacturing />
        <ProjectShowcase />
        <WhyChooseUs />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
