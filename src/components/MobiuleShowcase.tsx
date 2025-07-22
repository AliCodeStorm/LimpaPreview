'use client';
import { Play } from 'lucide-react';

import { motion } from 'framer-motion';
// import { useState, useRef } from 'React';
import { useState,useRef } from 'react';
import NoSSR from './NoSRR';

const MobileShowcase = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const items = [
    {
      id: 0,
      type: 'image',
      sources: [
        { srcSet:'https://endel.io/pages/sleep/demo-player/explore.avif', type: 'image/avif' },
        { srcSet:'https://endel.io/pages/sleep/demo-player/explore.avif', type: 'image/webp' }
      ],
      src: 'https://endel.io/pages/sleep/demo-player/explore.avif',
      alt: 'Explore screenshot',
      description: 'Know your energy cycles, get recommendations, browse sounds, and more'
    },
    {
      id: 1,
      type: 'video',
      cover: 'https://endel.io/devices/iphone.svg',
      video: '/demo.mp4#t=0.1',
      alt: 'Demo video cover',
      description: 'Endel creates endless, personalized sounds to help you focus, relax, and sleep'
    },
    {
      id: 2,
      type: 'image',
      src: 'https://endel.io/pages/sleep/demo-player/smart-alarm.svg',
      alt: 'Smart alarm screenshot',
      description: 'Wake up relaxed and refreshed with our gradual-waking Smart Alarm'
    }
  ];

  // Star animation variants
  const starVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <NoSSR>
    <div className="relative py-16 overflow-hidde bg-black">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
            }}
            // variants={starVariants}
            animate="animate"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center md:gap-6 lg:gap-12">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative w-full max-w-[368px] ${index === 1 ? 'md:mt-8' : ''}`}
            >
              {/* Phone Container */}
              <div className="relative h-[610px] w-[368px]">
                {/* Phone Frame SVG */}
                <img 
                  src="https://endel.io/devices/iphone.svg" 
                  alt="iPhone 15 pro" 
                  className="absolute inset-0 h-full w-full"
                  width={368}
                  height={610}
                />
                
                {/* Content Area */}
                <div className="absolute left-1/2 top-1/2 h-[553px] w-[368px] -translate-x-1/2 -translate-y-1/2 transform overflow-hidden">
                  {item.type === 'image' ? (
                    item.sources ? (
                      <picture>
                        {item.sources.map((source, i) => (
                          <source key={i} srcSet={source.srcSet} type={source.type} />
                        ))}
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="ml-4 relative w-full max-w-[340px] aspect-[2/3] overflow-hidden rounded-t-4xl"
                          width={368}
                          height={553}
                        />
                      </picture>
                    ) : (
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="ml-4 relative w-full max-w-[340px] aspect-[2/3] overflow-hidden rounded-t-4xl"
                        width={368}
                        height={553}
                      />
                    )
                  ) : (
                    <>
                      {/* Video Cover */}
                      {!isPlaying && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                          <button
                            onClick={togglePlay}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all hover:scale-110"
                            aria-label="Play video"
                          >
                            <Play className="h-6 w-6 text-black fill-current" />
                          </button>
                          <img
                            src={item.cover}
                            alt={item.alt}
                            className="absolute inset-0 h-full w-full object-cover"
                            width={368}
                            height={553}
                          />
                        </div>
                      )}
                      {/* Video Element */}
                      <video
                        ref={videoRef}
                        className="h-full w-full object-cover"
                        playsInline
                        loop
                        preload="metadata"
                        disablePictureInPicture
                        src={item.video}
                      />
                    </>
                  )}
                </div>
              </div>

              {/* Description Box */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="mt-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 p-4 backdrop-blur-md border border-white/10"
              >
                <p className="text-sm text-gray-300 text-center">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </NoSSR>
  );
};

export default MobileShowcase;