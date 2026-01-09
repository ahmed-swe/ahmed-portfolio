import React from 'react';
import { motion } from 'motion/react';
import { Search, Lightbulb, Code, Rocket, HeadphonesIcon } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    title: 'Audit & Discovery',
    description: 'Deep dive into your business, current tech, and pain points',
    icon: Search,
    color: '#06B6D4'
  },
  {
    number: '02',
    title: 'Strategy & Architecture',
    description: 'Design the system blueprint that solves your specific problems',
    icon: Lightbulb,
    color: '#A3E635'
  },
  {
    number: '03',
    title: 'Build & Automation',
    description: 'Develop custom solutions with clean code and smart automation',
    icon: Code,
    color: '#F59E0B'
  },
  {
    number: '04',
    title: 'Launch & Optimization',
    description: 'Deploy, test, and optimize for maximum performance',
    icon: Rocket,
    color: '#8B5CF6'
  },
  {
    number: '05',
    title: 'Ongoing Support',
    description: 'Continuous monitoring, updates, and improvements',
    icon: HeadphonesIcon,
    color: '#EC4899'
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 px-6 bg-[#0A0F1E] relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#06B6D4] rounded-full blur-[200px] opacity-5" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            How we work together
          </h2>
          <p className="text-xl text-slate-400">
            A proven process that turns problems into profits
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-[#06B6D4] via-[#A3E635] to-[#EC4899] opacity-20" />

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-[#1E293B] border border-slate-700 rounded-2xl p-8 relative overflow-hidden">
                      <div
                        className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[80px] opacity-20"
                        style={{ backgroundColor: step.color }}
                      />
                      <p
                        className="text-6xl font-mono mb-4 opacity-20"
                        style={{ color: step.color }}
                      >
                        {step.number}
                      </p>
                      <h3 className="text-2xl md:text-3xl mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {step.title}
                      </h3>
                      <p className="text-lg text-slate-300">{step.description}</p>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="relative">
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center border-4 bg-[#0F172A] z-10 relative"
                      style={{ borderColor: step.color }}
                    >
                      <Icon className="w-10 h-10" style={{ color: step.color }} />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
