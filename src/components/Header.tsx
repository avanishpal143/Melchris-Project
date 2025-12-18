import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '/melchrislogo.png'
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
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${isScrolled
        ? 'bg-friend-dark/95 shadow-xl border-b border-white/10'
        : 'bg-friend-dark/90'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div
          className="flex items-center group cursor-pointer transform transition-all duration-300 hover:scale-105"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="flex items-center">
            <img
              className="h-10 md:h-12 w-auto max-w-[160px] md:max-w-[200px] object-contain logo-header"
              src={logo}
              alt='Melchris Holdings Logo'
            />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {[
            { label: 'About', id: 'about' },
            { label: 'Structure', id: 'structure' },
            { label: 'Focus Areas', id: 'focus-areas' },
            { label: 'FAQs', id: 'faqs' }
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/90 hover:text-white px-4 py-2 rounded-lg transition-all duration-300 font-medium hover:bg-white/10 transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-collective-blue to-friend-orange text-white px-6 py-2.5 rounded-lg hover:shadow-lg transition-all duration-300 font-medium transform hover:scale-105 ml-4"
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white hover:text-dust-light transition-all duration-300 p-2 rounded-lg hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 transform rotate-180 transition-transform duration-300" />
          ) : (
            <Menu className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-friend-dark/95 backdrop-blur-md border-t border-white/10 transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
      >
        <nav className="flex flex-col px-6 py-4 space-y-2">
          {[
            { label: 'About', id: 'about' },
            { label: 'Structure', id: 'structure' },
            { label: 'Focus Areas', id: 'focus-areas' },
            { label: 'FAQs', id: 'faqs' }
          ].map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-white/90 hover:text-white hover:bg-white/10 transition-all duration-300 font-medium text-left py-3 px-4 rounded-lg transform hover:translate-x-2"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-gradient-to-r from-collective-blue to-friend-orange text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-medium text-center mt-4 transform hover:scale-105"
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
}
