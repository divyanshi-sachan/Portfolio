import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { motion } from "framer-motion";
import InteractiveParticles from "./InteractiveParticles";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const WelcomeScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const subtitleRef = useRef(null);
  const backgroundRef = useRef(null);
  const logoRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentText, setCurrentText] = useState("");
  const [currentSubtitle, setCurrentSubtitle] = useState("");

  // Mouse tracking for particle effects only
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // Automatically slide up after animation completes
        setTimeout(() => {
          gsap.to(containerRef.current, {
            y: "-100%",
            duration: 1.2,
            ease: "power3.inOut",
            onComplete: () => {
              onComplete();
            },
          });
        }, 1000);
      },
    });

    // Initial setup
    gsap.set([welcomeTextRef.current, subtitleRef.current, logoRef.current], { 
      opacity: 0, 
      y: 100,
      scale: 0.8
    });

    // Typewriter effect for main text
    const welcomeText = "Welcome to My Portfolio";
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < welcomeText.length) {
        setCurrentText(welcomeText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
        // Start subtitle after main text is done
        setTimeout(() => {
          const subtitleText = "Where creativity meets innovation";
          let j = 0;
          const subtitleInterval = setInterval(() => {
            if (j < subtitleText.length) {
              setCurrentSubtitle(subtitleText.slice(0, j + 1));
              j++;
            } else {
              clearInterval(subtitleInterval);
            }
          }, 50);
        }, 500);
      }
    }, 100);

    // Main animation timeline
    tl
      // Background is immediately visible
      .set(backgroundRef.current, { opacity: 1 })
      // Welcome text entrance
      .to(welcomeTextRef.current, { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2, 
        ease: "power3.out"
      }, "-=1")
      // Logo entrance with bounce
      .to(logoRef.current, { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1, 
        ease: "back.out(1.7)"
      }, "-=0.8")
      // Subtitle entrance
      .to(subtitleRef.current, { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1, 
        ease: "power2.out"
      }, "-=0.6");

    return () => {
      tl.kill();
      clearInterval(typeInterval);
    };
  }, [onComplete]);



  return (
    <motion.div 
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
      style={{
        zIndex: 50,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#cfcfd0',
      }}
    >
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 opacity-100">
        <div className="absolute inset-0 bg-[#cfcfd0]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-black/10" />
      </div>

      {/* Interactive Particles */}
      <InteractiveParticles mousePosition={mousePosition} isActive={true} />


      {/* Main Content */}
      <div className="relative z-10 text-center px-8 max-w-4xl mx-auto">
        {/* Logo */}
        <motion.div 
          ref={logoRef} 
          className="mb-8"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <div className="w-20 h-20 mx-auto border-2 border-black/30 rounded-full flex items-center justify-center relative bg-black/10 backdrop-blur-sm">
            <span className="text-black text-3xl font-bold relative z-10">P</span>
            <div className="absolute inset-0 border-2 border-black/20 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
          </div>
        </motion.div>

        {/* Welcome Text */}
        <div ref={welcomeTextRef} className="mb-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-black tracking-tight relative">
            <span className="relative z-10">
              {currentText}
              <span className="animate-pulse">|</span>
            </span>
            {/* Glow effect */}
            <span className="absolute inset-0 text-black opacity-20 blur-lg">Welcome to My Portfolio</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subtitleRef} className="mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-black/70 font-light tracking-tight">
            {currentSubtitle}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-black/30 rounded-full animate-ping" />
      <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-black/40 rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-black/20 rounded-full animate-bounce" />
    </motion.div>
  );
};

export default WelcomeScreen;
