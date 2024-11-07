import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertTriangle, Activity, ArrowUp, Zap, Building } from 'lucide-react';
import { ThemeToggle } from './components/ThemeToggle';
import { DashboardCard } from './components/DashboardCard';
import { ProgressRing } from './components/ProgressRing';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-slate-900' : 'bg-white'} transition-colors duration-300`}>
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-10 pointer-events-none" />
        
        {/* Theme toggle */}
        <ThemeToggle isDark={isDark} toggle={() => setIsDark(!isDark)} />

        {/* Main content */}
        <div className="container mx-auto px-4 py-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold mb-8 text-center text-emerald-600 dark:text-emerald-400"
          >
            Security Dashboard
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Security Score */}
            <DashboardCard title="Security Score" className="col-span-full md:col-span-1">
              <div className="flex flex-col items-center">
                <ProgressRing progress={78} color="emerald" />
                <p className="mt-4 text-emerald-600 dark:text-emerald-400 font-semibold">Good Standing</p>
                <p className="text-sm text-cyan-600 dark:text-cyan-400">↑ 12% from last month</p>
              </div>
            </DashboardCard>

            {/* Threat Protection */}
            <DashboardCard title="Threat Protection">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Shield className="text-emerald-500" />
                    <span>Threats Blocked</span>
                  </div>
                  <span className="font-bold text-cyan-600 dark:text-cyan-400">1,284</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Zap className="text-cyan-500" />
                    <span>Prevention Rate</span>
                  </div>
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">99.8%</span>
                </div>
              </div>
            </DashboardCard>

            {/* System Health */}
            <DashboardCard title="System Health">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Activity className="text-cyan-500" />
                  <span>Overall Status</span>
                </div>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-full text-sm font-medium">
                  Healthy
                </span>
              </div>
            </DashboardCard>

            {/* Risk Areas */}
            <DashboardCard title="Risk Areas" className="col-span-full md:col-span-2 lg:col-span-1">
              <div className="space-y-4">
                {[
                  { label: 'Network Security', value: 85, color: 'bg-emerald-500' },
                  { label: 'Data Protection', value: 92, color: 'bg-cyan-500' },
                  { label: 'Access Control', value: 78, color: 'bg-teal-500' },
                  { label: 'Compliance', value: 95, color: 'bg-green-500' },
                ].map((item) => (
                  <div key={item.label} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>{item.label}</span>
                      <span className="text-cyan-600 dark:text-cyan-400">{item.value}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className={`h-full ${item.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </DashboardCard>

            {/* Priority Actions */}
            <DashboardCard title="Priority Actions" className="col-span-full md:col-span-1">
              <div className="space-y-4">
                {[
                  { icon: AlertTriangle, text: 'Update firewall rules', priority: 'Critical' },
                  { icon: Building, text: 'Review access permissions', priority: 'High' },
                  { icon: ArrowUp, text: 'System update required', priority: 'Medium' },
                ].map((action, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-emerald-500/5 to-cyan-500/5"
                  >
                    <action.icon className="text-emerald-500" size={20} />
                    <div>
                      <p className="font-medium">{action.text}</p>
                      <p className="text-sm text-cyan-600 dark:text-cyan-400">{action.priority}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </DashboardCard>

            {/* Business Impact */}
            <DashboardCard title="Business Impact" className="col-span-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { label: 'Operational Efficiency', value: '↑ 24%' },
                  { label: 'Cost Savings', value: '$12.5K' },
                  { label: 'Risk Reduction', value: '↓ 35%' },
                  { label: 'Compliance Score', value: '98/100' },
                ].map((impact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 rounded-lg bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 text-center"
                  >
                    <p className="text-sm text-cyan-600 dark:text-cyan-400">{impact.label}</p>
                    <p className="text-xl font-bold mt-2 text-emerald-600 dark:text-emerald-400">{impact.value}</p>
                  </motion.div>
                ))}
              </div>
            </DashboardCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;