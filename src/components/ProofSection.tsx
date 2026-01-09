import { motion } from 'motion/react';
import { Code2, Database, Zap, TrendingUp } from 'lucide-react';

export function ProofSection() {
  const caseStudies = [
    {
      businessType: 'Real Estate Agency',
      problem: 'Leads were getting lost in email. Manual follow-ups took 8+ hours weekly.',
      solution: 'Built a custom CRM with automated lead capture, SMS/email sequences, and property matching algorithm.',
      tech: ['Laravel', 'MySQL', 'Twilio API', 'Vue.js'],
      expectedOutcome: '+250% lead response rate, 85% reduction in manual work',
      icon: Home,
    },
    {
      businessType: 'E-commerce Brand',
      problem: 'Inventory management across 3 platforms was chaotic. Customer data scattered.',
      solution: 'Created centralized dashboard with real-time inventory sync, automated reorder alerts, and customer analytics.',
      tech: ['Node.js', 'MongoDB', 'Shopify API', 'React'],
      expectedOutcome: '0 stockouts, +40% repeat purchase rate',
      icon: ShoppingBag,
    },
    {
      businessType: 'Professional Services Firm',
      problem: 'Booking system was clunky. Clients complained. No-shows were common.',
      solution: 'Built smart booking platform with calendar sync, automated reminders, and payment integration.',
      tech: ['Laravel', 'PostgreSQL', 'Stripe', 'Google Calendar API'],
      expectedOutcome: '70% reduction in no-shows, +$15k monthly revenue',
      icon: Briefcase,
    },
  ];

  return (
    <section className="py-32 px-6 relative" id="proof">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Case{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              Simulations
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Real problems. Strategic solutions. Measurable outcomes.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="grid md:grid-cols-[1fr_2fr_1fr] gap-8">
                {/* Business Type & Problem */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
                      <study.icon className="w-5 h-5 text-red-400" />
                    </div>
                    <h3 className="text-xl">{study.businessType}</h3>
                  </div>
                  <div className="text-sm text-red-400 mb-2">Problem:</div>
                  <p className="text-gray-400">{study.problem}</p>
                </div>

                {/* Solution & Tech Stack */}
                <div>
                  <div className="text-sm text-cyan-400 mb-2">Solution:</div>
                  <p className="text-gray-300 mb-4">{study.solution}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-400 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Expected Outcome */}
                <div className="flex flex-col justify-center">
                  <div className="text-sm text-lime-400 mb-2">Expected Outcome:</div>
                  <div className="bg-gradient-to-br from-lime-500/10 to-green-500/10 border border-lime-500/30 rounded-lg p-4">
                    <TrendingUp className="w-5 h-5 text-lime-400 mb-2" />
                    <p className="text-lime-300">{study.expectedOutcome}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gray-900/50 border border-cyan-500/30 rounded-lg p-6">
            <p className="text-gray-400">
              These are{' '}
              <span className="text-cyan-400">simulations based on real business scenarios</span>.
              <br />
              Your results will be tailored to your specific needs and goals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Icon components for case studies
function Home({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  );
}

function ShoppingBag({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  );
}

function Briefcase({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
    </svg>
  );
}