import { motion } from 'motion/react';

export function TechStack() {
  const technologies = [
    {
      category: "Frontend",
      tools: ["React.js", "Next.js", "Vue.js", "Laravel Blade"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      category: "Backend",
      tools: ["Laravel", "Node.js", "Express"],
      color: "from-purple-500 to-indigo-500",
    },
    {
      category: "Database",
      tools: ["MySQL", "MongoDB", "PostgreSQL"],
      color: "from-lime-500 to-green-500",
    },
    {
      category: "CMS Platforms",
      tools: ["WordPress", "Shopify", "Custom CMS"],
      color: "from-orange-500 to-red-500",
    },
    {
      category: "Integration",
      tools: ["REST APIs", "WebSockets", "Third-party APIs"],
      color: "from-amber-500 to-yellow-500",
    },
    {
      category: "Infrastructure",
      tools: ["AWS", "DigitalOcean", "CloudFlare"],
      color: "from-pink-500 to-rose-500",
    },
  ];

  return (
    <section className="py-32 px-6 relative" id="tech">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lime-500/5 to-transparent" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl mb-6">
            Tech{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">
              that works
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            I choose the right tools for the job, not the trendy ones.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center text-sm`}>
                  {tech.category.slice(0, 2)}
                </div>
                <h3 className="text-xl">{tech.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 bg-gray-800 rounded-lg text-sm text-gray-300 border border-gray-700"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-cyan-500/5 to-lime-500/5 border border-cyan-500/30 rounded-xl p-8">
            <blockquote className="text-2xl mb-2">
              "Tech is a tool. Results are the goal."
            </blockquote>
            <p className="text-gray-400">
              I focus on building systems that solve real business problems, not just impressive tech stacks.
            </p>
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {['Payment Processing', 'Email Automation', 'Analytics & Tracking', 'Performance Optimization'].map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900/30 border border-gray-800 rounded-lg p-4 text-center text-sm text-gray-400"
            >
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}