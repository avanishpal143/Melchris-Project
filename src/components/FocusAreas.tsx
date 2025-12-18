import { Building2, ClipboardCheck, PieChart, FileSpreadsheet, TrendingUp, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function FocusAreas() {
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

    const element = document.getElementById('focus-areas');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const areas = [
    {
      icon: Building2,
      title: 'Ownership of Real Estate Assets',
      description: 'Holding and controlling interests in property-owning entities.',
      color: 'from-collective-blue to-friend-orange',
      stats: '$50M+ Assets'
    },
    {
      icon: ClipboardCheck,
      title: 'Subsidiary Oversight & Governance',
      description: 'Ensuring operational discipline, compliance, and performance alignment.',
      color: 'from-friend-orange to-dust-rose',
      stats: '15+ Subsidiaries'
    },
    {
      icon: PieChart,
      title: 'Portfolio Strategy & Capital Allocation',
      description: 'Deploying capital efficiently across assets and ventures.',
      color: 'from-dust-rose to-collective-mauve',
      stats: '25% ROI Average'
    },
    {
      icon: FileSpreadsheet,
      title: 'Financial & Structural Planning',
      description: 'Optimizing legal, financial, and organizational frameworks.',
      color: 'from-collective-mauve to-friend-dark',
      stats: '100% Compliance'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Value Creation',
      description: 'Focused on sustainable appreciation rather than short-term speculation.',
      color: 'from-friend-dark to-collective-blue',
      stats: '15+ Years Growth'
    }
  ];

  return (
    <section id="focus-areas" className="py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-dust-light/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 animate-float">
          <Building2 className="w-20 h-20 text-collective-blue" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <TrendingUp className="w-16 h-16 text-friend-orange" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center bg-gradient-to-r from-collective-blue/10 to-friend-orange/10 rounded-full px-6 py-3 mb-6 border border-collective-blue/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-dust-dark font-semibold">Our Expertise</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-serif font-bold text-dust-dark mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Core <span className="gradient-text">Focus Areas</span>
          </h2>
          <p className={`text-xl text-dust-dark/70 max-w-3xl mx-auto leading-relaxed font-inter ${isVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            Strategic pillars guiding our holding company operations and ensuring sustainable growth across all portfolio entities
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>

                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-dust-dark leading-snug font-poppins flex-1">
                    {area.title}
                  </h3>
                  <ArrowRight className="w-5 h-5 text-collective-blue opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                </div>

                <p className="text-dust-dark/70 leading-relaxed mb-4 font-inter">
                  {area.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm font-semibold text-collective-blue">{area.stats}</span>
                  <div className="w-8 h-1 bg-gradient-to-r from-collective-blue to-friend-orange rounded-full"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
          <div className="bg-gradient-to-r from-collective-blue to-friend-orange rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4 font-serif">Ready to Learn More?</h3>
            <p className="text-xl mb-6 opacity-90 font-inter">Discover how our strategic approach can benefit your real estate investments</p>
            <button className="bg-white text-collective-blue px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
