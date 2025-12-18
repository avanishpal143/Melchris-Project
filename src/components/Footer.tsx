import { Mail, MapPin, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';
import logo from '/melchrislogo.png'
export default function Footer() {
  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Facebook, href: '#', label: 'Facebook' }
  ];

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Structure', href: '#structure' },
    { label: 'Focus Areas', href: '#focus-areas' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-gradient-to-br from-friend-dark via-dust-dark to-collective-blue text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <img
                className="h-8 md:h-10 w-auto max-w-[140px] md:max-w-[180px] object-contain logo-footer"
                src={logo}
                alt='Melchris Holdings Logo'
              />
            </div>
            <p className="text-white/80 text-lg leading-relaxed mb-6 max-w-md font-inter">
              A real estate holding company focused on strategic ownership, governance, and long-term value creation through disciplined investment strategies.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="bg-white/10 backdrop-blur-md p-3 rounded-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-110 border border-white/20"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors duration-300 font-medium hover:translate-x-2 transform inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-xl mb-6 text-white">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-collective-blue mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white/80 text-sm leading-relaxed">
                    1 North Johnston Ave., Suite A110<br />
                    Hamilton, NJ 08609
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-collective-blue flex-shrink-0" />
                <a
                  href="mailto:Mark@melchrisholdings.com"
                  className="text-white/80 hover:text-white text-sm transition-colors duration-300"
                >
                  Mark@melchrisholdings.com
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-collective-blue flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-white/80 hover:text-white text-sm transition-colors duration-300"
                >
                  +1 (234) 567-8900
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm font-inter">
              © {new Date().getFullYear()} Melchris Holdings. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
