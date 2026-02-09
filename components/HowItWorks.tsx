import React from 'react';
import { motion } from 'framer-motion';

const Step: React.FC<{ num: string; title: string; desc: string; index: number }> = ({ num, title, desc, index }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15, duration: 0.5, ease: "easeOut" }}
        className="flex flex-col p-10 md:p-16 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0 relative group min-h-[300px] justify-between"
    >
        <div>
            <div className="text-6xl md:text-7xl font-medium text-neutral-800 mb-8 group-hover:text-primary-600/50 transition-colors select-none">
                {num}
            </div>
            <h3 className="text-xl font-medium text-white mb-3">{title}</h3>
            <p className="text-neutral-400 leading-relaxed">{desc}</p>
        </div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </motion.div>
);

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="border-b border-white/10">
      <div className="p-12 md:p-24 border-b border-white/10">
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
        >
            <span className="text-secondary-400 font-mono text-xs uppercase tracking-wider mb-2 block">Workflow</span>
            <h2 className="text-4xl md:text-6xl font-medium mt-4 mb-4">From file to finished in minutes.</h2>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4">
        <Step 
            index={0}
            num="01" 
            title="Upload" 
            desc="Drag and drop any PDF, DOCX, or Image. We support all standard formal document formats." 
        />
        <Step 
            index={1}
            num="02" 
            title="Analyze" 
            desc="Our AI instantly scans, reads, and structures the content, identifying key entities and clauses." 
        />
        <Step 
            index={2}
            num="03" 
            title="Clarify" 
            desc="Get a plain-English summary. Ask questions in chat to drill down into specific sections." 
        />
        <Step 
            index={3}
            num="04" 
            title="Respond" 
            desc="Generate a professional email response or counter-offer with one click, using your chosen tone." 
        />
      </div>
    </section>
  );
};
