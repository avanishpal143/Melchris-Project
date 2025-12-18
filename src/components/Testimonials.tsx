export default function Testimonials() {
  const testimonials = [
    {
      name: 'David R.',
      role: 'New Jersey',
      quote: 'Melchris Holdings operates with clarity and discipline. Their structure inspires confidence.'
    },
    {
      name: 'Laura M.',
      role: 'Financial Advisor',
      quote: 'A well-organized holding company with strong governance principles.'
    },
    {
      name: 'Anthony K.',
      role: 'Property Partner',
      quote: 'They focus on sustainable value, not shortcuts.'
    },
    {
      name: 'Rachel S.',
      role: 'Legal Consultant',
      quote: 'Clean corporate structure and thoughtful long-term planning.'
    },
    {
      name: 'Brian T.',
      role: 'Investment Associate',
      quote: 'Professional oversight at the holding level makes all the difference.'
    }
  ];

  return (
    <section className="py-20 px-6 bg-dust-light/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-dust-dark mb-4 text-center">
          Client & Partner Testimonials
        </h2>
        <p className="text-lg text-dust-dark/70 text-center mb-12">
          Trusted by investors, advisors, and partners
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border border-dust-light/30 hover:border-collective-blue transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-friend-orange"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-dust-dark leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-semibold text-dust-dark">{testimonial.name}</p>
                <p className="text-sm text-dust-dark/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
