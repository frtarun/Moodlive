import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import { 
  Download, 
  ChevronDown, 
  CheckSquare, 
  Heart,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Home,
  Trophy,
  MessageCircle,
  Compass,
  Bell,
  Settings,
  Star,
  Shield
} from 'lucide-react'
import './App.css'

function App() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const featureSectionRef = useRef(null)
  const [activeFeature, setActiveFeature] = useState(0)

  // Feature data
  const features = [
    {
      id: 'feed',
      icon: Home,
      title: 'Dynamic Feed',
      description: 'Experience a vibrant, anonymous feed where users share thoughts, images, and GIFs using unique aliases.',
      details: [
        'Auto-generated creative aliases for every user',
        'Rich media sharing - images, GIFs, and stories',
        'Real-time updates and interactions',
        'Curated avatars instead of real photos'
      ],
      phone: '/phone1.png'
    },
    {
      id: 'leaderboard',
      icon: Trophy,
      title: 'Leaderboard',
      description: 'Climb the ranks! Build your reputation through authentic interactions and see where you stand.',
      details: [
        'Weekly and monthly rankings',
        'Reputation points for quality content',
        'Special badges for top contributors',
        'Exclusive rewards for leaders'
      ],
      phone: '/phone2.png'
    },
    {
      id: 'messages',
      icon: MessageCircle,
      title: 'Direct Messages',
      description: 'Connect privately with other anonymous users. Pro Bars unlock extra DM slots.',
      details: [
        'End-to-end encrypted conversations',
        'Disappearing messages option',
        'Media sharing in chats',
        'Pro Bars for unlimited DM slots'
      ],
      phone: '/phone3.png'
    },
    {
      id: 'explore',
      icon: Compass,
      title: 'Explore',
      description: 'Discover what’s buzzing! Dive into new updates, memes, news, games, music, and trending posts.',
      details: [
        'Daily dose of memes & humor',
        'Trending global news & updates',
        'Interactive games & music',
        'Viral posts from anonymous users'
      ],
      phone: '/phone4.png'
    },
    {
      id: 'streaks',
      icon: Star,
      title: 'Daily Streaks',
      description: 'Stay engaged with gamified daily streaks. Unlock rewards and maintain momentum.',
      details: [
        'Daily login rewards',
        'Streak multipliers for engagement',
        'Exclusive streak badges',
        'Bonus Pro Bars for long streaks'
      ],
      phone: '/phone5.png'
    },
    {
      id: 'safety',
      icon: Shield,
      title: 'Safety & Privacy',
      description: 'Your identity is always protected. Advanced security features keep you anonymous.',
      details: [
        'Zero personal data collection',
        'Advanced content moderation',
        'Block and report features',
        'Optional identity verification'
      ],
      phone: '/phone6.png'
    }
  ]

  // State for hero background hover effect
  const [isHovered, setIsHovered] = useState(false)

  // Hero parallax
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(heroProgress, [0, 1], ["0%", "30%"])
  const heroOpacity = useTransform(heroProgress, [0, 0.5], [1, 0])

  // Feature section scroll tracking
  const { scrollYProgress: featureProgress } = useScroll({
    target: featureSectionRef,
    offset: ["start start", "end end"]
  })

  useEffect(() => {
    const unsubscribe = featureProgress.on("change", (value) => {
      const index = Math.min(
        Math.floor(value * features.length),
        features.length - 1
      )
      setActiveFeature(index)
    })
    return () => unsubscribe()
  }, [featureProgress, features.length])

  // Initialize Lenis Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="app">
      {/* Hero Section */}
      <section className="hero" ref={heroRef}>
        <div className="hero-bg">
          {/* Default Image - Slides Right on Hover */}
          <motion.img 
            src="/hero-bg.png" 
            alt="Hero Background" 
            style={{ y: heroY, opacity: heroOpacity }}
            animate={{ x: isHovered ? "100%" : "0%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Ultra smooth cinematic ease
            initial={false}
          />
          {/* Hover Image - Slides in from Left */}
          <motion.img 
            src="/hero2.png" 
            alt="Hero Background Cinematic" 
            style={{ 
              y: heroY, 
              opacity: heroOpacity,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
            initial={{ x: "-100%" }}
            animate={{ x: isHovered ? "0%" : "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>
        <div className="hero-overlay"></div>
        
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src="/mood.png" alt="Mood" className="hero-logo" />
          
          <h1 className="hero-title">
            जहाँ identity नहीं,<br />
            thoughts connect करते हैं
          </h1>
          
          <p className="hero-subtitle">
            Experience the freedom of true anonymity. Connect, share, and express yourself without boundaries.
            Join the community built on trust and privacy.
          </p>
          
          <a 
            href="https://expo.dev/accounts/frtarun/projects/hood-app/builds/2183777e-cd85-4a81-b4d1-af2e45791ba3" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="download-button">
              <div className="box">D</div>
              <div className="box">O</div>
              <div className="box">W</div>
              <div className="box">N</div>
              <div className="box">L</div>
              <div className="box">O</div>
              <div className="box">A</div>
              <div className="box">D</div>
            </div>
          </a>
        </motion.div>

      </section>

      {/* Scroll-Linked Features Section */}
      <section className="feature-section" ref={featureSectionRef}>
        <div className="feature-container">
          {/* Left Sidebar - Fixed */}
          <div className="feature-sidebar">
            <div className="sidebar-logo-container">
              <img src="/mood.png" alt="Mood" className="sidebar-logo" />
            </div>
            <h3 className="sidebar-title">Features</h3>
            <div className="sidebar-nav">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div 
                    key={feature.id}
                    className={`sidebar-item ${activeFeature === index ? 'active' : ''}`}
                    onClick={() => {
                      const element = document.getElementById(`feature-${feature.id}`)
                      element?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    <Icon size={20} />
                    <span>{feature.title}</span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Content - Scrollable */}
          <div className="feature-content">
            {features.map((feature) => (
              <FeaturePanel key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="/moodi.gif" alt="Mood" className="footer-logo" />
            <p>
              Premium anonymous social networking app. Connect authentically 
              without revealing your identity.
            </p>
          </div>

          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>

          <div className="footer-download">
             <a href="https://expo.dev/accounts/frtarun/projects/hood-app/builds/2183777e-cd85-4a81-b4d1-af2e45791ba3" target="_blank" rel="noopener noreferrer" className="btn2">
               <span className="spn2">Download & Speak Freely</span>
             </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Mood. All rights reserved.</p>
          <div className="social-links">
            <a href="#"><Twitter size={18} /></a>
            <a href="#"><Instagram size={18} /></a>
            <a href="#"><Facebook size={18} /></a>
            <a href="#"><Linkedin size={18} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

// Separate component for Parallax effects
const FeaturePanel = ({ feature }) => {
  const ref = useRef(null)
  const Icon = feature.icon
  
  // Track scroll for THIS specific panel
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  // Sassy Parallax Animations
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]) // Moves vertically against scroll
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [5, 0, -5]) // Subtle sassy tilt
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.9]) // Breathing scale effect
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]) // Fade in/out focus

  return (
    <div 
      ref={ref}
      id={`feature-${feature.id}`}
      className="feature-panel"
    >
      <div className="feature-panel-inner">
        <div className="feature-info">
          <div className="feature-icon-large">
            <Icon size={32} />
          </div>
          <h2>{feature.title}</h2>
          <p className="feature-desc">{feature.description}</p>
          <ul className="feature-list">
            {feature.details.map((detail, i) => (
              <li key={i}>
                <CheckSquare size={16} />
                {detail}
              </li>
            ))}
          </ul>
        </div>
        <div className="feature-visual">
          <motion.div 
            className="phone-showcase"
            style={{ y, rotate, scale, opacity }}
          >
            <img src={feature.phone} alt={feature.title} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default App
