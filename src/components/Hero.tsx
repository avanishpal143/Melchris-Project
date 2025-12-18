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
    <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-dust-light/20 to-white">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-dust-dark mb-6 leading-tight">
          Strategic Real Estate Ownership.
          <br />
          Structured for Long-Term Value.
        </h1>

        <p className="text-xl text-dust-dark/80 mb-10 max-w-3xl mx-auto leading-relaxed">
          A parent holding company overseeing real estate assets and subsidiary businesses
          with disciplined governance and growth-focused strategy.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('structure')}
            className="bg-collective-blue text-white px-8 py-4 rounded-md hover:bg-dust-dark transition-all duration-300 font-semibold text-lg"
          >
            Explore Our Structure
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-transparent border-2 border-collective-blue text-collective-blue px-8 py-4 rounded-md hover:bg-collective-blue hover:text-white transition-all duration-300 font-semibold text-lg"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </section>
  );
}
