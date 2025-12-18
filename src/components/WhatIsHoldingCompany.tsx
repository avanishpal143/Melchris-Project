import { Building2, Lock, BarChart3, Network, TrendingUp } from 'lucide-react';

export default function WhatIsHoldingCompany() {
  const benefits = [
    {
      icon: Lock,
      title: 'Asset protection and risk isolation'
    },
    {
      icon: BarChart3,
      title: 'Centralized financial control'
    },
    {
      icon: Target,
      title: 'Strategic decision-making at group level'
    },
    {
      icon: TrendingUp,
      title: 'Long-term portfolio optimization'
    },
    {
      icon: Network,
      title: 'Scalable expansion through subsidiaries'
    }
  ];

  return (
    <section className="py-20 px-6 bg-dust-light/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-dust-dark mb-6 text-center">
          What Is a Real Estate Holding Company?
        </h2>

        <p className="text-lg text-dust-dark/80 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
          A real estate holding company functions as a <strong>parent entity</strong> that owns equity stakes in one or
          more operating companies or property-owning entities.
        </p>

        <div className="bg-white rounded-xl p-8 shadow-sm border border-dust-light/30">
          <h3 className="text-2xl font-semibold text-dust-dark mb-8 text-center">
            Our Structure Enables:
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-dust-light/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-collective-blue/10 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-collective-blue" strokeWidth={1.5} />
                  </div>
                  <p className="text-dust-dark font-medium pt-2">
                    {benefit.title}
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

function Target({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
