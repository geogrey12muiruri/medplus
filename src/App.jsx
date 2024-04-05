import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter
import Contact from "./components/contact/Contact";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import CurriculumSection from "./components/carriculum/Carriculum";
import PillarsSection from "./components/pillars/Pillars";
import AccreditationSection from "./components/accreditation/Accreditation";
import CollaborationHeroSection from "./components/collaborations/CollaborationSection";
import ServicesSection from "./components/services/ServiceSection";
import Blogs from "./components/blogs/Blogs";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <Router>
        <Contact />
        <Navbar />
        <Hero />
        <ServicesSection />
        <Blogs />
        <Footer />
        {/* <PillarsSection />
        <AccreditationSection />
        <CollaborationHeroSection /> */}



      </Router>
    </>
  );
}

export default App;
