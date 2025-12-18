import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhatIsHoldingCompany from './components/WhatIsHoldingCompany';
import FocusAreas from './components/FocusAreas';
import HowItWorks from './components/HowItWorks';
import WhyMelchris from './components/WhyMelchris';
import Testimonials from './components/Testimonials';
import FAQs from './components/FAQs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <About />
      <WhatIsHoldingCompany />
      <FocusAreas />
      <HowItWorks />
      <WhyMelchris />
      <Testimonials />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
