import { Shield, TrendingUp, FileText, Target } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Target,
      title: 'Strategic Oversight',
      description: 'Centralized decision-making for all subsidiary entities'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Asset protection through structured ownership'
    },
    {
      icon: FileText,
      title: 'Financial Discipline',
      description: 'Rigorous capital allocation and performance monitoring'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Planning',
      description: 'Sustainable growth focused on lasting value'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold text-dust-dark mb-6">
              About Melchris Holdings
            </h2>
            <p className="text-lg text-dust-dark/80 leading-relaxed mb-4">
              Melchris Holdings is a <strong>real estate holding company</strong> established to own, govern, and manage
              controlling interests in subsidiary entities operating across real estate assets and related businesses.
            </p>
            <p className="text-lg text-dust-dark/80 leading-relaxed">
              As a parent organization, our role is to provide strategic oversight, financial discipline, risk
              management, and long-term planning—ensuring each subsidiary operates efficiently while
              aligning with a unified vision for sustainable growth.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-dust-light/10 p-6 rounded-lg border border-dust-light/30 hover:border-collective-blue transition-all duration-300"
                >
                  <Icon className="w-8 h-8 text-collective-blue mb-3" strokeWidth={1.5} />
                  <h3 className="text-sm font-semibold text-dust-dark mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-dust-dark/70 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
