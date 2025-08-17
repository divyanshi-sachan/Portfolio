import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import HeroText from "../components/HeroText";
import SocialSidebar from "../components/SocialSidebar";

const HeroVideo = () => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.addEventListener('loadeddata', () => setIsVideoLoaded(true));
      video.play().catch(() => {
        // Fallback if video can't autoplay
        setIsVideoLoaded(true);
      });
    }
  }, []);

  return (
    <section className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Social Sidebar */}
      <SocialSidebar />
      
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          poster="/assets/coding-pov.png"
        >
          {/* You can add an actual video file here */}
          <source src="/assets/coding-video.mp4" type="video/mp4" />
          {/* Fallback background image */}
        </video>
        
        {/* Video overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Code Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {['const', 'function', 'return', 'import', 'export', 'useState', 'useEffect'][Math.floor(Math.random() * 7)]}
          </motion.div>
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white"
          >
            <HeroText />
            
            {/* Animated Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mt-6"
            >
              <p className="text-xl text-gray-300 mb-4">
                Crafting digital experiences with code and creativity
              </p>
              <p className="text-gray-400 leading-relaxed">
                I transform ideas into reality through clean, efficient code and innovative solutions. 
                Specializing in modern web technologies and user-centric design.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm">
                View Projects
              </button>
              <button className="px-8 py-4 border-2 border-white/30 rounded-lg font-medium hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                Contact Me
              </button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.5 }}
              className="flex gap-8 mt-12 text-sm text-gray-300"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4+</div>
                <div>Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">20+</div>
                <div>Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">15+</div>
                <div>Technologies</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Interactive Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            {/* Terminal Window */}
            <div className="bg-gray-900/90 backdrop-blur-sm rounded-lg shadow-2xl border border-gray-700 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between bg-gray-800/90 px-4 py-2 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-400 text-sm">Terminal - Portfolio</div>
                <div className="w-16"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 font-mono text-sm text-green-400">
                <div className="mb-2">
                  <span className="text-blue-400">$</span> npm start
                </div>
                <div className="text-gray-400 mb-2">
                  Starting development server...
                </div>
                <div className="text-gray-400 mb-2">
                  Local: http://localhost:3000
                </div>
                <div className="text-gray-400 mb-2">
                  Ready in 2.3s
                </div>
                <div className="mb-2">
                  <span className="text-blue-400">$</span> git status
                </div>
                <div className="text-gray-400 mb-2">
                  On branch main
                </div>
                <div className="text-gray-400 mb-2">
                  Your branch is up to date with 'origin/main'.
                </div>
                <div className="mb-2">
                  <span className="text-blue-400">$</span> 
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="ml-1 bg-green-400 w-2 h-4 inline-block"
                  />
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium"
            >
              Live
            </motion.div>

            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center"
            >
              <div className="w-4 h-4 bg-white rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroVideo;
