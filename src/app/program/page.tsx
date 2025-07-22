'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  Brain,
  Lightbulb,
  Headphones,
  Wind,
  Heart,
  Zap,
  Play,
  Clock,
  Target,
  TrendingUp
} from 'lucide-react';
import NoSSR from '@/components/NoSRR';

type Program = {
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  sessions: number;
  color: string;
  image: string;
};

const page = () => {
  const programs: Program[] = [
    {
      icon: Brain,
      title: 'Personalized Session',
      description: 'AI-powered meditation sessions tailored to your needs',
      duration: '15-45 min',
      sessions: 24,
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      icon: Lightbulb,
      title: 'Light Therapy',
      description: 'Circadian rhythm optimization with smart lighting',
      duration: '20-30 min',
      sessions: 18,
      color: 'from-yellow-500 to-orange-500',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    },
    {
      icon: Headphones,
      title: 'Audio Sessions',
      description: 'Binaural beats and soundscapes for deep focus',
      duration: '10-60 min',
      sessions: 32,
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg'
    },
    {
      icon: Wind,
      title: 'Breathing',
      description: 'Guided breathwork for stress relief and energy',
      duration: '5-20 min',
      sessions: 45,
      color: 'from-green-500 to-teal-500',
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg'
    },
    {
      icon: Heart,
      title: 'HRV Tracking',
      description: 'Heart rate variability monitoring and training',
      duration: '10-15 min',
      sessions: 28,
      color: 'from-red-500 to-pink-500',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      icon: Zap,
      title: 'CBT Tools',
      description: 'Cognitive behavioral therapy exercises and techniques',
      duration: '15-30 min',
      sessions: 16,
      color: 'from-indigo-500 to-purple-500',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    }
  ];

  return (
    <NoSSR>
      <div className="pt-16 min-h-screen bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
              My Program
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your personalized wellness journey with AI-powered sessions and therapeutic tools
            </p>
          </motion.div>

          {/* Stats Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { label: 'Total Sessions', value: '163', icon: Play },
              { label: 'Hours Practiced', value: '42.5', icon: Clock },
              { label: 'Current Streak', value: '12 days', icon: Target },
              { label: 'Progress', value: '+25%', icon: TrendingUp }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <IconComponent className="w-6 h-6 text-white/60" />
                    <span className="text-2xl font-semibold text-white">{stat.value}</span>
                  </div>
                  <p className="text-gray-400 text-sm">{stat.label}</p>
                </div>
              );
            })}
          </motion.div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <motion.div
                    className="relative h-96 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/20"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                      style={{ backgroundImage: `url(${program.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent`} />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <motion.div
                          className={`w-12 h-12 rounded-full bg-gradient-to-r ${program.color} p-3 flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <IconComponent className="w-6 h-6 text-white" />
                        </motion.div>

                        <div className="text-right">
                          <div className="text-white text-sm font-medium">{program.sessions} sessions</div>
                          <div className="text-gray-400 text-xs">{program.duration}</div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-medium text-white mb-2 group-hover:text-white/90 transition-colors">
                            {program.title}
                          </h3>
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {program.description}
                          </p>
                        </div>

                        {/* Action Button */}
                        <motion.button
                          className="w-full py-3 px-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-colors duration-200"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          Start Session
                        </motion.button>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Progress</span>
                          <span>{Math.floor(Math.random() * 40 + 60)}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            className={`bg-gradient-to-r ${program.color} h-2 rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${Math.floor(Math.random() * 40 + 60)}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-2xl font-light text-white mb-8">Quick Start</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: '5-min Breathing', color: 'from-green-500 to-teal-500' },
                { name: 'Focus Boost', color: 'from-blue-500 to-cyan-500' },
                { name: 'Stress Relief', color: 'from-purple-500 to-pink-500' },
                { name: 'Energy Reset', color: 'from-yellow-500 to-orange-500' }
              ].map((action, index) => (
                <motion.button
                  key={index}
                  className={`px-6 py-3 bg-gradient-to-r ${action.color} rounded-full text-white font-medium`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {action.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </NoSSR>
  );
};

export default page;