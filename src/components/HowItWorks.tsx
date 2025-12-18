export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Asset or Entity Acquisition',
      description: 'Melchris Holdings acquires controlling interest in a property or operating company.'
    },
    {
      number: '02',
      title: 'Subsidiary Formation or Integration',
      description: 'Each asset operates under a structured subsidiary entity.'
    },
    {
      number: '03',
      title: 'Central Oversight',
      description: 'Financial, legal, and strategic decisions are governed at the holding level.'
    },
    {
      number: '04',
      title: 'Performance Monitoring',
      description: 'Ongoing evaluation of asset performance and risk exposure.'
    },
    {
      number: '05',
      title: 'Growth & Optimization',
      description: 'Reinvestment, restructuring, or expansion based on long-term objectives.'
    }
  ];

  return (
    <section id="structure" className="py-20 px-6 bg-dust-light/10">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-dust-dark mb-4 text-center">
          How Our Holding Structure Works
        </h2>
        <p className="text-lg text-dust-dark/70 text-center mb-16 max-w-2xl mx-auto">
          A systematic approach to real estate ownership and governance
        </p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 border border-dust-light/30 hover:border-collective-blue transition-all duration-300 flex gap-6 items-start group"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-collective-blue text-white rounded-lg flex items-center justify-center font-bold text-xl group-hover:bg-dust-dark transition-colors">
                {step.number}
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-dust-dark mb-3">
                  {step.title}
                </h3>
                <p className="text-dust-dark/70 text-lg leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
