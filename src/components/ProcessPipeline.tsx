import { motion } from 'motion/react';
import { Search, Lightbulb, Hammer, Rocket, LifeBuoy } from 'lucide-react';

export function ProcessPipeline() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Audit & Discovery',
      description: 'We analyze your current systems, bottlenecks, and opportunities.',
      timeline: '1-2 days',
      deliverable: 'Detailed audit report + recommendations',
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategy & Architecture',
      description: 'Design the system architecture and automation workflows.',
      timeline: '3-5 days',
      deliverable: 'Technical blueprint + project timeline',
    },
    {
      number: '03',
      icon: Hammer,
      title: 'Build & Automation',
      description: 'Development, integration, and automation implementation.',
      timeline: '2-6 weeks',
      deliverable: 'Fully functional system + testing',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Launch & Optimization',
      description: 'Deploy, monitor, and optimize based on real data.',
      timeline: '1 week',
      deliverable: 'Live system + analytics dashboard',
    },
    {
      number: '05',
      icon: LifeBuoy,
      title: 'Ongoing Support',
      description: 'Continuous maintenance, updates, and improvements.',
      timeline: 'Ongoing',
      deliverable: 'Monthly reports + priority support',
    },
  ];

  return (
    <section className="py-32 px-6 relative" id="process">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            How we{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              work together
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A clear, proven process from discovery to deployment and beyond
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-lime-500 to-amber-500 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="md:ml-24">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                    {/* Step Number Circle */}
                    <div className="absolute -left-24 top-8 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-cyan-500 to-lime-500 border-4 border-gray-900">
                      <span className="text-xl">{step.number}</span>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-lime-500/20 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-cyan-400" />
                      </div>

                      <div className="flex-1">
                        <h3 className="text-2xl mb-2">{step.title}</h3>
                        <p className="text-gray-400 mb-4">{step.description}</p>

                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-500">Timeline:</span>
                            <span className="text-cyan-400">{step.timeline}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <span className="text-gray-500">Deliverable:</span>
                            <span className="text-lime-400">{step.deliverable}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500/10 to-lime-500/10 border border-cyan-500/30 rounded-lg p-6">
            <p className="text-lg text-gray-300">
              Every project is different. This timeline adjusts based on complexity and scope.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}