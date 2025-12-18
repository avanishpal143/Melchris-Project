import { ArrowRight, Building, TrendingUp, Shield } from 'lucide-react';

export default function Hero() {
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
  };

  return (
    <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-friend-dark via-dust-dark to-collective-blue overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Building className="w-16 h-16 text-white" />
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '1s' }}>
          <TrendingUp className="w-12 h-12 text-white" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
          <Shield className="w-14 h-14 text-white" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left animate-slide-in-left">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20">
              <span className="text-white/90 text-sm font-medium">🏢 Real Estate Holdings</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Strategic Real Estate
              <span className="gradient-text block">Ownership</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 max-w-2xl leading-relaxed font-inter">
              A parent holding company overseeing real estate assets and subsidiary businesses
              with disciplined governance and growth-focused strategy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection('structure')}
                className="group bg-gradient-to-r from-collective-blue to-friend-orange text-white px-8 py-4 rounded-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg flex items-center justify-center transform hover:scale-105"
              >
                Explore Our Structure
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="glass-effect text-white px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 font-semibold text-lg transform hover:scale-105"
              >
                Contact Our Team
              </button>
            </div>
          </div>

          {/* Right Content - Visual Elements */}
          <div className="relative animate-slide-in-right">
            <div className="relative">
              {/* Main Card */}
              <div className="glass-effect rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-500">
                <div className="bg-gradient-to-br from-collective-blue to-friend-orange rounded-xl p-6 text-white">
                  <h3 className="text-2xl font-bold mb-4">Portfolio Overview</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Total Assets</span>
                      <span className="font-bold">$XX.XM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Properties</span>
                      <span className="font-bold">XX+</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Growth Rate</span>
                      <span className="font-bold text-green-300">+XX%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 glass-effect rounded-xl p-4 animate-bounce-in" style={{ animationDelay: '0.5s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">15+</div>
                  <div className="text-white/70 text-sm">Years Experience</div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-effect rounded-xl p-4 animate-bounce-in" style={{ animationDelay: '1s' }}>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-white/70 text-sm">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
