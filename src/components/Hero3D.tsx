'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import NoSSR from './NoSRR';

const Hero3D = () => {
  const router = useRouter();

  return (
    <NoSSR>
      <section className="min-h-screen bg-black relative overflow-hidden flex items-center justify-center">
        {/* 3D Background Elements */}
        <div className="absolute inset-0 perspective-1000">
          {/* Floating 3D Spheres */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full opacity-20"
              style={{
                width: `${60 + (i * 20)}px`,
                height: `${60 + (i * 20)}px`,
                left: `${10 + (i * 12)}%`,
                top: `${15 + (i * 8)}%`,
                background: `radial-gradient(circle, ${i % 3 === 0 ? 'rgba(99, 102, 241, 0.6)' :
                    i % 3 === 1 ? 'rgba(168, 85, 247, 0.6)' :
                      'rgba(34, 197, 94, 0.6)'
                  } 0%, transparent 70%)`,
                filter: 'blur(1px)',
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotateX: [0, 360],
                rotateY: [0, 180],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 8 + (i * 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}

          {/* 3D Geometric Shapes */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`geo-${i}`}
              className="absolute"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${25 + (i * 12)}%`,
                transformStyle: 'preserve-3d',
              }}
              animate={{
                rotateX: [0, 360],
                rotateY: [0, 360],
                rotateZ: [0, 180],
              }}
              transition={{
                duration: 15 + (i * 3),
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                className="w-8 h-8 border border-white/20"
                style={{
                  background: 'linear-gradient(45deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                  transform: `rotateX(${i * 60}deg) rotateY(${i * 45}deg)`,
                }}
              />
            </motion.div>
          ))}

          {/* Floating Light Orbs */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `radial-gradient(circle, ${i % 4 === 0 ? 'rgba(255, 255, 255, 0.8)' :
                    i % 4 === 1 ? 'rgba(99, 102, 241, 0.8)' :
                      i % 4 === 2 ? 'rgba(168, 85, 247, 0.8)' :
                        'rgba(34, 197, 94, 0.8)'
                  } 0%, transparent 70%)`,
                boxShadow: `0 0 20px ${i % 4 === 0 ? 'rgba(255, 255, 255, 0.5)' :
                    i % 4 === 1 ? 'rgba(99, 102, 241, 0.5)' :
                      i % 4 === 2 ? 'rgba(168, 85, 247, 0.5)' :
                        'rgba(34, 197, 94, 0.5)'
                  }`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 50, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 6 + (i * 0.8),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}

          {/* 3D Grid Background */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: '60px 60px',
              transform: 'perspective(1000px) rotateX(60deg)',
              transformOrigin: 'center bottom',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '60px 60px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Animated Gradient Waves */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
              radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)
            `,
            }}
            animate={{
              background: [
                `radial-gradient(ellipse at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 80% 20%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 40% 80%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`,
                `radial-gradient(ellipse at 80% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 20% 70%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 60% 20%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`,
                `radial-gradient(ellipse at 40% 70%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 70% 40%, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
               radial-gradient(ellipse at 30% 30%, rgba(34, 197, 94, 0.15) 0%, transparent 50%)`
              ]
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* 3D Logo Container */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-12"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Main Logo */}
            <motion.h1
              className="text-8xl md:text-9xl lg:text-[12rem] font-light text-white tracking-wider relative"
              style={{
                textShadow: `
                0 0 20px rgba(255, 255, 255, 0.5),
                0 0 40px rgba(255, 255, 255, 0.3),
                0 0 60px rgba(255, 255, 255, 0.1),
                0 0 80px rgba(99, 102, 241, 0.2)
              `,
                transform: 'translateZ(50px)',
              }}
              animate={{
                textShadow: [
                  `0 0 20px rgba(255, 255, 255, 0.5),
                 0 0 40px rgba(255, 255, 255, 0.3),
                 0 0 60px rgba(255, 255, 255, 0.1),
                 0 0 80px rgba(99, 102, 241, 0.2)`,
                  `0 0 30px rgba(255, 255, 255, 0.7),
                 0 0 50px rgba(255, 255, 255, 0.4),
                 0 0 70px rgba(255, 255, 255, 0.2),
                 0 0 100px rgba(168, 85, 247, 0.3)`,
                  `0 0 20px rgba(255, 255, 255, 0.5),
                 0 0 40px rgba(255, 255, 255, 0.3),
                 0 0 60px rgba(255, 255, 255, 0.1),
                 0 0 80px rgba(99, 102, 241, 0.2)`
                ]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Lempa
            </motion.h1>

            {/* 3D Shadow/Reflection */}
            <motion.div
              className="absolute inset-0 text-8xl md:text-9xl lg:text-[12rem] font-light text-white/10 tracking-wider"
              style={{
                transform: 'translateZ(-20px) rotateX(180deg) scaleY(-1)',
                background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.8) 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
              }}
              animate={{
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Lempa
            </motion.div>
          </motion.div>

          {/* 3D Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
            className="mb-16"
          >
            <motion.p
              className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide relative"
              style={{
                transform: 'translateZ(30px)',
                textShadow: '0 0 20px rgba(255, 255, 255, 0.2)',
              }}
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              Personalized soundscapes to help you focus, relax, and sleep. Backed by neuroscience.
            </motion.p>
          </motion.div>

          {/* 3D Get Started Button */}
          <motion.div
            initial={{ opacity: 0, y: 40, rotateX: -25 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.button
              onClick={() => router.push('/dashboard')}
              className="relative px-16 py-5 text-xl font-medium text-white rounded-full border border-white/20 backdrop-blur-sm overflow-hidden group"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
                boxShadow: `
                0 8px 32px rgba(255, 255, 255, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 0 0 1px rgba(255, 255, 255, 0.1)
              `,
                transform: 'translateZ(40px)',
              }}
              whileHover={{
                scale: 1.05,
                rotateX: -5,
                rotateY: 5,
                boxShadow: `
                0 12px 40px rgba(255, 255, 255, 0.2),
                inset 0 1px 0 rgba(255, 255, 255, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.2),
                0 0 50px rgba(99, 102, 241, 0.3)
              `
              }}
              whileTap={{
                scale: 0.98,
                rotateX: 0,
                rotateY: 0,
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated Background Layers */}
              <motion.div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.3) 100%)'
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
                  transform: 'translateX(-100%)'
                }}
                animate={{
                  transform: ['translateX(-100%)', 'translateX(100%)']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              />

              {/* Button Text */}
              <span className="relative z-10 tracking-wide">Get Started</span>

              {/* 3D Button Shadow */}
              <motion.div
                className="absolute inset-0 rounded-full bg-black/20"
                style={{
                  transform: 'translateZ(-10px) translateY(5px)',
                  filter: 'blur(10px)',
                }}
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.button>
          </motion.div>

          {/* Floating 3D Particles around content */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-white rounded-full"
                style={{
                  left: `${10 + (i * 6)}%`,
                  top: `${20 + (i * 5)}%`,
                  opacity: 0.4,
                  boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, 0],
                  opacity: [0.4, 0.8, 0.4],
                  scale: [1, 1.5, 1],
                  rotateZ: [0, 360],
                }}
                transition={{
                  duration: 4 + (i * 0.3),
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>
        </div>

        {/* 3D Depth Layers */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`depth-${i}`}
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at ${50 + (i * 10)}% ${50 + (i * 5)}%, rgba(255, 255, 255, ${0.02 + (i * 0.01)}) 0%, transparent 50%)`,
                transform: `translateZ(${-50 - (i * 20)}px)`,
              }}
              animate={{
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8 + (i * 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </section>
    </NoSSR>
  );
};

export default Hero3D;