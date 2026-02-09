import React from 'react';
import { MessageSquare, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeatureDeepDive: React.FC = () => {
  return (
    <section id="features" className="border-b border-white/10">
      
      {/* Feature 1: Understanding - PRIMARY ORANGE */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="p-12 md:p-32 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10 bg-[#050505]">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-14 h-14 bg-primary-900/20 rounded-xl flex items-center justify-center mb-10 border border-primary-500/20"
          >
             <Eye className="w-7 h-7 text-primary-500" />
          </motion.div>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-medium mb-8 tracking-tight"
          >Total Document <br />Understanding.</motion.h3>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10"
          >
             Never miss a red flag again. SlickDoc breaks down documents into plain English summaries, explains complex clauses line-by-line, and highlights risks automatically.
          </motion.p>
          <ul className="space-y-5 text-neutral-300">
             {[
                "Plain-English summaries",
                "Automatic Red-Flag Detection",
                "Clause-by-clause breakdown"
             ].map((item, i) => (
                <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 text-lg"
                >
                    <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    {item}
                </motion.li>
             ))}
          </ul>
        </div>
        <div className="relative min-h-[600px] bg-neutral-900/20 overflow-hidden group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555421689-d68471e18963?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-16">
                 <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", bounce: 0.4, delay: 0.5 }}
                    className="bg-neutral-900/90 backdrop-blur border border-white/10 rounded-xl p-8 shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500"
                 >
                    <div className="flex justify-between items-center mb-6">
                        <span className="text-xs font-mono text-neutral-500">RISK ASSESSMENT</span>
                        <motion.span 
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="bg-red-500/10 text-red-400 border border-red-500/20 px-3 py-1.5 rounded text-xs font-medium"
                        >HIGH RISK</motion.span>
                    </div>
                    <p className="text-base text-neutral-300 leading-relaxed">"Section 12.3 contains an automatic renewal clause with a 50% price increase."</p>
                 </motion.div>
            </div>
        </div>
      </div>

      {/* Feature 2: Chat & Response - SECONDARY PURPLE */}
      <div className="grid grid-cols-1 lg:grid-cols-2">
         <div className="relative min-h-[600px] bg-neutral-900/20 border-b lg:border-b-0 lg:border-r border-white/10 order-2 lg:order-1 overflow-hidden">
             {/* Abstract Grid visual */}
             <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
             
             <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full max-w-lg space-y-6">
                    {/* Chat Bubbles */}
                    <div className="flex justify-end">
                         <motion.div 
                            initial={{ scale: 0.5, opacity: 0, y: 20 }}
                            whileInView={{ scale: 1, opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white text-black px-6 py-4 rounded-2xl rounded-tr-sm text-base font-medium shadow-lg"
                         >
                            Draft a refusal for the exclusivity clause.
                         </motion.div>
                    </div>
                    <div className="flex justify-start">
                         <motion.div 
                            initial={{ scale: 0.5, opacity: 0, y: 20 }}
                            whileInView={{ scale: 1, opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.8 }}
                            className="bg-secondary-900/50 border border-secondary-500/20 text-secondary-100 px-6 py-4 rounded-2xl rounded-tl-sm text-base shadow-lg leading-relaxed"
                         >
                            Here is a firm but professional draft: "While we are excited to proceed, we cannot agree to exclusivity at this stage..."
                         </motion.div>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 1.2 }}
                        className="flex justify-start pt-4"
                    >
                        <div className="flex gap-3">
                            <button className="text-sm border border-primary-500/30 bg-primary-500/15 text-primary-100 px-4 py-2 rounded-lg hover:bg-primary-500/25 hover:scale-105 transition-all">Make it friendlier</button>
                            <button className="text-sm border border-primary-500/30 bg-primary-500/15 text-primary-100 px-4 py-2 rounded-lg hover:bg-primary-500/25 hover:scale-105 transition-all">Summarize bullet points</button>
                        </div>
                    </motion.div>
                </div>
             </div>
         </div>
         <div className="p-12 md:p-32 flex flex-col justify-center order-1 lg:order-2 bg-[#050505]">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-14 h-14 bg-secondary-900/20 rounded-xl flex items-center justify-center mb-10 border border-secondary-500/20"
          >
             <MessageSquare className="w-7 h-7 text-secondary-500" />
          </motion.div>
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-medium mb-8 tracking-tight"
          >Interactive Chat <br />& Instant Response.</motion.h3>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-neutral-400 text-lg md:text-xl leading-relaxed mb-10"
          >
             Don't just read—converse. Ask questions, clarify terms, and then let the AI write the email for you.
          </motion.p>
          <ul className="space-y-5 text-neutral-300">
             {[
                "\"Explain like I'm 10\" mode",
                "Negotiation tone selection (Friendly, Neutral, Firm)",
                "One-click email generation"
             ].map((item, i) => (
                <motion.li 
                    key={i}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-4 text-lg"
                >
                    <div className="w-2 h-2 bg-secondary-500 rounded-full" />
                    {item}
                </motion.li>
             ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

