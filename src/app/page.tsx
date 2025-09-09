import AboutMe from './home/partials/about-me';
import CareerJourney from './home/partials/career-journey';
import ContactForm from './home/partials/contact-form';
import FAQ from './home/partials/faq';
import Footer from './home/partials/footer';
import Hero from './home/partials/hero';
import MyCoreSkills from './home/partials/my-core-skills';
import Navbar from './home/partials/navbar';
import Projects from './home/partials/projects';
import Testimonials from './home/partials/testimonials';
import WhyIStandOut from './home/partials/why-i-stand-out';

const Home = () => {
  return (
    <div className='overflow-hidden'>
      <Navbar />
      <Hero />
      <AboutMe />
      <CareerJourney />
      <MyCoreSkills />
      <WhyIStandOut />
      <Projects />
      <Testimonials />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
