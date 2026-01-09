import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Building2, ShoppingBag, Home, Briefcase, Layers } from 'lucide-react';

export function BusinessTypeSelector() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const businessTypes = [
    {
      id: 'ecommerce',
      icon: ShoppingBag,
      name: 'E-commerce',
      solutions: [
        'Automated order processing & inventory sync',
        'Customer behavior tracking & retargeting',
        'Abandoned cart recovery system',
        'Smart product recommendations',
      ],
      impact: '+45% conversion rate, -70% manual order processing',
    },
    {
      id: 'realestate',
      icon: Home,
      name: 'Real Estate',
      solutions: [
        'Lead capture with automated follow-ups',
        'Property listing sync across platforms',
        'Virtual tour integrations',
        'CRM automation for client management',
      ],
      impact: '+200% qualified leads, -60% response time',
    },
    {
      id: 'services',
      icon: Briefcase,
      name: 'Service Business',
      solutions: [
        'Online booking & scheduling system',
        'Automated client onboarding',
        'Invoice & payment automation',
        'Review collection workflows',
      ],
      impact: '+80% booking rate, -50% admin time',
    },
    {
      id: 'b2b',
      icon: Building2,
      name: 'B2B / SaaS',
      solutions: [
        'Lead scoring & qualification automation',
        'Custom dashboard & analytics',
        'Integration with existing tools',
        'Multi-stage sales pipeline automation',
      ],
      impact: '+120% pipeline velocity, -40% sales cycle time',
    },
    {
      id: 'others',
      icon: Layers,
      name: 'Others',
      solutions: [
        'Custom business process automation',
        'Data migration & system integration',
        'Workflow optimization & digitization',
        'Tailored web applications',
      ],
      impact: 'Custom solutions for unique business needs',
    },
  ];

  return (
    <div className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h3 className="text-3xl mb-4">What's your business type?</h3>
        <p className="text-gray-400">See tailored solutions for your industry</p>
      </motion.div>

      {/* Business Type Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
        {businessTypes.map((type, index) => (
          <motion.button
            key={type.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ 
              scale: 1.05,
              y: -5,
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedType(selectedType === type.id ? null : type.id)}
            className={`p-6 rounded-xl border-2 transition-all duration-300 relative group ${
              selectedType === type.id
                ? 'border-cyan-500 bg-cyan-500/10 shadow-lg shadow-cyan-500/20'
                : 'border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 hover:bg-cyan-500/5 hover:shadow-lg hover:shadow-cyan-500/10'
            }`}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-500/0 to-lime-500/0 group-hover:from-cyan-500/10 group-hover:to-lime-500/10 transition-all duration-300 pointer-events-none" />
            
            <type.icon className={`w-8 h-8 mx-auto mb-3 transition-all duration-300 relative z-10 ${
              selectedType === type.id 
                ? 'text-cyan-400' 
                : 'text-gray-400 group-hover:text-cyan-400 group-hover:scale-110'
            }`} />
            <div className={`text-sm relative z-10 transition-colors duration-300 ${
              selectedType === type.id 
                ? 'text-white' 
                : 'text-gray-300 group-hover:text-white'
            }`}>{type.name}</div>
          </motion.button>
        ))}
      </div>

      {/* Selected Business Type Details */}
      <AnimatePresence mode="wait">
        {selectedType && (
          <motion.div
            key={selectedType}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {businessTypes
              .filter((type) => type.id === selectedType)
              .map((type) => (
                <div
                  key={type.id}
                  className="bg-gradient-to-br from-cyan-500/5 to-lime-500/5 border border-cyan-500/20 rounded-2xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <type.icon className="w-8 h-8 text-cyan-400" />
                    <h4 className="text-2xl">{type.name} Solutions</h4>
                  </div>

                  <ul className="grid md:grid-cols-2 gap-4 mb-6">
                    {type.solutions.map((solution, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1">→</span>
                        <span className="text-gray-300">{solution}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-lime-500/10 border border-lime-500/30 rounded-lg p-4">
                    <div className="text-sm text-lime-400 mb-1">Expected Impact:</div>
                    <div className="text-lg">{type.impact}</div>
                  </div>
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}