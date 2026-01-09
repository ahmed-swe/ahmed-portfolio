import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function TerminalAnimation() {
  const [currentLine, setCurrentLine] = useState(0);

  const commands = [
    { command: '$ analyze business', output: 'Scanning website traffic...' },
    { command: '$ identify bottlenecks', output: 'Found: Manual lead processing' },
    { command: '$ deploy automation', output: 'Automation active ✓' },
    { command: '$ calculate ROI', output: '+347% lead conversion' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % commands.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-6 font-mono text-sm">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-800">
        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-amber-500" />
        <div className="w-3 h-3 rounded-full bg-lime-500" />
        <span className="text-gray-500 ml-2">system-optimizer.sh</span>
      </div>

      <div className="space-y-3">
        {commands.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: index <= currentLine ? 1 : 0.3,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="text-cyan-400">{item.command}</div>
            <div className="text-gray-400 ml-4">{item.output}</div>
          </motion.div>
        ))}
      </div>

      <motion.div
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-cyan-400 mt-4"
      >
        ▊
      </motion.div>
    </div>
  );
}
