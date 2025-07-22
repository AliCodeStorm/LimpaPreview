'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Mail, Phone, MapPin } from 'lucide-react';
import NoSSR from './NoSRR';

const Footer = () => {
  const footerLinks = {
    Product: ['Features', 'Sessions', 'Pricing', 'Download'],
    Company: ['About', 'Blog', 'Careers', 'Press'],
    Support: ['Help Center', 'Contact', 'Privacy', 'Terms'],
    Connect: ['Twitter', 'Instagram', 'Facebook', 'YouTube']
  };

  return (
    <NoSSR>
      <footer id="contact" className="bg-black border-t border-white/10 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="w-8 h-8 text-white" />
                    <span className="text-2xl font-light text-white tracking-wider">
                      Lempa
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                    Light up your mind with our comprehensive meditation and focus platform.
                    Transform your daily routine with mindful practices.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Mail className="w-4 h-4" />
                      <span>hello@lempa.app</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <Phone className="w-4 h-4" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-400 text-sm">
                      <MapPin className="w-4 h-4" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Links Sections */}
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-white font-medium text-sm tracking-wide uppercase">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {links.map((link) => (
                      <li key={link}>
                        <motion.a
                          href="#"
                          className="text-gray-400 text-sm hover:text-white transition-colors duration-200"
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {link}
                        </motion.a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="text-center md:text-left">
                <h3 className="text-white font-medium mb-2">Stay Updated</h3>
                <p className="text-gray-400 text-sm">
                  Get the latest meditation tips and app updates
                </p>
              </div>
              <div className="flex space-x-2 w-full md:w-auto max-w-sm">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 text-sm focus:outline-none focus:border-white/40 backdrop-blur-sm"
                />
                <motion.button
                  className="px-6 py-2 bg-white/20 border border-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(255, 255, 255, 0.3)'
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
          >
            <p className="text-gray-400 text-sm">
              © 2025 Lempa. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </motion.div>
        </div>
      </footer>
    </NoSSR>
  );
};

export default Footer;