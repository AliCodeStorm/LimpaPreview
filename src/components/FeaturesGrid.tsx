'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Heart, Moon, Zap, Wind, Sparkles, Focus, Timer, Headphones } from 'lucide-react';

const FeaturesGrid = () => {
  const features = [
    {
      icon: Brain,
      title: 'Focus Sessions',
      description: 'Deep concentration modes with binaural beats',
      color: 'from-blue-500/20 to-purple-500/20',
      video: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    },
    {
      icon: Heart,
      title: 'Mindfulness',
      description: 'Guided meditation for inner peace',
      color: 'from-pink-500/20 to-red-500/20',
      video: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      icon: Moon,
      title: 'Sleep Stories',
      description: 'Calming narratives for better rest',
      color: 'from-indigo-500/20 to-blue-500/20',
      video: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg'
    },
    {
      icon: Zap,
      title: 'Energy Boost',
      description: 'Quick sessions to revitalize your mind',
      color: 'from-yellow-500/20 to-orange-500/20',
      video: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg'
    },
    {
      icon: Wind,
      title: 'Breathing',
      description: 'Guided breathwork exercises',
      color: 'from-green-500/20 to-teal-500/20',
      video: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      icon: Sparkles,
      title: 'Visualization',
      description: 'Creative imagery for manifestation',
      color: 'from-purple-500/20 to-pink-500/20',
      video: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    },
    {
      icon: Focus,
      title: 'Concentration',
      description: 'Enhanced focus with ambient sounds',
      color: 'from-cyan-500/20 to-blue-500/20',
      video: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg'
    },
    {
      icon: Timer,
      title: 'Pomodoro',
      description: 'Productivity sessions with breaks',
      color: 'from-orange-500/20 to-red-500/20',
      video: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg'
    },
    {
      icon: Headphones,
      title: 'Soundscapes',
      description: 'Immersive audio environments',
      color: 'from-teal-500/20 to-green-500/20',
      video: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-5"
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
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Discover Your Path
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Explore our comprehensive collection of meditation and focus tools designed to enhance your mental clarity
          </p>
        </motion.div>

        {/* 3x3 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                // variants={itemVariants}
                className="group relative"
              >
                <motion.div
                  className="relative h-80 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(135deg, ${feature.color.split(' ')[1]} 0%, ${feature.color.split(' ')[3]} 100%)`
                  }}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                    style={{ backgroundImage: `url(${feature.video})` }}
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6">
                    {/* Icon */}
                    <motion.div
                      className="self-start"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>

                    {/* Text Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)'
                      }}
                    />

                    {/* Animated Border */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300"
                      style={{
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) border-box'
                      }}
                    />
                  </div>

                  {/* Floating Particles */}
                  <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          left: `${20 + (i * 30)}%`,
                          top: `${30 + (i * 20)}%`,
                        }}
                        animate={{
                          y: [0, -10, 0],
                          opacity: [0.3, 0.8, 0.3],
                          scale: [1, 1.2, 1],
                        }}
                        transition={{
                          duration: 2 + (i * 0.5),
                          repeat: Infinity,
                          delay: i * 0.3,
                          ease: "easeInOut"
                        }}
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;