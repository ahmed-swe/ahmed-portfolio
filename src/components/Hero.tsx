import { motion } from 'motion/react';
import { ArrowRight, Terminal } from 'lucide-react';
import { TerminalAnimation } from './TerminalAnimation';
import { FlowchartAnimation } from './FlowchartAnimation';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20" id="home">
      {/* Ambient background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-lime-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 mb-6"
            >
              <span className="text-cyan-400 text-sm">Web Development • Business Automation • Long-term Maintenance</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-medium leading-[1.15] mb-6"
             >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">
                Turn
              </span>{' '}
               More Leads Into {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-green-500">
                Paying
              </span>{' '}
               Customers.
            </motion.h1>


            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 mb-10 leading-relaxed"
            >
              No manual follow-ups. No missed leads. Just systems that work for your business 24/7.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#services"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-400 hover:to-cyan-500 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>See how I solve problems</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-8 py-4 border border-cyan-500/30 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Terminal className="w-5 h-5" />
                <span>Book a free system audit</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Interactive Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="space-y-6 hide-585"
          >
            <TerminalAnimation />
            <FlowchartAnimation />
          </motion.div>
          <style>
            {`
              @media (max-width: 585px) {
                .hide-585 {
                  display: none;
                }
              }
            `}
          </style>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-cyan-500/30 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
