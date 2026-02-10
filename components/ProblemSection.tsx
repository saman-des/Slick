import React from 'react';
import { AlertTriangle, Clock, FileWarning } from 'lucide-react';
import { motion } from 'framer-motion';

const ProblemCard: React.FC<{ icon: React.ReactNode; title: string; description: string; index: number }> = ({ icon, title, description, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="p-10 md:p-16 border-b md:border-r border-white/10 last:border-r-0 bg-black/20 hover:bg-white/10 backdrop-blur-[2px] transition-colors group"
  >
    <div className="mb-8 p-4 w-fit rounded-lg bg-white/5 group-hover:bg-white/10 border border-white/10 text-white transition-all group-hover:scale-110 group-hover:border-white/20">
        {icon}
    </div>
    <h3 className="text-2xl font-medium mb-4 text-white">{title}</h3>
    <p className="text-neutral-400 leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export const ProblemSection: React.FC = () => {
  return (
    <section className="section-ambient ambient-problem border-b border-white/10">
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-10 md:p-20 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center bg-black/20 backdrop-blur-[2px]"
        >
             <span className="text-primary-500 font-mono text-xs uppercase tracking-wider mb-4 block">The Problem</span>
             <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
                Contracts are <br/><span className="text-neutral-500">broken.</span>
             </h2>
             <p className="text-neutral-400 leading-relaxed">
                Traditional document review is slow, risky, and expensive. SlickDoc provides a faster alternative.
             </p>
        </motion.div>
        
        <ProblemCard 
            index={1}
            icon={<FileWarning className="w-6 h-6" />}
            title="Dense Legalese"
            description="Documents are written to be legally binding, not easily understood. Key details get lost in complexity."
        />
        <ProblemCard 
            index={2}
            icon={<AlertTriangle className="w-6 h-6" />}
            title="Hidden Risks"
            description="Dangerous clauses and unfavorable terms often hide in plain sight, buried on page 45."
        />
        <ProblemCard 
            index={3}
            icon={<Clock className="w-6 h-6" />}
            title="Time Drain"
            description="Manual review cycles take days. Responding takes even longer. It throttles your speed to execution."
        />
      </div>
    </section>
  );
};
