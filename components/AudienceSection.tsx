import React from 'react';
import { motion } from 'framer-motion';

const Persona: React.FC<{ role: string; useCase: string; color: string; delay: number }> = ({ role, useCase, color, delay }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, type: "spring", stiffness: 50 }}
        whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.08)" }}
        className="p-10 border border-white/10 bg-white/5 rounded-2xl transition-colors cursor-default"
    >
        <div className={`text-xs font-mono uppercase tracking-wider mb-6 ${color}`}>{role}</div>
        <p className="text-xl md:text-2xl font-medium text-white leading-relaxed">
            "{useCase}"
        </p>
    </motion.div>
)

export const AudienceSection: React.FC = () => {
  return (
    <section className="py-40 border-b border-white/10 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="mb-20 border-l-4 border-white pl-8">
            <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-6xl font-medium text-white"
            >
                Built for those who <br />need to move fast.
            </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Persona 
                delay={0}
                role="Founders & Operators"
                useCase="I need to sign this vendor agreement today, but I don't have the budget for a 3-day legal review."
                color="text-secondary-400"
            />
             <Persona 
                delay={0.1}
                role="Freelancers"
                useCase="Clients send me 20-page contracts for a 2-week gig. I use SlickDoc to ensure I'm not signing away my IP."
                color="text-primary-400"
            />
             <Persona 
                delay={0.2}
                role="Everyday Users"
                useCase="Rent agreements, insurance policies, terms of service—I just want to know if there's anything shady in the fine print."
                color="text-secondary-200"
            />
        </div>
      </div>
    </section>
  );
};
