import { motion } from 'motion/react';
import { Puzzle, Cog, Wrench, Calculator } from 'lucide-react';
import { useState } from 'react';
import { BusinessTypeSelector } from './BusinessTypeSelector';
import { ROICalculator } from './ROICalculator';

export function ServicesAsSolutions() {
  const [showCalculator, setShowCalculator] = useState(false);

  const solutions = [
    {
      icon: Puzzle,
      title: "Custom Business Systems",
      problem: "Your website exists but doesn't convert visitors into customers",
      solution: "Tailored UX + backend logic designed around your specific business model",
      result: "More leads, better control, clearer data",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Cog,
      title: "Business Automation",
      problem: "You spend hours on repetitive tasks: emails, data entry, follow-ups",
      solution: "Automate workflows, dashboards, notifications, and integrations",
      result: "Reduce manual work by 60–80%, free up time for strategy",
      color: "from-lime-500 to-green-500",
    },
    {
      icon: Wrench,
      title: "Website Maintenance & Optimization",
      problem: "Your site is slow, insecure, or constantly breaking",
      solution: "Ongoing security patches, performance optimization, and uptime monitoring",
      result: "You focus on business, I handle tech. Peace of mind.",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section className="py-32 px-6 relative" id="services">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Solutions, not{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              services
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Every solution is designed to answer one question: How will this help your business make or save money?
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <solution.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl mb-4">{solution.title}</h3>

              <div className="space-y-4">
                <div>
                  <div className="text-sm text-red-400 mb-1">Problem:</div>
                  <p className="text-gray-400">{solution.problem}</p>
                </div>

                <div>
                  <div className="text-sm text-cyan-400 mb-1">Solution:</div>
                  <p className="text-gray-400">{solution.solution}</p>
                </div>

                <div>
                  <div className="text-sm text-lime-400 mb-1">Result:</div>
                  <p className="text-gray-300">{solution.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Business Type Selector */}
        <BusinessTypeSelector />

        {/* ROI Calculator Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => setShowCalculator(!showCalculator)}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 rounded-lg transition-all duration-300"
          >
            <Calculator className="w-5 h-5" />
            <span>Calculate Your Automation ROI</span>
          </button>
        </motion.div>

        {/* ROI Calculator Modal */}
        {showCalculator && (
          <ROICalculator onClose={() => setShowCalculator(false)} />
        )}
      </div>
    </section>
  );
}