'use client';
import React from 'react';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Users,
  BookOpen,
  ClipboardList,
  Send,
  Heart,
  MessageSquare,
  Star,
  Trophy,
  Calendar
} from 'lucide-react';
import NoSSR from '@/components/NoSRR';

const page = () => {
  const communityFeatures = [
    {
      icon: MessageCircle,
      title: 'Chat',
      description: 'Connect with others on similar wellness journeys',
      count: '2.4k active',
      color: 'from-blue-500 to-cyan-500',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg'
    },
    {
      icon: Users,
      title: 'Groups',
      description: 'Join specialized support groups and communities',
      count: '156 groups',
      color: 'from-green-500 to-emerald-500',
      image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg'
    },
    {
      icon: BookOpen,
      title: 'Courses',
      description: 'Learn from expert-led wellness and mindfulness courses',
      count: '24 courses',
      color: 'from-purple-500 to-pink-500',
      image: 'https://images.pexels.com/photos/3771069/pexels-photo-3771069.jpeg'
    },
    {
      icon: ClipboardList,
      title: 'Assessments',
      description: 'Track your progress with professional wellness assessments',
      count: '12 available',
      color: 'from-orange-500 to-red-500',
      image: 'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg'
    }
  ];

  const recentMessages = [
    { user: 'Sarah M.', message: 'Just completed my first week of meditation!', time: '2m ago', likes: 12 },
    { user: 'Alex K.', message: 'Anyone have tips for morning anxiety?', time: '15m ago', likes: 8 },
    { user: 'Maya P.', message: 'The breathing exercises really helped today', time: '1h ago', likes: 15 },
    { user: 'Jordan L.', message: 'Celebrating 30 days of consistent practice!', time: '2h ago', likes: 23 }
  ];

  const popularGroups = [
    { name: 'Anxiety Support', members: 1240, activity: 'Very Active' },
    { name: 'Meditation Beginners', members: 890, activity: 'Active' },
    { name: 'Sleep Improvement', members: 650, activity: 'Active' },
    { name: 'Mindful Parents', members: 420, activity: 'Moderate' }
  ];

  const featuredCourses = [
    { title: 'Mindfulness Fundamentals', instructor: 'Dr. Emma Wilson', rating: 4.9, students: 2340 },
    { title: 'Anxiety Management', instructor: 'Prof. Michael Chen', rating: 4.8, students: 1890 },
    { title: 'Better Sleep Habits', instructor: 'Dr. Lisa Rodriguez', rating: 4.7, students: 1560 }
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
              Community
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Connect, learn, and grow together with our supportive wellness community
            </p>
          </motion.div>

          {/* Community Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {communityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group relative"
                >
                  <motion.div
                    className="relative h-64 rounded-2xl overflow-hidden border border-white/10 backdrop-blur-sm bg-black/20"
                    whileHover={{
                      scale: 1.02,
                      boxShadow: '0 20px 40px rgba(255, 255, 255, 0.1)'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                      style={{ backgroundImage: `url(${feature.image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                    {/* Content */}
                    <div className="relative h-full flex flex-col justify-between p-6">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} p-3 flex items-center justify-center`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-gray-400 text-sm">{feature.count}</span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="text-2xl font-medium text-white group-hover:text-white/90 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                      <motion.button
                        className="w-full py-2 px-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/20 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Explore {feature.title}
                      </motion.button>

                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* Community Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Messages */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Recent Messages
                </h3>
                <button className="text-gray-400 hover:text-white text-sm">View All</button>
              </div>

              <div className="space-y-4">
                {recentMessages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-white font-medium text-sm">{msg.user}</span>
                      <span className="text-gray-400 text-xs">{msg.time}</span>
                    </div>
                    <p className="text-gray-300 text-sm mb-3">{msg.message}</p>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-red-400 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{msg.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-400 hover:text-blue-400 transition-colors">
                        <MessageSquare className="w-4 h-4" />
                        <span className="text-xs">Reply</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 flex space-x-2">
                <input
                  type="text"
                  placeholder="Share your thoughts..."
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white placeholder-gray-400 text-sm focus:outline-none focus:border-white/40"
                />
                <button className="p-2 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Popular Groups */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Users className="w-5 h-5 mr-2" />
                  Popular Groups
                </h3>
                <button className="text-gray-400 hover:text-white text-sm">Browse All</button>
              </div>

              <div className="space-y-4">
                {popularGroups.map((group, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                  >
                    <div>
                      <div className="text-white font-medium text-sm">{group.name}</div>
                      <div className="text-gray-400 text-xs">{group.members} members</div>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs px-2 py-1 rounded-full ${group.activity === 'Very Active' ? 'bg-green-500/20 text-green-400' :
                        group.activity === 'Active' ? 'bg-blue-500/20 text-blue-400' :
                          'bg-yellow-500/20 text-yellow-400'
                        }`}>
                        {group.activity}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Featured Courses */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Featured Courses
                </h3>
                <button className="text-gray-400 hover:text-white text-sm">View All</button>
              </div>

              <div className="space-y-4">
                {featuredCourses.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm mb-1">{course.title}</div>
                        <div className="text-gray-400 text-xs mb-2">{course.instructor}</div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-yellow-400 text-xs">{course.rating}</span>
                          </div>
                          <div className="text-gray-400 text-xs">{course.students} students</div>
                        </div>
                      </div>
                      <Trophy className="w-4 h-4 text-yellow-400" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Community Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { label: 'Active Members', value: '12.4k', icon: Users },
              { label: 'Messages Today', value: '2.8k', icon: MessageCircle },
              { label: 'Support Groups', value: '156', icon: Heart },
              { label: 'Events This Week', value: '24', icon: Calendar }
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center">
                  <IconComponent className="w-8 h-8 text-white/60 mx-auto mb-3" />
                  <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </NoSSR >
  );
};

export default page;