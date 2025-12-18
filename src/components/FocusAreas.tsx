import { Building2, ClipboardCheck, PieChart, FileSpreadsheet, TrendingUp } from 'lucide-react';

export default function FocusAreas() {
  const areas = [
    {
      icon: Building2,
      title: 'Ownership of Real Estate Assets',
      description: 'Holding and controlling interests in property-owning entities.'
    },
    {
      icon: ClipboardCheck,
      title: 'Subsidiary Oversight & Governance',
      description: 'Ensuring operational discipline, compliance, and performance alignment.'
    },
    {
      icon: PieChart,
      title: 'Portfolio Strategy & Capital Allocation',
      description: 'Deploying capital efficiently across assets and ventures.'
    },
    {
      icon: FileSpreadsheet,
      title: 'Financial & Structural Planning',
      description: 'Optimizing legal, financial, and organizational frameworks.'
    },
    {
      icon: TrendingUp,
      title: 'Long-Term Value Creation',
      description: 'Focused on sustainable appreciation rather than short-term speculation.'
    }
  ];

  return (
    <section id="focus-areas" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-dust-dark mb-4 text-center">
          Our Core Focus Areas
        </h2>
        <p className="text-lg text-dust-dark/70 text-center mb-12 max-w-2xl mx-auto">
          Strategic pillars guiding our holding company operations
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="bg-dust-light/10 p-8 rounded-lg border border-dust-light/30 hover:border-collective-blue hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-collective-blue rounded-lg flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-dust-dark mb-3 leading-snug">
                  {area.title}
                </h3>
                <p className="text-dust-dark/70 leading-relaxed">
                  {area.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
