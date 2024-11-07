import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DashboardCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const DashboardCard = ({ title, children, className = '' }: DashboardCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`backdrop-blur-md bg-white/50 dark:bg-gray-800/50 rounded-xl p-6 border border-emerald-100 dark:border-emerald-900/20 shadow-lg ${className}`}
    >
      <h3 className="text-lg font-semibold mb-4 text-emerald-700 dark:text-emerald-300">{title}</h3>
      {children}
    </motion.div>
  );
};