import { MapPin, Mail } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:Mark@melchrisholdings.com?subject=Inquiry from ${formData.name}&body=${formData.message}`;
  };

  return (
    <section id="contact" className="py-20 px-6 bg-dust-light/10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-serif font-bold text-dust-dark mb-4 text-center">
          Contact Us
        </h2>
        <p className="text-lg text-dust-dark/70 text-center mb-12">
          Let's discuss strategic opportunities
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-dust-dark mb-8">
              Get in Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-collective-blue rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-dust-dark mb-1">Office Address</p>
                  <p className="text-dust-dark/70 leading-relaxed">
                    1 North Johnston Ave., Suite A110
                    <br />
                    Hamilton, NJ 08609
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-collective-blue rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold text-dust-dark mb-1">Email</p>
                  <a
                    href="mailto:Mark@melchrisholdings.com"
                    className="text-collective-blue hover:underline"
                  >
                    Mark@melchrisholdings.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-lg border border-dust-light/30">
              <p className="text-dust-dark/80 leading-relaxed">
                We welcome inquiries from investors, partners, and advisors interested in strategic
                real estate opportunities and structured asset ownership.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg border border-dust-light/30 shadow-sm">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-semibold text-dust-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 border border-dust-light/40 rounded-md focus:outline-none focus:ring-2 focus:ring-collective-blue focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-dust-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 border border-dust-light/40 rounded-md focus:outline-none focus:ring-2 focus:ring-collective-blue focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-dust-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-dust-light/40 rounded-md focus:outline-none focus:ring-2 focus:ring-collective-blue focus:border-transparent resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-collective-blue text-white py-3 rounded-md hover:bg-dust-dark transition-colors font-semibold"
              >
                Connect With Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
