'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Brain, 
  Heart, 
  Moon, 
  Zap, 
  TrendingUp, 
  Calendar,
  Target
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: Brain, label: 'Focus Sessions', value: '24', change: '+12%', color: 'from-blue-500 to-cyan-500' },
    { icon: Heart, label: 'Mindfulness', value: '18', change: '+8%', color: 'from-pink-500 to-rose-500' },
    { icon: Moon, label: 'Sleep Quality', value: '85%', change: '+5%', color: 'from-indigo-500 to-purple-500' },
    { icon: Zap, label: 'Energy Level', value: '92%', change: '+15%', color: 'from-yellow-500 to-orange-500' }
  ];

  const recentActivities = [
    { type: 'Focus Session', duration: '25 min', time: '2 hours ago', status: 'completed' },
    { type: 'Breathing Exercise', duration: '10 min', time: '4 hours ago', status: 'completed' },
    { type: 'Light Therapy', duration: '15 min', time: '6 hours ago', status: 'completed' },
    { type: 'CBT Session', duration: '30 min', time: '1 day ago', status: 'completed' }
  ];

  const weeklyGoals = [
    { name: 'Daily Meditation', progress: 85, target: 7, current: 6 },
    { name: 'Focus Sessions', progress: 60, target: 10, current: 6 },
    { name: 'Sleep Hours', progress: 90, target: 56, current: 50 },
    { name: 'Breathing Exercises', progress: 40, target: 5, current: 2 }
  ];

  return (
    <section id="dashboard" className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/3 w-96 h-96 rounded-full opacity-5"
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 tracking-wide">
            Your Wellness Dashboard
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track your progress and maintain your mental wellness journey
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} p-3 flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex items-center text-green-400 text-sm">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {stat.change}
                    </div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-semibold text-white">{stat.value}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Activity className="w-5 h-5 mr-2" />
                  Recent Activities
                </h3>
                <button className="text-gray-400 hover:text-white text-sm">View All</button>
              </div>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div>
                        <div className="text-white font-medium">{activity.type}</div>
                        <div className="text-gray-400 text-sm">{activity.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white text-sm">{activity.duration}</div>
                      <div className="text-green-400 text-xs capitalize">{activity.status}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Weekly Goals */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Target className="w-5 h-5 mr-2" />
                  Weekly Goals
                </h3>
                <Calendar className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-6">
                {weeklyGoals.map((goal, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-white text-sm font-medium">{goal.name}</span>
                      <span className="text-gray-400 text-xs">{goal.current}/{goal.target}</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${goal.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Zap className="w-5 h-5 mr-2" />
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Start Focus', icon: Brain, color: 'from-blue-500 to-cyan-500' },
                { name: 'Breathing', icon: Heart, color: 'from-pink-500 to-rose-500' },
                { name: 'Sleep Mode', icon: Moon, color: 'from-indigo-500 to-purple-500' },
                { name: 'Light Therapy', icon: Zap, color: 'from-yellow-500 to-orange-500' }
              ].map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <motion.button
                    key={index}
                    className="flex flex-col items-center space-y-2 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.color} p-3 flex items-center justify-center`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-white text-sm font-medium">{action.name}</span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;