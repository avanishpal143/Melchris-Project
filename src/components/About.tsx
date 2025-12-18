import { Shield, TrendingUp, FileText, Target, Users, Award, Globe, Zap, Building } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function About() {
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

    const element = document.getElementById('about');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Target,
      title: 'Strategic Oversight',
      description: 'Centralized decision-making for all subsidiary entities',
      color: 'from-collective-blue to-friend-orange'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Asset protection through structured ownership',
      color: 'from-friend-orange to-dust-rose'
    },
    {
      icon: FileText,
      title: 'Financial Discipline',
      description: 'Rigorous capital allocation and performance monitoring',
      color: 'from-dust-rose to-collective-mauve'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Planning',
      description: 'Sustainable growth focused on lasting value',
      color: 'from-collective-mauve to-collective-blue'
    }
  ];

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: Globe, value: '100+', label: 'Properties Managed' },
    { icon: Zap, value: '99%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23394855' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center bg-gradient-to-r from-collective-blue/10 to-friend-orange/10 rounded-full px-6 py-3 mb-6 border border-collective-blue/20 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <span className="text-dust-dark font-semibold">About Our Company</span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-serif font-bold text-dust-dark mb-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            About <span className="gradient-text">Melchris Holdings</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className={`${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500">
                <div className="aspect-[4/3] bg-gradient-to-br from-collective-blue via-dust-dark to-friend-orange flex items-center justify-center">
                  <div className="text-center text-white">
                    <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />
                    <p className="text-lg font-semibold">Modern Office Building</p>
                    <p className="text-sm opacity-80">Professional Real Estate Portfolio</p>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -right-6 glass-effect rounded-xl p-4 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-dust-dark">$50M+</div>
                  <div className="text-dust-dark/70 text-sm">Assets Under Management</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <p className="text-xl text-dust-dark/90 leading-relaxed mb-6 font-inter">
              Melchris Holdings is a <span className="font-bold text-collective-blue">real estate holding company</span> established to own, govern, and manage
              controlling interests in subsidiary entities operating across real estate assets and related businesses.
            </p>
            <p className="text-lg text-dust-dark/80 leading-relaxed mb-8 font-inter">
              As a parent organization, our role is to provide strategic oversight, financial discipline, risk
              management, and long-term planning—ensuring each subsidiary operates efficiently while
              aligning with a unified vision for sustainable growth.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 card-hover"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <Icon className="w-6 h-6 text-collective-blue mb-2" />
                    <div className="text-2xl font-bold text-dust-dark">{stat.value}</div>
                    <div className="text-sm text-dust-dark/70">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 card-hover ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-dust-dark mb-3 font-poppins">
                  {item.title}
                </h3>
                <p className="text-dust-dark/70 leading-relaxed font-inter">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


