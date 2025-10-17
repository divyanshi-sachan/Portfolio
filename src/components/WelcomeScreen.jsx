import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

// Register GSAP plugins
gsap.registerPlugin(TextPlugin);

const WelcomeScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const loadingCircleRef = useRef(null);
  const progressRef = useRef(null);
  const backgroundRef = useRef(null);
  const skipButtonRef = useRef(null);
  const logoRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showSkipButton, setShowSkipButton] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup - minimalist approach
    gsap.set([welcomeTextRef.current, logoRef.current], { opacity: 0, y: 50 });
    gsap.set(loadingCircleRef.current, { scale: 0, rotation: 0 });
    gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(skipButtonRef.current, { opacity: 0, y: 20 });

    // Show skip button after 2 seconds
    setTimeout(() => {
      setShowSkipButton(true);
      gsap.to(skipButtonRef.current, { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out"
      });
    }, 2000);

    // Simulate loading process
    const loadingInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(loadingInterval);
          setIsLoaded(true);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 150);

    // Advanced GSAP animation sequence with mesmerizing effects
    tl
      // Background fade in with subtle movement
      .to(backgroundRef.current, { 
        opacity: 1, 
        duration: 2, 
        ease: "power2.out" 
      })
      // Welcome text animation with dramatic entrance
      .to(welcomeTextRef.current, { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.5, 
        ease: "power3.out"
      }, "-=1.5")
      // Add pulsing effect to welcome text
      .to(welcomeTextRef.current, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      }, "-=0.5")
      // Logo animation with bounce and glow
      .to(logoRef.current, { 
        opacity: 1, 
        y: 0,
        scale: 1,
        duration: 1.2, 
        ease: "back.out(1.7)"
      }, "-=1")
      // Add continuous rotation to logo
      .to(logoRef.current, {
        rotation: 360,
        duration: 8,
        repeat: -1,
        ease: "none"
      }, "-=0.5")
      // Loading circle animation with scale effect
      .to(loadingCircleRef.current, { 
        scale: 1,
        duration: 1,
        ease: "power2.out"
      }, "-=0.8")
      .to(loadingCircleRef.current, {
        rotation: 360,
        duration: 1.5,
        repeat: -1,
        ease: "none"
      }, "-=0.3")
      // Add pulsing effect to loading circle
      .to(loadingCircleRef.current, {
        scale: 1.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      }, "-=0.5")
      // Progress bar animation with smooth fill
      .to(progressRef.current, { 
        scaleX: 1, 
        duration: 4, 
        ease: "power2.inOut"
      }, "-=2")
      // Add completion glow effect
      .to(progressRef.current, {
        boxShadow: "0 0 20px rgba(255,255,255,0.8)",
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.5")
      // Completion sequence with dramatic exit
      .to([welcomeTextRef.current, logoRef.current], {
        opacity: 0,
        y: -50,
        scale: 0.8,
        duration: 1.5,
        ease: "power3.in"
      }, "+=1.5")
      .to(containerRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 1.5,
        ease: "power3.in",
        onComplete: () => {
          onComplete();
        }
      });

    return () => {
      tl.kill();
      clearInterval(loadingInterval);
    };
  }, [onComplete]);

  const handleSkip = () => {
    gsap.to(containerRef.current, {
      opacity: 0,
      scale: 0.98,
      duration: 0.8,
      ease: "power3.in",
      onComplete: () => {
        onComplete();
      }
    });
  };

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
    >
      {/* Minimalist Background */}
      <div ref={backgroundRef} className="absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-8">
        {/* Welcome Text */}
        <div ref={welcomeTextRef} className="mb-16">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-wider relative">
            <span className="relative z-10">WELCOME</span>
            {/* Glow effect */}
            <span className="absolute inset-0 text-white opacity-30 blur-sm">WELCOME</span>
          </h1>
        </div>

        {/* Logo */}
        <div ref={logoRef} className="mb-12">
          <div className="w-16 h-16 mx-auto border-2 border-white rounded-full flex items-center justify-center relative">
            <span className="text-white text-2xl font-bold relative z-10">N</span>
            {/* Rotating ring effect */}
            <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
          </div>
        </div>

        {/* Loading Circle */}
        <div className="mb-8">
          <div 
            ref={loadingCircleRef}
            className="w-8 h-8 mx-auto border-2 border-white border-t-transparent rounded-full"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-8">
          <div className="flex justify-between text-xs text-white/60 mb-3">
            <span className="font-medium">Loading</span>
            <span className="font-bold text-white">{Math.round(progress)}%</span>
          </div>
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div 
              ref={progressRef}
              className="h-full bg-white rounded-full"
            />
          </div>
          {isLoaded && (
            <div className="text-xs text-white mt-2 font-medium">
              ✓ Ready
            </div>
          )}
        </div>
      </div>

      {/* Skip Button */}
      {showSkipButton && (
        <button
          ref={skipButtonRef}
          onClick={handleSkip}
          className="absolute top-6 right-6 px-4 py-2 bg-white/10 border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all duration-300 z-20"
        >
          Skip
        </button>
      )}
    </div>
  );
};

export default WelcomeScreen;
