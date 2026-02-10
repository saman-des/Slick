import React from 'react';
import { Lock, Trash2, Server, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

export const SecuritySection: React.FC = () => {
  return (
    <section id="security" className="section-ambient ambient-security border-b border-white/10 py-40">
        {/* Background Mesh */}
        <div className="absolute inset-0 z-0 opacity-20 mix-blend-soft-light" 
             style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-[#120b22]/72 to-transparent z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
        >
            <span className="text-primary-500 font-mono text-xs uppercase tracking-wider mb-4 block">Privacy First</span>
            <h2 className="text-4xl md:text-6xl font-medium mb-8">Your secrets stay secret.</h2>
            <p className="text-neutral-400 text-lg">
                We understand the sensitivity of your documents. Our architecture is designed for ephemeral processing, not data hoarding.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
                { icon: <Lock className="w-10 h-10 text-white mb-6" />, title: "End-to-End Encryption", desc: "Data is encrypted in transit and at rest using industry-standard protocols." },
                { icon: <Trash2 className="w-10 h-10 text-white mb-6" />, title: "Auto-Deletion", desc: "Documents are automatically wiped from our servers the moment your session ends." },
                { icon: <Server className="w-10 h-10 text-white mb-6" />, title: "Session Isolation", desc: "One active document per session. No cross-contamination of data context." },
                { icon: <EyeOff className="w-10 h-10 text-white mb-6" />, title: "No Training", desc: "Your specific documents are never used to train our core AI models." }
            ].map((item, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, borderColor: "rgba(139, 92, 246, 0.35)" }}
                    className="ambient-glass-soft p-8 rounded-xl transition-all duration-300 flex flex-col items-center text-center md:items-start md:text-left"
                >
                    {item.icon}
                    <h4 className="font-medium text-xl text-white mb-3">{item.title}</h4>
                    <p className="text-base text-neutral-400 leading-relaxed">{item.desc}</p>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};
