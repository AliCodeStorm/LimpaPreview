'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Particle {
    id: number
    x: number
    y: number
    size: number
    opacity: number
    velocity: { x: number; y: number }
}

export default function AnimatedBackground() {
    const [particles, setParticles] = useState<Particle[]>([])

    useEffect(() => {
        const generateParticles = () => {
            const newParticles: Particle[] = []
            for (let i = 0; i < 50; i++) {
                newParticles.push({
                    id: i,
                    x: Math.random() * window.innerWidth,
                    y: Math.random() * window.innerHeight,
                    size: Math.random() * 4 + 1,
                    opacity: Math.random() * 0.5 + 0.1,
                    velocity: {
                        x: (Math.random() - 0.5) * 0.5,
                        y: (Math.random() - 0.5) * 0.5,
                    },
                })
            }
            setParticles(newParticles)
        }

        generateParticles()
        window.addEventListener('resize', generateParticles)
        return () => window.removeEventListener('resize', generateParticles)
    }, [])

    useEffect(() => {
        const animateParticles = () => {
            setParticles(prev => prev.map(particle => {
                const newX = particle.x + particle.velocity.x
                const newY = particle.y + particle.velocity.y
                return {
                    ...particle,
                    x: newX > window.innerWidth ? 0 : newX < 0 ? window.innerWidth : newX,
                    y: newY > window.innerHeight ? 0 : newY < 0 ? window.innerHeight : newY,
                }
            }))
        }

        const interval = setInterval(animateParticles, 50)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900" />

            {/* Animated Particles */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-white"
                    style={{
                        left: particle.x,
                        top: particle.y,
                        width: particle.size,
                        height: particle.size,
                        opacity: particle.opacity,
                    }}
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity],
                    }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            {/* Geometric Patterns */}
            <svg className="absolute inset-0 w-full h-full opacity-10">
                <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Animated Waves */}
            <motion.div
                className="absolute bottom-0 left-0 w-full h-32 opacity-20"
                animate={{
                    backgroundPosition: ['0% 0%', '100% 0%'],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
                style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                    backgroundSize: '200% 100%',
                }}
            />
        </div>
    )
}