import { MapPin, Mail, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:Mark@melchrisholdings.com?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Address',
      content: '1 North Johnston Ave., Suite A110\nHamilton, NJ 08609',
      color: 'from-collective-blue to-friend-orange'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'Mark@melchrisholdings.com',
      link: 'mailto:Mark@melchrisholdings.com',
      color: 'from-friend-orange to-dust-rose'
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+1 (234) 567-8900',
      link: 'tel:+1234567890',
      color: 'from-dust-rose to-collective-mauve'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM\nSat: 10:00 AM - 2:00 PM',
      color: 'from-collective-mauve to-collective-blue'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-gradient-to-br from-dust-light/10 via-white to-collective-blue/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <MessageCircle className="absolute top-20 left-10 w-20 h-20 text-collective-blue animate-float" />
        <Send className="absolute bottom-20 right-10 w-16 h-16 text-friend-orange animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center bg-gradient-to-r from-collective-blue/10 to-friend-orange/10 rounded-full px-6 py-3 mb-6 border border-collective-blue/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-dust-dark font-semibold">Get In Touch</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-serif font-bold text-dust-dark mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Contact <span className="gradient-text">Our Team</span>
          </h2>
          <p className={`text-xl text-dust-dark/70 max-w-3xl mx-auto leading-relaxed font-inter ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Let's discuss strategic opportunities and explore how we can work together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <h3 className="text-3xl font-bold text-dust-dark mb-8 font-serif">
              Ready to Connect?
            </h3>
            <p className="text-lg text-dust-dark/80 mb-8 leading-relaxed font-inter">
              We welcome inquiries from investors, partners, and advisors interested in strategic
              real estate opportunities and structured asset ownership.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex items-start gap-4 group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="font-bold text-dust-dark mb-2 font-poppins">{item.title}</p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="text-collective-blue hover:text-friend-orange transition-colors duration-300 font-medium"
                        >
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-dust-dark/70 leading-relaxed whitespace-pre-line font-inter">
                          {item.content}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info Card */}
            <div className="bg-gradient-to-br from-collective-blue to-friend-orange rounded-2xl p-8 text-white shadow-2xl">
              <h4 className="text-2xl font-bold mb-4 font-serif">Why Choose Melchris Holdings?</h4>
              <ul className="space-y-3 font-inter">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>15+ years of real estate expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Disciplined governance approach</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Long-term value creation focus</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span>Strategic portfolio management</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="bg-white rounded-2xl p-8 shadow-2xl border border-gray-100">
              <h3 className="text-2xl font-bold text-dust-dark mb-6 font-serif">Send us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-dust-dark mb-3 font-poppins">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-collective-blue focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-dust-dark mb-3 font-poppins">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-collective-blue focus:border-transparent transition-all duration-300 font-inter"
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-dust-dark mb-3 font-poppins">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-collective-blue focus:border-transparent resize-none transition-all duration-300 font-inter"
                    placeholder="Tell us about your inquiry or how we can help you..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-collective-blue to-friend-orange text-white py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-bold text-lg transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>

              <p className="text-sm text-dust-dark/60 mt-4 text-center font-inter">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
