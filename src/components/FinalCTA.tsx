import { motion } from 'motion/react';
import { Calendar, MessageCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';


export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    challenge: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();

      emailjs
        .send(
          'service_bet27b7',     // 🔴 replace
          'template_n1z6cpw',    // 🔴 replace
          {
            name: formData.name,
            email: formData.email,
            business: formData.business,
            challenge: formData.challenge,
          },
          'e5eDLpqB65CS5Cq38'      // 🔴 replace
        )
        .then(
          () => {
            setSubmitted(true);
            setFormData({
              name: '',
              email: '',
              business: '',
              challenge: '',
            });
            setTimeout(() => setSubmitted(false), 3000);
          },
          (error) => {
            console.error('EmailJS Error:', error);
            alert('Something went wrong. Please try again.');
          }
        );
    };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Let's design a system that{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              grows your business
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Book a free consultation and get a custom system audit for your business
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Quick Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6">
              <h3 className="text-2xl mb-6">Quick Connect</h3>

              <div className="space-y-4">
                <a
                  href="https://calendly.com/ahmedchishty44/30min"
                  target="_blank"
                  rel="noopener noreferrer"

                  className="group flex items-center gap-4 p-4 bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-lg hover:from-cyan-500/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">Book a Free Call</div>
                    <div className="text-sm text-gray-400">30-min strategy session</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="https://wa.me/923278191054?text=Hi%21%20I%20came%20across%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20potential%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-gradient-to-r from-lime-500/10 to-transparent border border-lime-500/30 rounded-lg hover:from-lime-500/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-lime-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-6 h-6 text-lime-400" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold mb-1">WhatsApp</div>
                    <div className="text-sm text-gray-400">Quick questions? Message me</div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-lime-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-800">
                <div className="text-sm text-gray-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-lime-500 animate-pulse" />
                    <span>Usually responds within 2 hours</span>
                  </div>
                  <div>Based in Pakistan • Serving clients worldwide</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
          >
            <h3 className="text-2xl mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="john@business.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="business" className="block text-sm text-gray-400 mb-2">
                  Business Type
                </label>
                <input
                  type="text"
                  id="business"
                  value={formData.business}
                  onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="E-commerce, Real Estate, etc."
                  required
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm text-gray-400 mb-2">
                  What's your biggest challenge?
                </label>
                <textarea
                  id="challenge"
                  value={formData.challenge}
                  onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  rows={4}
                  placeholder="Tell me about what's holding your business back..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 group"
              >
                <span>{submitted ? 'Message Sent!' : 'Send Message'}</span>
                {!submitted && (
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-12 border-t border-gray-800"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} Amshid. Building systems that grow businesses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
