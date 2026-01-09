import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export function AuthorityFilter() {
  const forYou = [
    "Your website doesn't generate leads",
    "You're tired of manual work eating up hours",
    "You want tech that works while you sleep",
    "You need a reliable long-term tech partner",
    "You're ready to invest in real growth",
  ];

  const notForYou = [
    "You only want the cheapest option",
    "You want a quick template website",
    "You don't care about measurable growth",
    "You're not willing to think strategically",
  ];

  return (
    <section className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-4">
            Let's see if we're a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              good fit
            </span>
          </h2>
          <p className="text-xl text-gray-400">
            I work with business owners who value results over shortcuts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* This IS for you */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-cyan-500/10 to-transparent border border-cyan-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <Check className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-2xl">This is for you if:</h3>
            </div>

            <ul className="space-y-4">
              {forYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <Check className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* This is NOT for you */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-red-500/10 to-transparent border border-red-500/30 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center">
                <X className="w-6 h-6 text-red-400" />
              </div>
              <h3 className="text-2xl">This is NOT for you if:</h3>
            </div>

            <ul className="space-y-4">
              {notForYou.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-xl text-gray-400">
            Still here? Good.{' '}
            <span className="text-cyan-400">Let's talk about how I can help.</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}