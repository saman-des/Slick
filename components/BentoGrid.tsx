import React from 'react';
import { Globe, GitCompare } from 'lucide-react';
import { motion } from 'framer-motion';

export const BentoGrid: React.FC = () => {
  return (
    <section className="border-b border-white/10 bg-[#050505]">
      <div className="grid grid-cols-1 md:grid-cols-3 min-h-[700px]">
        
        {/* Card 1: Multilingual - PRIMARY */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 border-b md:border-b-0 md:border-r border-white/10 p-12 md:p-20 relative overflow-hidden group"
        >
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-primary-500/10 to-transparent blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-8 text-primary-400 font-mono text-sm uppercase">
                    <Globe className="w-5 h-5" />
                    Global Reach
                </div>
                <h3 className="text-4xl md:text-5xl font-medium mb-6">Multilingual Support.</h3>
                <p className="text-neutral-400 max-w-lg mb-12 text-lg">
                    Break language barriers. Get summaries and explanations in your native language, regardless of the document's source.
                </p>
                
                <div className="flex gap-4">
                     {["English", "Español", "Deutsch"].map((lang, i) => (
                         <motion.div 
                            key={lang}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + (i * 0.1) }}
                            whileHover={{ scale: 1.05, borderColor: "rgba(255,255,255,0.3)" }}
                            className="bg-neutral-900 border border-white/10 rounded px-5 py-2.5 text-base text-neutral-300 cursor-default"
                         >
                            {lang}
                         </motion.div>
                     ))}
                </div>
            </div>
            
            <motion.div 
                style={{ rotate: -15 }}
                whileHover={{ rotate: 0, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="absolute bottom-[-20px] right-0 p-20 opacity-30 grayscale group-hover:grayscale-0 transition-all duration-700"
            >
                <div className="text-[180px] font-medium leading-none tracking-tighter text-white">Aa</div>
            </motion.div>
        </motion.div>

        {/* Card 2: Comparison - SECONDARY */}
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-12 md:p-20 relative overflow-hidden group bg-neutral-950"
        >
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-secondary-900/10 to-transparent pointer-events-none" />
            
            <div className="inline-flex items-center gap-2 mb-8 text-secondary-400 font-mono text-sm uppercase">
                <GitCompare className="w-5 h-5" />
                Version Control
            </div>
            <h3 className="text-4xl md:text-5xl font-medium mb-6">Smart <br/>Comparison.</h3>
            <p className="text-neutral-400 text-lg mb-12">
                Upload two versions. See exactly what changed, what was added, and what was removed.
            </p>

            <div className="space-y-4 font-mono text-sm">
                <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center gap-3 text-red-400"
                >
                    <span className="w-6">-</span>
                    <span className="line-through opacity-50">Net 30 Payment</span>
                </motion.div>
                <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex items-center gap-3 text-green-400"
                >
                    <span className="w-6">+</span>
                    <span>Net 60 Payment</span>
                </motion.div>
                <motion.div 
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="flex items-center gap-3 text-neutral-500"
                >
                    <span className="w-6"> </span>
                    <span>Upon receipt of invoice</span>
                </motion.div>
            </div>
        </motion.div>

      </div>
    </section>
  );
};
