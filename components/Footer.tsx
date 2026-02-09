import React from 'react';
import { ArrowUpRight, Download, Play } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer id="about-us" className="bg-[#050505] pt-40 pb-16">
      <div className="container mx-auto px-6">
        
        {/* Big CTA */}
        <div className="mb-32">
            <motion.h2 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-8xl font-medium tracking-tighter mb-10 leading-none"
            >
                It's time to <br />
                <span className="text-neutral-500">know what you sign.</span>
            </motion.h2>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex flex-col md:flex-row gap-8 items-start md:items-center"
            >
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-500 text-white px-10 py-5 rounded-lg font-medium text-lg hover:bg-primary-600 transition-colors flex items-center gap-2"
                >
                    Try with a Document
                    <ArrowUpRight className="w-5 h-5" />
                </motion.button>
                <div className="max-w-sm">
                    <p className="text-neutral-400 text-sm mb-3">
                        Mobile app only for now. Get started from your phone.
                    </p>
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white hover:bg-white/10 transition-colors"
                            aria-label="Download on the App Store"
                        >
                            <Download className="w-4 h-4" />
                            <span className="leading-tight">
                                <span className="block text-[10px] text-neutral-400">Download on the</span>
                                <span className="block text-sm font-medium">App Store</span>
                            </span>
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-white hover:bg-white/10 transition-colors"
                            aria-label="Get it on Google Play"
                        >
                            <Play className="w-4 h-4" />
                            <span className="leading-tight">
                                <span className="block text-[10px] text-neutral-400">Get it on</span>
                                <span className="block text-sm font-medium">Google Play</span>
                            </span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-16">
            <div>
                <h4 className="font-medium text-white mb-6">Product</h4>
                <ul className="space-y-3 text-sm text-neutral-400">
                    <li><a href="#" className="hover:text-white transition-colors">Upload</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Enterprise</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-medium text-white mb-6">Resources</h4>
                <ul className="space-y-3 text-sm text-neutral-400">
                    <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Security Guide</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Legal Glossary</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-medium text-white mb-6">Company</h4>
                <ul className="space-y-3 text-sm text-neutral-400">
                    <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                </ul>
            </div>
            <div className="md:text-right">
                <div className="flex items-center gap-2 md:justify-end mb-4">
                     <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-medium text-xs">S</div>
                     <span className="font-medium">SlickDoc AI</span>
                </div>
                <p className="text-xs text-neutral-600">
                    © 2024 SlickDoc AI Inc.<br />
                    All rights reserved.
                </p>
            </div>
        </div>
      </div>
    </footer>
  );
};

