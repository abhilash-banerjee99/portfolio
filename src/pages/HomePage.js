import Nav from '../components/nav/Nav';
import HeroSection from '../components/hero-section/HeroSection';
import WorkSection from '../components/work-section/workSection';
import AboutSection from '../components/about-section/aboutSection';
import ContactSection from '../components/contact-section/contactSection';
import Footer from '../components/footer/footer';

const HomePage = () => {
  return (
    <>
      <Nav />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
