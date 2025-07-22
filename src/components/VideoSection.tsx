'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2 } from 'lucide-react';
import NoSSR from './NoSRR';

type Video = {
  title: string;
  duration: string;
  thumbnail: string;
  category: string;
};
const VideoSection = () => {
  const videos: Video[] = [
    {
      title: 'Morning Meditation',
      duration: '10 min',
      thumbnail: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg',
      category: 'Mindfulness'
    },
    {
      title: 'Focus Flow',
      duration: '25 min',
      thumbnail: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
      category: 'Concentration'
    },
    {
      title: 'Evening Wind Down',
      duration: '15 min',
      thumbnail: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg',
      category: 'Sleep'
    }
  ];

  return (
    <NoSSR>
      <section id="sessions" className="py-20 bg-gray-900 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-1/2 right-1/4 w-80 h-80 rounded-full opacity-5"
            style={{
              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)'
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 10,
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
              Featured Sessions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Immerse yourself in our carefully crafted meditation and focus sessions
            </p>
          </motion.div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <motion.div
                  className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Video Thumbnail */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${video.thumbnail})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <Play className="w-6 h-6 text-white ml-1" />
                    </div>
                  </motion.div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/20">
                    <span className="text-white text-sm font-medium">{video.duration}</span>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                    <span className="text-white text-sm font-medium">{video.category}</span>
                  </div>

                  {/* Controls (appear on hover) */}
                  <motion.div
                    className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <div className="flex items-center space-x-2">
                      <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <Pause className="w-4 h-4 text-white" />
                      </button>
                      <button className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center">
                        <Volume2 className="w-4 h-4 text-white" />
                      </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="flex-1 mx-4 h-1 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-white/60 rounded-full"
                        initial={{ width: '0%' }}
                        animate={{ width: '30%' }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                      />
                    </div>
                  </motion.div>

                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-colors duration-300"
                  />
                </motion.div>

                {/* Video Info */}
                <div className="mt-4 space-y-2">
                  <h3 className="text-xl font-medium text-white group-hover:text-white/90 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Perfect for {video.category.toLowerCase()} and relaxation
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.button
              className="px-8 py-3 text-white rounded-full border border-white/20 backdrop-blur-sm"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 8px 25px rgba(255, 255, 255, 0.15)'
              }}
              whileTap={{ scale: 0.98 }}
            >
              View All Sessions
            </motion.button>
          </motion.div>
        </div>
      </section>
    </NoSSR>
  );
};

export default VideoSection;