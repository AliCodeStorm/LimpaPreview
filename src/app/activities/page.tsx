'use client'
import React from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle,
  Dumbbell,
  Eye,
  Calendar,
  Target,
  TrendingUp,
  Plus,
  Clock
} from 'lucide-react';

const page = () => {
  const activities = [
    {
      icon: CheckCircle,
      title: 'Habits',
      description: 'Build and track daily wellness habits',
      count: 12,
      color: 'from-green-500 to-emerald-500',
      items: ['Morning Meditation', 'Gratitude Journal', 'Evening Reflection', 'Hydration Tracking']
    },
    {
      icon: Dumbbell,
      title: 'Exercises',
      description: 'Physical and mental wellness exercises',
      count: 8,
      color: 'from-blue-500 to-cyan-500',
      items: ['Breathing Exercises', 'Progressive Relaxation', 'Mindful Walking', 'Yoga Flow']
    },
    {
      icon: Eye,
      title: 'Exposure',
      description: 'Gradual exposure therapy for anxiety management',
      count: 6,
      color: 'from-purple-500 to-pink-500',
      items: ['Social Situations', 'Public Speaking', 'Heights', 'Crowded Spaces']
    }
  ];

  const recentActivities = [
    { name: 'Morning Meditation', type: 'Habit', completed: true, time: '8:00 AM' },
    { name: 'Breathing Exercise', type: 'Exercise', completed: true, time: '12:30 PM' },
    { name: 'Gratitude Journal', type: 'Habit', completed: false, time: '9:00 PM' },
    { name: 'Social Exposure', type: 'Exposure', completed: true, time: '2:00 PM' }
  ];

  const weeklyStats = [
    { label: 'Habits Completed', value: '85%', change: '+12%' },
    { label: 'Exercises Done', value: '24', change: '+8%' },
    { label: 'Exposure Sessions', value: '6', change: '+3%' },
    { label: 'Streak Days', value: '12', change: '+5%' }
  ];

  return (
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
            Activities
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Track your habits, exercises, and exposure therapy progress
          </p>
        </motion.div>

        {/* Weekly Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {weeklyStats.map((stat, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 text-sm">{stat.change}</span>
              </div>
              <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Activity Categories */}
          <div className="lg:col-span-2 space-y-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${activity.color} p-3 flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{activity.title}</h3>
                        <p className="text-gray-400 text-sm">{activity.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-semibold">{activity.count}</div>
                      <div className="text-gray-400 text-xs">active</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activity.items.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="text-white text-sm">{item}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-gray-400 text-xs">Active</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    className="mt-4 w-full py-2 px-4 bg-white/10 border border-white/20 rounded-xl text-white text-sm font-medium hover:bg-white/20 transition-colors duration-200 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New {activity.title.slice(0, -1)}</span>
                  </motion.button>
                </motion.div>
              );
            })}
          </div>

          {/* Today's Activities */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Today's Activities
                </h3>
                <Clock className="w-5 h-5 text-gray-400" />
              </div>

              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${activity.completed ? 'bg-green-400' : 'bg-gray-400'}`}></div>
                      <div>
                        <div className={`text-sm font-medium ${activity.completed ? 'text-white' : 'text-gray-400'}`}>
                          {activity.name}
                        </div>
                        <div className="text-xs text-gray-500">{activity.type}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">{activity.time}</div>
                      <div className={`text-xs ${activity.completed ? 'text-green-400' : 'text-yellow-400'}`}>
                        {activity.completed ? 'Done' : 'Pending'}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Target className="w-5 h-5 mr-2" />
                Quick Actions
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Log Habit', color: 'from-green-500 to-emerald-500' },
                  { name: 'Start Exercise', color: 'from-blue-500 to-cyan-500' },
                  { name: 'Begin Exposure', color: 'from-purple-500 to-pink-500' }
                ].map((action, index) => (
                  <motion.button
                    key={index}
                    className={`w-full py-2 px-4 bg-gradient-to-r ${action.color} rounded-xl text-white text-sm font-medium`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {action.name}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default page;