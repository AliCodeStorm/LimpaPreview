'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Play, Pause, Volume2, Waves, Brain, Moon, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const moodStates = [
    {
        name: 'Relax',
        description: 'Calms your mind to create feelings of comfort and safety',
        color: 'from-blue-400 to-cyan-400',
        icon: Waves,
        bgColor: 'from-blue-900/20 to-cyan-900/20'
    },
    {
        name: 'Focus',
        description: 'Boosts your productivity by helping you concentrate for longer',
        color: 'from-purple-400 to-pink-400',
        icon: Brain,
        bgColor: 'from-purple-900/20 to-pink-900/20'
    },
    {
        name: 'Sleep',
        description: 'Soothes you into a deep sleep with soft, gentle sounds',
        color: 'from-indigo-400 to-purple-400',
        icon: Moon,
        bgColor: 'from-indigo-900/20 to-purple-900/20'
    },
    {
        name: 'Activity',
        description: 'Powers your movement with sounds to keep you present and grounded',
        color: 'from-green-400 to-teal-400',
        icon: Zap,
        bgColor: 'from-gray-900 to-gray-900/90'
    },
]

export default function HeroSection() {
    const [currentMood, setCurrentMood] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMood((prev) => (prev + 1) % moodStates.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    const currentState = moodStates[currentMood]

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 pb-8 relative overflow-hidden">
            {/* Dynamic Background Gradient */}
            <div
                className={`absolute inset-0 bg-black`}
            />

            <div className="max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10 w-full">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-3 lg:space-y-4"
                    >
                        <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white">
                            Transform Your
                            <motion.span
                                key={currentMood}
                                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.8 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className={`block bg-gradient-to-r ${currentState.color} bg-clip-text text-transparent`}
                            >
                                {currentState.name}
                            </motion.span>
                        </motion.h1>
                    </motion.div>

                    <motion.p
                        className="text-lg sm:text-xl lg:text-2xl text-white/80 max-w-2xl leading-relaxed mx-auto lg:mx-0"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                    >
                        Lempa combines AI-driven personalization with proven therapeutic techniques to support your unique journey.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        <Button
                            size="lg"
                            className={`bg-gradient-to-r ${currentState.color} hover:scale-105 transform transition-all duration-300 text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto shadow-2xl w-full sm:w-auto`}
                        >
                            Start Your Journey
                        </Button>
                        <Button
                            variant="glass"
                            size="lg"
                            className="text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 h-auto hover:scale-105 transform transition-all duration-300 w-full sm:w-auto"
                        >
                            <Link href='/features'>Explore Features</Link>
                        </Button>
                    </motion.div>

                    {/* Mood Indicators */}
                    <motion.div
                        className="flex justify-center lg:justify-start space-x-3 lg:space-x-4 pt-6 lg:pt-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        {moodStates.map((mood, index) => (
                            <motion.button
                                key={mood.name}
                                onClick={() => setCurrentMood(index)}
                                className={`p-2.5 lg:p-3 rounded-full transition-all duration-300 ${index === currentMood
                                        ? `bg-gradient-to-r ${mood.color} shadow-lg scale-110`
                                        : 'bg-white/10 hover:bg-white/20'
                                    }`}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <mood.icon
                                    size={18}
                                    className={index === currentMood ? 'text-white' : 'text-white/60'}
                                />
                            </motion.button>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Content - Enhanced Phone Mockup */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex justify-center relative order-1 lg:order-2 mb-8 lg:mb-0"
                >
                    {/* Floating Elements */}
                    <motion.div
                        className="absolute top-4 lg:top-8 -left-4 lg:-left-8 w-12 lg:w-16 h-12 lg:h-16 bg-purple-400/20 rounded-full blur-xl"
                        animate={{
                            y: [-20, 20, -20],
                            x: [-10, 10, -10],
                            scale: [1, 1.2, 1]
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.div
                        className="absolute -bottom-4 lg:-bottom-8 -right-4 lg:-right-8 w-10 lg:w-12 h-10 lg:h-12 bg-pink-400/20 rounded-full blur-xl"
                        animate={{
                            y: [20, -20, 20],
                            x: [10, -10, 10],
                            scale: [1.2, 1, 1.2]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    />

                    {/* Phone Frame */}
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.02, rotateY: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="w-64 sm:w-72 lg:w-80 h-[512px] sm:h-[576px] lg:h-[640px] bg-black rounded-[2.5rem] lg:rounded-[3rem] p-1.5 lg:p-2 shadow-2xl relative overflow-hidden">
                            {/* Glow Effect */}
                            <motion.div
                                className={`absolute inset-0 bg-gradient-to-br ${currentState.color} opacity-20 rounded-[2.5rem] lg:rounded-[3rem]`}
                                animate={{ opacity: [0.1, 0.3, 0.1] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />

                            <div className="w-full h-full bg-gradient-to-br from-slate-900 to-black rounded-[2rem] lg:rounded-[2.5rem] relative overflow-hidden">
                                {/* Status Bar */}
                                <div className="flex justify-between items-center px-4 lg:px-6 py-3 lg:py-4 text-white text-xs lg:text-sm">
                                    <span className="font-medium">9:41</span>
                                    <div className="flex space-x-1">
                                        <div className="w-3 lg:w-4 h-1.5 lg:h-2 bg-white/80 rounded-sm"></div>
                                        <div className="w-3 lg:w-4 h-1.5 lg:h-2 bg-white/60 rounded-sm"></div>
                                        <div className="w-5 lg:w-6 h-1.5 lg:h-2 bg-white rounded-sm"></div>
                                    </div>
                                </div>

                                {/* App Content */}
                                <div className="px-4 lg:px-6 py-3 lg:py-4 flex flex-col h-full">
                                    {/* Header */}
                                    <motion.div
                                        key={currentMood}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6 }}
                                        className="text-center mb-6 lg:mb-8"
                                    >
                                        <h2 className="text-white text-2xl lg:text-3xl font-bold mb-2">
                                            {currentState.name}
                                        </h2>
                                        <p className="text-white/60 text-xs lg:text-sm">Morning Energy Rise</p>
                                    </motion.div>

                                    {/* Central Visualization */}
                                    <div className="flex-1 flex items-center justify-center relative mb-6 lg:mb-8">
                                        {/* Outer Rings */}
                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        >
                                            <div className="w-48 lg:w-64 h-48 lg:h-64 border border-white/10 rounded-full"></div>
                                        </motion.div>

                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            animate={{ rotate: -360 }}
                                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        >
                                            <div className="w-36 lg:w-48 h-36 lg:h-48 border border-white/15 rounded-full"></div>
                                        </motion.div>

                                        <motion.div
                                            className="absolute inset-0 flex items-center justify-center"
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                        >
                                            <div className="w-24 lg:w-32 h-24 lg:h-32 border border-white/20 rounded-full"></div>
                                        </motion.div>

                                        {/* Center Orb */}
                                        <motion.div
                                            className="relative z-10"
                                            animate={{
                                                scale: [1, 1.2, 1],
                                                boxShadow: [
                                                    `0 0 20px rgba(147, 51, 234, 0.3)`,
                                                    `0 0 40px rgba(147, 51, 234, 0.6)`,
                                                    `0 0 20px rgba(147, 51, 234, 0.3)`
                                                ]
                                            }}
                                            transition={{ duration: 3, repeat: Infinity }}
                                        >
                                            <div className={`w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r ${currentState.color} rounded-full flex items-center justify-center`}>
                                                <currentState.icon className="text-white" size={24} />
                                            </div>
                                        </motion.div>

                                        {/* Floating Particles */}
                                        {[...Array(8)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute w-2 h-2 bg-white/40 rounded-full"
                                                animate={{
                                                    x: [0, Math.cos(i * 45 * Math.PI / 180) * 80],
                                                    y: [0, Math.sin(i * 45 * Math.PI / 180) * 80],
                                                    opacity: [0, 1, 0],
                                                    scale: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 4,
                                                    repeat: Infinity,
                                                    delay: i * 0.5,
                                                    ease: "easeInOut"
                                                }}
                                                style={{
                                                    left: '50%',
                                                    top: '50%',
                                                    transform: 'translate(-50%, -50%)'
                                                }}
                                            />
                                        ))}
                                    </div>

                                    {/* Control Icons */}
                                    <div className="flex justify-center space-x-4 lg:space-x-6 mb-6 lg:mb-8">
                                        {[Volume2, Waves, Brain, Moon].map((Icon, i) => (
                                            <motion.div
                                                key={i}
                                                className="w-10 lg:w-12 h-10 lg:h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm"
                                                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                                                whileTap={{ scale: 0.9 }}
                                            >
                                                <Icon className="text-white/80" size={16} />
                                            </motion.div>
                                        ))}
                                    </div>

                                    {/* Play Button */}
                                    <div className="flex justify-center mt-auto mb-10">
                                        <motion.button
                                            className={`w-16 lg:w-20 h-16 lg:h-20 bg-gradient-to-r ${currentState.color} rounded-full flex items-center justify-center shadow-lg`}
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setIsPlaying(!isPlaying)}
                                            animate={isPlaying ? {
                                                boxShadow: [
                                                    `0 0 20px rgba(147, 51, 234, 0.4)`,
                                                    `0 0 40px rgba(147, 51, 234, 0.8)`,
                                                    `0 0 20px rgba(147, 51, 234, 0.4)`
                                                ]
                                            } : {}}
                                            transition={{ duration: 2, repeat: Infinity }}
                                        >
                                            {isPlaying ? (
                                                <Pause className="text-white" size={20} />
                                            ) : (
                                                <Play className="text-white ml-1" size={20} />
                                            )}
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Scroll Indicator */}
            <motion.div
                className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                    <motion.div
                        className="w-1 h-3 bg-white/60 rounded-full mt-2"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    )
}