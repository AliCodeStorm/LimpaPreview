// app/feature-guide/page.tsx
'use client';
import {
  Sparkles, BrainCircuit, Sun, Headphones, Activity, 
  BookOpen, Goal, Lightbulb, Zap, ListChecks,
  BarChart2, ClipboardList, Settings, HeartPulse,
  Moon, Music, Cloud, Layers, Target, Shuffle,
  CheckCircle, Clock, TrendingUp, Bookmark,
  AlertCircle, ArrowRightCircle, Award, ClipboardCheck
} from 'lucide-react';
import { motion } from 'framer-motion';

const SectionHeader = ({ icon: Icon, title }: { icon: React.ComponentType<{ className?: string }>, title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    className="mb-8 flex items-center gap-3 border-b border-gray-800 pb-4"
  >
    <Icon className="h-6 w-6 text-purple-400" />
    <h2 className="text-2xl font-semibold text-white">{title}</h2>
  </motion.div>
);

const FeatureCard = ({
  title,
  purpose,
  howItWorks,
  keyFeatures,
  icon: Icon,
  borderColor = 'border-purple-500'
}: {
  title: string;
  purpose: string;
  howItWorks: string;
  keyFeatures: { name: string; description: string }[];
  icon: React.ComponentType<{ className?: string }>;
  borderColor?: string;
}) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className={`rounded-xl border ${borderColor} bg-gray-900/50 p-6 backdrop-blur-sm`}
  >
    <div className="mb-4 flex items-center gap-3">
      <div className={`rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 p-2`}>
        <Icon className="h-5 w-5 text-white" />
      </div>
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    
    <div className="mb-4">
      <h4 className="mb-1 flex items-center gap-2 text-sm font-medium text-purple-300">
        <Target className="h-4 w-4" /> Purpose
      </h4>
      <p className="text-gray-300">{purpose}</p>
    </div>
    
    <div className="mb-4">
      <h4 className="mb-1 flex items-center gap-2 text-sm font-medium text-purple-300">
        <Settings className="h-4 w-4" /> How it Works
      </h4>
      <p className="text-gray-300">{howItWorks}</p>
    </div>
    
    <div>
      <h4 className="mb-2 flex items-center gap-2 text-sm font-medium text-purple-300">
        <Award className="h-4 w-4" /> Key Features
      </h4>
      <ul className="space-y-3">
        {keyFeatures.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle className="h-4 w-4 flex-shrink-0 text-purple-400 mt-0.5" />
            <div>
              <span className="font-medium text-gray-200">{feature.name}:</span>{' '}
              <span className="text-gray-400">{feature.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

export default function page() {
  const sections = [
    {
      title: "Core Experience",
      icon: Sparkles,
      features: [
        {
          title: "Personalized Dashboard",
          purpose: "To serve as your daily starting point, offering a quick, motivational overview of your journey and progress.",
          howItWorks: "The dashboard aggregates data from all other modules in the app. It displays a personalized welcome, an inspiring quote, and key metrics in an easy-to-digest format.",
          keyFeatures: [
            {
              name: "At-a-Glance Stats",
              description: "Cards showing your daily activity streak, habit tracking progress, and the score from your most recent well-being assessment."
            },
            {
              name: "Assessment Chart",
              description: "A bar chart visualizing your assessment scores over time, allowing you to track your progress objectively."
            },
            {
              name: "Recent Activity Feed",
              description: "A log of your latest accomplishments (e.g., 'Completed PHQ-9 Assessment,' 'Recorded a thought'), providing positive reinforcement."
            },
            {
              name: "Quick Actions",
              description: "Direct links to the most commonly used tools, like logging a thought or starting a session."
            }
          ],
          icon: BarChart2,
          borderColor: "border-purple-500"
        },
        {
          title: "AI-Generated Wellness Program",
          purpose: "To provide a structured, long-term plan that guides you toward a specific wellness goal, removing the guesswork from your daily practice.",
          howItWorks: "You select a primary goal (e.g., 'Improve Sleep'). Our AI (powered by Genkit and Google's Gemini model) analyzes this goal and generates a unique 4-week program. It intelligently selects and schedules a mix of Light Therapy, Audio Sessions, and Courses from the app's library that are relevant to your goal. For example, selecting 'Improve Sleep' might result in a plan that schedules the 'Delta Slumber' light therapy protocol in the evenings, recommends the 'Body Scan for Sleep' guided meditation before bed, and assigns the 'Mindfulness Foundations' course to help manage racing thoughts.",
          keyFeatures: [
            {
              name: "Goal Selection",
              description: "Simple, clear options to define your focus."
            },
            {
              name: "Structured Weekly Plan",
              description: "Each week has a theme, an introduction, and a clear set of recommended activities."
            },
            {
              name: "Content Curation",
              description: "The AI draws from all available app resources, ensuring a varied and relevant plan."
            },
            {
              name: "Actionable Goals",
              description: "Each week includes a simple, actionable goal to keep you focused."
            }
          ],
          icon: Goal,
          borderColor: "border-blue-500"
        },
        {
          title: "AI-Assisted CBT Thought Record",
          purpose: "To enhance the traditional CBT thought record by providing instant, objective feedback on your thought patterns.",
          howItWorks: "After you write down an automatic negative thought, you can click 'Analyze.' The app sends this thought to our AI, which has been trained to identify common cognitive distortions. For instance, if you enter the thought, 'I messed up that presentation, I'm going to get fired,' the AI might identify 'Catastrophizing' and 'All-or-Nothing Thinking.' It would then generate personalized Socratic questions like, 'What is the evidence that one presentation mistake will lead to you being fired?' and 'Is there a less extreme way to view this situation?' to help you challenge and reframe the thought.",
          keyFeatures: [
            {
              name: "Cognitive Distortion Analysis",
              description: "Identifies unhelpful thinking patterns in your own words."
            },
            {
              name: "Guided Restructuring",
              description: "Generates personalized questions to promote new perspectives."
            },
            {
              name: "AI-Powered Insight",
              description: "Acts as a non-judgmental partner in your cognitive restructuring process."
            }
          ],
          icon: Lightbulb,
          borderColor: "border-cyan-500"
        }
      ]
    },
    {
      title: "Core Sessions & Modalities",
      icon: Layers,
      features: [
        {
          title: "Light Therapy",
          purpose: "To use Audio-Visual Entrainment (AVE) to gently encourage your brainwaves to align with specific frequencies associated with states like relaxation, focus, or meditation.",
          howItWorks: "The app uses your phone's camera flashlight to produce rhythmic pulses of light. For example, to promote focus, the 'Beta Focus' protocol flashes light between 15-22 times per second (15-22Hz). You place the phone face down, close your eyes, and the rhythmic flicker, perceived through your closed eyelids, gently encourages your brain to enter a state of active concentration.",
          keyFeatures: [
            {
              name: "Protocol Library",
              description: "Alpha, Beta, Theta, Delta, Gamma frequencies for different goals."
            },
            {
              name: "Frequency-specific stimulation",
              description: "Precise timing for targeted effects."
            },
            {
              name: "State alignment",
              description: "Promotes relaxation, focus, or meditation states."
            }
          ],
          icon: Sun,
          borderColor: "border-amber-500"
        },
        {
          title: "Audio Library",
          purpose: "A collection of sound-based tools for various therapeutic needs.",
          howItWorks: "",
          keyFeatures: [
            {
              name: "Guided Meditations",
              description: "Narrated sessions like the 'Body Scan for Sleep' talk you through a practice to prepare for restful sleep."
            },
            {
              name: "Nature Sounds",
              description: "Ambient soundscapes like 'Rainwater Epilogue' for focus or relaxation."
            },
            {
              name: "Audio Generators",
              description: "Interactive tools to create your own brainwave entrainment sounds. For instance, using the Binaural Beats generator, you can set a carrier frequency of 200Hz and a beat frequency of 10Hz to create an Alpha wave stimulus for relaxation, adjusting the volume to your comfort."
            }
          ],
          icon: Headphones,
          borderColor: "border-emerald-500"
        },
        {
          title: "Breathing Exercises",
          purpose: "To use the breath as a tool to consciously regulate your nervous system.",
          howItWorks: "The app provides a visual player with animated cues for inhaling, holding, and exhaling. For 'Box Breathing,' a square on the screen will expand for 4 seconds as you inhale, stay large for a 4-second hold, contract for a 4-second exhale, and stay small for the final 4-second hold, guiding you through the cycle.",
          keyFeatures: [
            {
              name: "Exercise Library",
              description: "Box Breathing, 4-7-8, Coherent patterns and more."
            },
            {
              name: "Visual Guidance",
              description: "Animated cues for precise timing."
            },
            {
              name: "Goal-oriented",
              description: "Categorized by relaxation, energy, or balance."
            }
          ],
          icon: HeartPulse,
          borderColor: "border-teal-500"
        },
        {
          title: "Personalized Session Composer",
          purpose: "To give you complete control to create your own multimodal wellness experience.",
          howItWorks: "This advanced tool provides a composer interface where you can layer multiple modalities. For example, you could combine the 'Alpha Boost' Light Therapy protocol with a background 'Rainwater' soundscape, while simultaneously listening to the 'Breathing Meditation' narration, creating a deeply immersive relaxation session tailored exactly to your preferences.",
          keyFeatures: [
            {
              name: "Modality Layering",
              description: "Combine light, sound, and narration."
            },
            {
              name: "Custom Timing",
              description: "Adjust durations and sequences."
            },
            {
              name: "Preset Saving",
              description: "Save your favorite combinations."
            }
          ],
          icon: Shuffle,
          borderColor: "border-violet-500"
        }
      ]
    },
    {
      title: "Therapeutic Toolkit (CBT/DBT)",
      icon: ClipboardCheck,
      features: [
        {
          title: "Behavioral Activation",
          purpose: "Based on the CBT concept that engaging in positive, rewarding activities can directly improve mood and combat withdrawal.",
          howItWorks: "You create a daily to-do list of positive activities (e.g., 'Go for a 15-minute walk,' 'Call a friend'). You can add your own or choose from suggestions like 'Engage in a hobby for 20 minutes.' As you complete them, you check them off and your daily progress bar fills up. The app tracks your 'daily streak' of completing at least one activity to build momentum.",
          keyFeatures: [
            {
              name: "Activity Suggestions",
              description: "Curated ideas for positive actions."
            },
            {
              name: "Progress Tracking",
              description: "Visual feedback on completion."
            },
            {
              name: "Streak Motivation",
              description: "Encourages consistent engagement."
            }
          ],
          icon: ArrowRightCircle,
          borderColor: "border-pink-500"
        },
        {
          title: "Habit Tracker",
          purpose: "Fosters consistency in positive routines, which is key to long-term well-being.",
          howItWorks: "You can define any habit you want to build (e.g., 'Meditate for 10 minutes' or 'Read one chapter of a book'). Each day you complete the habit, you 'check in,' and the app tracks your consecutive day streak, providing a powerful source of motivation to keep going.",
          keyFeatures: [
            {
              name: "Custom Habits",
              description: "Define your own routines."
            },
            {
              name: "Streak Counter",
              description: "Tracks consecutive days."
            },
            {
              name: "Reminders",
              description: "Optional notifications."
            }
          ],
          icon: Clock,
          borderColor: "border-rose-500"
        },
        {
          title: "CBT/DBT Exercises",
          purpose: "A collection of guided digital worksheets for specific therapeutic techniques.",
          howItWorks: "",
          keyFeatures: [
            {
              name: "Cost-Benefit Analysis",
              description: "An interactive form where you identify a belief (e.g., 'I must always be perfect') and systematically list the pros ('It pushes me to do good work') and cons ('It causes me immense stress and I procrastinate'). This helps you make a rational decision about whether the belief truly serves you."
            },
            {
              name: "Opposite Action",
              description: "A DBT-inspired worksheet. If you feel sad and your urge is to 'isolate and stay in bed,' the worksheet guides you to plan an opposite action, such as 'Go for a walk and listen to upbeat music,' and commit to it fully."
            }
          ],
          icon: Bookmark,
          borderColor: "border-indigo-500"
        },
        {
          title: "Exposure Hierarchy",
          purpose: "Based on Exposure Therapy, a core CBT technique for overcoming anxiety and phobias.",
          howItWorks: "You create a 'fear ladder' by identifying a specific fear (e.g., public speaking). You then break it down into smaller steps, rating the anxiety for each: Step 1 (SUDS: 20): 'Thinking about giving a speech.' Step 2 (SUDS: 40): 'Practicing in front of a mirror.' Step 3 (SUDS: 60): 'Giving the speech to one friend.' This provides a clear, gradual path for exposure practice.",
          keyFeatures: [
            {
              name: "Step-by-Step Planning",
              description: "Break down fears into manageable steps."
            },
            {
              name: "SUDS Rating",
              description: "Track anxiety levels for each step."
            },
            {
              name: "Progress Tracking",
              description: "Monitor your exposure journey."
            }
          ],
          icon: TrendingUp,
          borderColor: "border-yellow-500"
        }
      ]
    },
    {
      title: "Learning & Assessment",
      icon: BookOpen,
      features: [
        {
          title: "Well-Being Assessments",
          purpose: "To provide standardized, objective measures of your mental state, helping you track progress beyond just subjective feelings.",
          howItWorks: "The app includes clinical screening tools like the PHQ-9 (for depression). You answer a series of questions based on your feelings over the last two weeks. The app calculates your score (e.g., a score of 12 indicates 'Moderate' depression), provides an interpretation, and saves the result. All past results are plotted on a chart to visualize your progress over time.",
          keyFeatures: [
            {
              name: "Standardized Measures",
              description: "Clinically validated assessments."
            },
            {
              name: "Score Interpretation",
              description: "Clear explanations of results."
            },
            {
              name: "Progress Visualization",
              description: "Charts showing changes over time."
            }
          ],
          icon: ClipboardList,
          borderColor: "border-green-500"
        },
        {
          title: "Educational Courses",
          purpose: "To educate you on the 'why' behind mental health concepts and therapeutic techniques.",
          howItWorks: "The app provides in-depth, multi-section courses on specific topics. The current flagship course is a comprehensive guide to 'Understanding ADHD,' broken into sessions and subsections. It includes text, images, embedded videos from subject matter experts, and interactive questions to create an engaging learning experience. Your progress through a course is saved, so you can easily resume where you left off.",
          keyFeatures: [
            {
              name: "Comprehensive Content",
              description: "Text, images, and videos."
            },
            {
              name: "Interactive Elements",
              description: "Questions and reflections."
            },
            {
              name: "Progress Tracking",
              description: "Save and continue where you left off."
            }
          ],
          icon: BookOpen,
          borderColor: "border-cyan-500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h1 className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Lempa App: Feature Guide
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            A comprehensive overview of the tools, technologies, and therapeutic principles that power your mental well-being journey.
          </p>
        </motion.div>

        <div className="space-y-16">
          {sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <SectionHeader icon={section.icon} title={section.title} />
              
              <div className="grid gap-6 md:grid-cols-2">
                {section.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * featureIndex, duration: 0.5 }}
                  >
                    <FeatureCard {...feature} />
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}