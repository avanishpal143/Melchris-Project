import { Check } from 'lucide-react';

export default function WhyMelchris() {
  const reasons = [
    'Clear parent–subsidiary governance model',
    'Risk-managed asset ownership',
    'Long-term investment philosophy',
    'Disciplined capital allocation',
    'Transparent structure',
    'Scalable real estate platform'
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-dust-dark mb-12 text-center">
          Why Melchris Holdings
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-lg bg-dust-light/10 border border-dust-light/30 hover:border-collective-blue transition-all duration-300"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-collective-blue rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
              </div>
              <p className="text-dust-dark text-lg font-medium leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
