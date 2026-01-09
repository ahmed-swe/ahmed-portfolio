import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PersonalSection() {
  return (
    <section className="py-32 px-6 relative" id="about">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-lime-500/20 rounded-2xl blur-2xl" />
            <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-cyan-500/30">
              <ImageWithFallback
                src="https://raw.githubusercontent.com/ahmed-swe/portfolio-assets/main/Gemini_Generated_Image_zelu0pzelu0pzelu.png
"
                alt="Ahmed - Web Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <span className="text-cyan-400 text-sm">A bit about me</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6">
              I'm Ahmed — a web developer who believes websites should{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
                work like employees
              </span>
              , not brochures.
            </h2>

            <div className="space-y-6 text-lg text-gray-400">
              <p>
                For the past several years, I've helped businesses turn their websites from digital
                business cards into automated systems that generate leads, save time, and scale operations.
              </p>

              <p>
                My belief is simple: <span className="text-cyan-400">technology should make money or save time</span>.
                If it doesn't do either, it's not worth building.
              </p>

              <div className="bg-gradient-to-r from-lime-500/10 to-transparent border-l-4 border-lime-500 p-6 rounded">
                <p className="text-lime-300">
                  My promise: I'll treat your business like it's mine. Your success is my success.
                  I'm not here for one-time projects — I'm here to build long-term partnerships.
                </p>
              </div>

              <p>
                When I'm not coding, you'll find me exploring automation tools, reading about business
                strategy, or helping local businesses understand how tech can transform their operations.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              {['Problem Solver', 'Systems Thinker', 'Growth Partner'].map((badge, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-gray-900 border border-cyan-500/30 rounded-full text-sm text-cyan-400"
                >
                  {badge}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}