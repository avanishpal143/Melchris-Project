import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center py-2">
          <img
            src="/melchrislogo.png"
            alt="Melchris Holdings"
            className="h-12 w-auto px-2"
            style={{ maxWidth: '220px' }}
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-dust-dark hover:text-collective-blue transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('structure')}
            className="text-dust-dark hover:text-collective-blue transition-colors font-medium"
          >
            Structure
          </button>
          <button
            onClick={() => scrollToSection('focus-areas')}
            className="text-dust-dark hover:text-collective-blue transition-colors font-medium"
          >
            Focus Areas
          </button>
          <button
            onClick={() => scrollToSection('faqs')}
            className="text-dust-dark hover:text-collective-blue transition-colors font-medium"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-collective-blue text-white px-6 py-2.5 rounded-md hover:bg-dust-dark transition-colors font-medium"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-dust-dark hover:text-collective-blue transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-white border-t border-dust-light/30 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-4">
          <button
            onClick={() => scrollToSection('about')}
            className="text-dust-dark hover:text-collective-blue transition-colors font-medium text-left py-2"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('structure')}
            className="text-dust-dark hover:text-collective-blue transition-colors font-medium text-left py-2"
          >
            Structure
          </button>
          <button
            onClick={() => scrollToSection('focus-areas')}
            className="text-dust-dark hover:text-collective-blue transition-colors font-medium text-left py-2"
          >
            Focus Areas
          </button>
          <button
            onClick={() => scrollToSection('faqs')}
            className="text-dust-dark hover:text-collective-blue transition-colors font-medium text-left py-2"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-collective-blue text-white px-6 py-3 rounded-md hover:bg-dust-dark transition-colors font-medium text-center"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
