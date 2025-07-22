'use client';
import React, { useState, useEffect, use } from 'react';
import { motion } from 'framer-motion';
// import { Link, useLocation } from 'react-router-dom';
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Lightbulb, User, LogOut, Bell } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Dashboard', href: '/dashboard' },
    {
      name: 'My Program',
      href: '/program',
      submenu: [
        { name: 'Personalized Session', href: '/program/personalized' },
        { name: 'Light Therapy', href: '/program/light-therapy' },
        { name: 'Audio Sessions', href: '/program/audio' },
        { name: 'Breathing', href: '/program/breathing' },
        { name: 'HRV Tracking', href: '/program/hrv' },
        { name: 'CBT Tools', href: '/program/cbt' }
      ]
    },
    {
      name: 'Activities',
      href: '/activities',
      submenu: [
        { name: 'Habits', href: '/activities/habits' },
        { name: 'Exercises', href: '/activities/exercises' },
        { name: 'Exposure', href: '/activities/exposure' }
      ]
    },
    {
      name: 'Community',
      href: '/community',
      submenu: [
        { name: 'Chat', href: '/community/chat' },
        { name: 'Groups', href: '/community/groups' },
        { name: 'Courses', href: '/community/courses' },
        { name: 'Assessments', href: '/community/assessments' }
      ]
    }
  ];

  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-black/80 backdrop-blur-md border-b border-white/10'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Link href="/" className="flex items-center space-x-1">
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 3,
                }}
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 flex items-center justify-center transition duration-500"
              >
                <Lightbulb
                  className="w-10 h-10 text-white transition-all duration-500 
                     hover:text-yellow-400 
                     hover:drop-shadow-[0_0_25px_rgba(250,204,21,0.9)] 
                     hover:blur-[1px]"
                />
              </motion.div>

              <span className="text-2xl font-light text-white tracking-wider">
                Lempa
              </span>
            </Link>

          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <motion.div
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center ${pathname === item.href
                        ? 'text-white border-b-2 border-white/50'
                        : 'text-gray-300 hover:text-white'
                        }`}
                    >
                      {item.name}
                      {item.submenu && (
                        <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  </motion.div>

                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-56 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notifications */}
            <motion.button
              className="relative p-2 text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </motion.button>
            {/* User Profile */}
            <div className="relative">
              <motion.button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center space-x-3 px-3 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium text-white">Anonymous User</div>
                  <div className="text-xs text-gray-400">1250 points</div>
                </div>
              </motion.button>

              {/* User Dropdown */}
              {userMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl z-50"
                >
                  <div className="py-2">
                    <Link href="/profile" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200">
                      <User className="w-4 h-4 mr-3" />
                      Profile
                    </Link>
                    <a href="#settings" className="flex items-center px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200">
                      <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Settings
                    </a>
                    <hr className="my-2 border-white/10" />
                    <button className="flex items-center w-full px-4 py-2 text-sm text-red-400 hover:text-red-300 hover:bg-white/10 transition-colors duration-200">
                      <LogOut className="w-4 h-4 mr-3" />
                      Sign Out
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <button className="p-2 text-gray-300 hover:text-white">
              <Bell className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md border-t border-white/10"
      >
        <div className="px-4 pt-4 pb-6 space-y-4">
          {/* User Info Mobile */}
          <div className="flex items-center space-x-3 pb-4 border-b border-white/10">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">Anonymous User</div>
              <div className="text-xs text-gray-400">1250 points</div>
            </div>
          </div>

          {/* Navigation Items */}
          {navItems.map((item) => (
            <div key={item.name} className="space-y-2">
              <Link
                href={item.href}
                className="block text-gray-300 hover:text-white text-base font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
              {item.submenu && (
                <div className="pl-4 space-y-1">
                  {item.submenu.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block text-gray-400 hover:text-white text-sm py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Mobile Actions */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <Link href="/profile" className="flex items-center w-full text-gray-300 hover:text-white text-sm py-2">
              <User className="w-4 h-4 mr-3" />
              Profile
            </Link>
            <button className="flex items-center w-full text-red-400 hover:text-red-300 text-sm py-2">
              <LogOut className="w-4 h-4 mr-3" />
              Sign Out
            </button>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;