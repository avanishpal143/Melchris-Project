import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What does Melchris Holdings do exactly?',
      answer: 'We own and manage controlling interests in real estate-related subsidiaries.'
    },
    {
      question: 'Do you manage properties directly?',
      answer: 'Operational management is handled by subsidiaries; oversight remains with the holding company.'
    },
    {
      question: 'Why use a holding company structure?',
      answer: 'It improves governance, asset protection, and long-term scalability.'
    },
    {
      question: 'Are you open to partnerships or acquisitions?',
      answer: 'Yes, strategic opportunities aligned with our vision are evaluated.'
    },
    {
      question: 'Where is Melchris Holdings based?',
      answer: 'Hamilton, New Jersey.'
    },
    {
      question: 'What is your investment horizon?',
      answer: 'Long-term, value-driven ownership.'
    }
  ];

  return (
    <section id="faqs" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-dust-dark mb-4 text-center">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-dust-dark/70 text-center mb-12">
          Investor & partner focused
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-dust-light/10 rounded-lg border border-dust-light/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-dust-light/10 transition-colors"
              >
                <span className="text-lg font-semibold text-dust-dark pr-8">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-collective-blue flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                    }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
              >
                <p className="px-6 pb-6 text-dust-dark/80 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
