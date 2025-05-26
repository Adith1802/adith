import AboutSection from "../components/about-section";
import Footer from "../components/footer";
import HeroSection from "../components/hero-section";
import NavBar from "../components/navbar";
import Stat from "../components/stat-section";
import Timeline from "../components/timeline";



export default function Homepage() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <AboutSection />
      <Stat />
      <Timeline />
      <Footer />
    </div>
  );
}


