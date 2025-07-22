'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  User, 
  Settings, 
  Award, 
  Calendar,
  Clock,
  Target,
  TrendingUp,
  Edit,
  Bell,
  Shield,
  Smartphone,
  Moon,
  Sun
} from 'lucide-react';

type Achievement = {
  name: string;
  description: string;
  earned: boolean;
  date?: string;
  progress?: number;
};

type Stat = {
  label: string;
  value: string;
  icon: React.ElementType;
  color: string;
};
type Preference = {
  name: string;
  description: string;
  enabled: boolean;
};

const page = () => {
  const achievements: Achievement[] = [
    { name: '7-Day Streak', description: 'Meditated for 7 consecutive days', earned: true, date: '2 days ago' },
    { name: 'Focus Master', description: 'Completed 50 focus sessions', earned: true, date: '1 week ago' },
    { name: 'Early Bird', description: 'Morning meditation for 30 days', earned: false, progress: 75 },
    { name: 'Zen Master', description: 'Reached 100 hours of meditation', earned: false, progress: 45 }
  ];

  const stats: Stat[] = [
    { label: 'Total Sessions', value: '163', icon: Target, color: 'from-blue-500 to-cyan-500' },
    { label: 'Hours Practiced', value: '42.5', icon: Clock, color: 'from-green-500 to-emerald-500' },
    { label: 'Current Streak', value: '12', icon: Calendar, color: 'from-purple-500 to-pink-500' },
    { label: 'Points Earned', value: '1,250', icon: Award, color: 'from-yellow-500 to-orange-500' }
  ];

  const preferences: Preference[] = [
    { name: 'Notifications', description: 'Daily reminders and progress updates', enabled: true },
    { name: 'Dark Mode', description: 'Use dark theme throughout the app', enabled: true },
    { name: 'Sound Effects', description: 'Play sounds during sessions', enabled: false },
    { name: 'Auto-sync', description: 'Sync data across all devices', enabled: true }
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
          <div className="relative inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto">
              <User className="w-16 h-16 text-white" />
            </div>
            <motion.button
              className="absolute bottom-0 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Edit className="w-4 h-4 text-white" />
            </motion.button>
          </div>
          <h1 className="text-4xl md:text-5xl font-light text-white mb-2 tracking-wide">
            Anonymous User
          </h1>
          <p className="text-xl text-gray-400 mb-4">
            Member since January 2024
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Award className="w-4 h-4" />
              <span>1,250 points</span>
            </div>
            <div className="flex items-center space-x-1">
              <TrendingUp className="w-4 h-4" />
              <span>Level 8</span>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} p-3 flex items-center justify-center mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-semibold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <Award className="w-5 h-5 mr-2" />
                  Achievements
                </h3>
                <button className="text-gray-400 hover:text-white text-sm">View All</button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className={`p-4 rounded-xl border transition-all duration-200 ${
                      achievement.earned 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-yellow-500/30' 
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h4 className={`font-medium text-sm mb-1 ${achievement.earned ? 'text-yellow-400' : 'text-white'}`}>
                          {achievement.name}
                        </h4>
                        <p className="text-gray-400 text-xs leading-relaxed">
                          {achievement.description}
                        </p>
                      </div>
                      {achievement.earned ? (
                        <Award className="w-5 h-5 text-yellow-400 flex-shrink-0 ml-2" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-600 rounded-full flex-shrink-0 ml-2" />
                      )}
                    </div>
                    
                    {achievement.earned ? (
                      <div className="text-yellow-400 text-xs">Earned {achievement.date}</div>
                    ) : (
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-gray-400">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1">
                          <motion.div
                            className="bg-gradient-to-r from-blue-500 to-purple-500 h-1 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${achievement.progress}%` }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                          />
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Settings & Preferences */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Account Settings */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                <Settings className="w-5 h-5 mr-2" />
                Settings
              </h3>

              <div className="space-y-4">
                {[
                  { name: 'Edit Profile', icon: User },
                  { name: 'Notifications', icon: Bell },
                  { name: 'Privacy & Security', icon: Shield },
                  { name: 'Connected Devices', icon: Smartphone }
                ].map((setting, index) => {
                  const IconComponent = setting.icon;
                  return (
                    <motion.button
                      key={index}
                      className="w-full flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-200"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center space-x-3">
                        <IconComponent className="w-4 h-4 text-gray-400" />
                        <span className="text-white text-sm">{setting.name}</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Preferences</h3>

              <div className="space-y-4">
                {preferences.map((pref, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="text-white text-sm font-medium">{pref.name}</div>
                      <div className="text-gray-400 text-xs">{pref.description}</div>
                    </div>
                    <motion.button
                      className={`relative w-12 h-6 rounded-full transition-colors duration-200 ${
                        pref.enabled ? 'bg-blue-500' : 'bg-gray-600'
                      }`}
                      onClick={() => {}}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                        animate={{ x: pref.enabled ? 24 : 4 }}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { name: 'Export Data', color: 'from-green-500 to-emerald-500' },
                  { name: 'Share Progress', color: 'from-blue-500 to-cyan-500' },
                  { name: 'Reset Stats', color: 'from-red-500 to-pink-500' }
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