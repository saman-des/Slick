import React from "react";
import { ArrowUpRight, Download, Play } from "lucide-react";
import { motion } from "framer-motion";

export const Footer: React.FC = () => {
  return (
    <footer
      id="about-us"
      className="section-ambient ambient-footer pt-40 pb-16"
    >
      <div className="relative z-10 container mx-auto px-6">
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
          </motion.div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-16 bg-black/20 rounded-2xl px-6 md:px-10 pb-10">
          <div>
            <h4 className="font-medium text-white mb-6">Product</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Upload
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Enterprise
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-6">Resources</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Security Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Legal Glossary
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-white mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div className="md:text-right">
            <div className="flex items-center gap-2 md:justify-end mb-4">
              <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-medium text-xs">
                S
              </div>
              <span className="font-medium">SlickDoc AI</span>
            </div>
            <p className="text-xs text-neutral-600">
              Copyright 2024 SlickDoc AI Inc.
              <br />
              All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
