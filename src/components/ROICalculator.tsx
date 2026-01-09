import { motion } from 'motion/react';
import { useState } from 'react';
import { X, TrendingUp } from 'lucide-react';

interface ROICalculatorProps {
  onClose: () => void;
}

export function ROICalculator({ onClose }: ROICalculatorProps) {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [automationPercent, setAutomationPercent] = useState(70);

  const calculateSavings = () => {
    const weeklySavings = (hoursPerWeek * automationPercent / 100) * hourlyRate;
    const monthlySavings = weeklySavings * 4;
    const yearlySavings = monthlySavings * 12;
    const hoursFreed = (hoursPerWeek * automationPercent / 100) * 52;

    return { weeklySavings, monthlySavings, yearlySavings, hoursFreed };
  };

  const savings = calculateSavings();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-900 border border-cyan-500/30 rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl">ROI Calculator</h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-lg hover:bg-gray-800 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6 mb-8">
          {/* Hours per week */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Hours spent on manual tasks per week
            </label>
            <input
              type="range"
              min="1"
              max="40"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="text-right mt-2 text-2xl text-cyan-400">{hoursPerWeek} hours</div>
          </div>

          {/* Hourly rate */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Your hourly rate (or employee cost)
            </label>
            <input
              type="range"
              min="20"
              max="200"
              step="10"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
            <div className="text-right mt-2 text-2xl text-cyan-400">${hourlyRate}/hour</div>
          </div>

          {/* Automation percentage */}
          <div>
            <label className="block text-sm text-gray-400 mb-2">
              Estimated automation potential
            </label>
            <input
              type="range"
              min="30"
              max="90"
              step="10"
              value={automationPercent}
              onChange={(e) => setAutomationPercent(Number(e.target.value))}
              className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-lime-500"
            />
            <div className="text-right mt-2 text-2xl text-lime-400">{automationPercent}%</div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-gradient-to-br from-cyan-500/10 to-lime-500/10 border border-cyan-500/30 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-6 h-6 text-lime-400" />
            <h4 className="text-xl">Your Potential Savings</h4>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">Monthly</div>
              <div className="text-2xl text-cyan-400">${savings.monthlySavings.toLocaleString()}</div>
            </div>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <div className="text-sm text-gray-400 mb-1">Yearly</div>
              <div className="text-2xl text-lime-400">${savings.yearlySavings.toLocaleString()}</div>
            </div>
          </div>

          <div className="bg-gray-900/50 rounded-lg p-4">
            <div className="text-sm text-gray-400 mb-1">Hours freed per year</div>
            <div className="text-3xl text-amber-400">{Math.round(savings.hoursFreed)} hours</div>
            <div className="text-sm text-gray-500 mt-1">
              That's {Math.round(savings.hoursFreed / 8)} full work days
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-800">
            <p className="text-sm text-gray-400 mb-4">
              These are conservative estimates. Real results often exceed projections when proper automation is implemented.
            </p>
            <a
              href="#contact"
              onClick={onClose}
              className="block text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-lime-500 rounded-lg hover:opacity-90 transition-opacity"
            >
              Let's make this happen
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
