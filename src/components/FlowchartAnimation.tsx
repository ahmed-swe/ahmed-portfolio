import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FlowchartAnimation() {
  const nodes = [
    { label: 'Lead', color: 'from-red-500 to-orange-500' },
    { label: 'Website', color: 'from-cyan-500 to-blue-500' },
    { label: 'Automation', color: 'from-lime-500 to-green-500' },
    { label: 'Revenue', color: 'from-amber-500 to-yellow-500' },
  ];

  return (
    <div className="flex items-center justify-between gap-2 p-6 bg-gray-900/30 backdrop-blur-sm border border-cyan-500/10 rounded-lg">
      {nodes.map((node, index) => (
        <div key={index} className="flex items-center gap-2 flex-1">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
            className={`flex-1 p-4 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center`}
          >
            <span className="text-white">{node.label}</span>
          </motion.div>

          {index < nodes.length - 1 && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.3 }}
            >
              <ArrowRight className="w-5 h-5 text-gray-600 flex-shrink-0" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
