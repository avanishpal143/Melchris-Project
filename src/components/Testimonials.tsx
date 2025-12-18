import { Quote, Star, Users, Award } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Testimonials() {
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

    const element = document.querySelector('#testimonials');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: 'David Richardson',
      role: 'Real Estate Investor',
      location: 'New Jersey',
      quote: 'Melchris Holdings operates with clarity and discipline. Their structure inspires confidence and their long-term approach aligns perfectly with my investment goals.',
      avatar: 'DR',
      rating: 5
    },
    {
      name: 'Laura Martinez',
      role: 'Financial Advisor',
      location: 'New York',
      quote: 'A well-organized holding company with strong governance principles. Their transparency and professional oversight make them a trusted partner.',
      avatar: 'LM',
      rating: 5
    },
    {
      name: 'Anthony Kim',
      role: 'Property Partner',
      location: 'Pennsylvania',
      quote: 'They focus on sustainable value, not shortcuts. The strategic planning and risk management approach has exceeded our expectations.',
      avatar: 'AK',
      rating: 5
    },
    {
      name: 'Rachel Stevens',
      role: 'Legal Consultant',
      location: 'Delaware',
      quote: 'Clean corporate structure and thoughtful long-term planning. Their attention to compliance and governance details is impressive.',
      avatar: 'RS',
      rating: 5
    },
    {
      name: 'Brian Thompson',
      role: 'Investment Associate',
      location: 'Maryland',
      quote: 'Professional oversight at the holding level makes all the difference. Their disciplined approach to capital allocation is remarkable.',
      avatar: 'BT',
      rating: 5
    }
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.9', label: 'Average Rating' }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 bg-gradient-to-br from-dust-light/10 via-white to-collective-blue/5 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <Quote className="absolute top-20 left-10 w-24 h-24 text-collective-blue animate-float" />
        <Quote className="absolute bottom-20 right-10 w-16 h-16 text-friend-orange animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center bg-gradient-to-r from-collective-blue/10 to-friend-orange/10 rounded-full px-6 py-3 mb-6 border border-collective-blue/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-dust-dark font-semibold">Client Testimonials</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-serif font-bold text-dust-dark mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className={`text-xl text-dust-dark/70 max-w-3xl mx-auto leading-relaxed font-inter ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Trusted by investors, advisors, and partners across the region
          </p>
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-3 gap-8 mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-collective-blue to-friend-orange w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-dust-dark mb-2">{stat.value}</div>
                <div className="text-dust-dark/70 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1 + 0.6}s` }}
            >
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-6">
                <Quote className="w-8 h-8 text-collective-blue/30" />
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-friend-orange fill-current"
                    />
                  ))}
                </div>
              </div>

              {/* Quote */}
              <p className="text-dust-dark leading-relaxed mb-6 italic font-inter text-lg">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-collective-blue to-friend-orange rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-bold text-dust-dark font-poppins">{testimonial.name}</p>
                  <p className="text-sm text-dust-dark/70">{testimonial.role}</p>
                  <p className="text-xs text-collective-blue font-medium">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-dust-dark mb-4 font-serif">Join Our Satisfied Clients</h3>
            <p className="text-dust-dark/70 mb-6 font-inter">Experience the difference of working with a professionally managed holding company</p>
            <button className="bg-gradient-to-r from-collective-blue to-friend-orange text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
