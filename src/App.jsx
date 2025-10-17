import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Footer from './sections/Footer';
import AboutSection from "./AboutSection";
import WelcomeScreen from "./components/WelcomeScreen";
import AnimatedCursor from "./components/AnimatedCursor";
import MovingTechStack from "./components/MovingTechStack";
import IntroHighlight from "./components/IntroHighlight";
import FocusingOnBest from "./components/FocusingOnBest";
// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Only initialize scroll effects after welcome screen is complete
    if (!showWelcome) {
      // Set initial position of About section
      gsap.set(aboutRef.current, { y: "100vh" });

      // Create the layered scroll effect
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          // Calculate progress based on scroll
          const progress = self.progress;
          
          // Animate About section sliding up over Hero
          gsap.to(aboutRef.current, {
            y: `${100 - (progress * 100)}vh`,
            ease: "none"
          });

          // Optional: Add parallax effect to hero content
          if (heroRef.current) {
            gsap.to(heroRef.current, {
              y: progress * -30,
              opacity: 1 - (progress * 0.3),
              ease: "none"
            });
          }
        },
        onComplete: () => {
          // When effect is complete, reset About section position
          gsap.set(aboutRef.current, { y: 0 });
        },
        onReverseComplete: () => {
          // When scrolling back up, reset About section to initial position
          gsap.set(aboutRef.current, { y: "100vh" });
        }
      });
    }

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showWelcome]);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className="relative">
      {/* Animated Cursor - Only show when not on welcome screen */}
      {!showWelcome && <AnimatedCursor />}
      
      {/* Welcome Screen */}
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
      
      {/* Main Portfolio Content */}
      {!showWelcome && (
        <>
          {/* Moving Tech Stack Component
          <MovingTechStack />
          
          {/* Intro Highlight Section */}
          {/* <IntroHighlight /> */}
          
          {/* Focusing on the Best Section */}
          {/* <FocusingOnBest /> */} 
          
          {/* Hero Section */}
          <div ref={heroRef} className="relative z-10 h-screen">
            <HeroSection />
          </div>
          
          {/* About Section - Slides up over hero, then becomes part of normal flow */}
          <div 
            ref={aboutRef} 
            className="absolute top-0 left-0 w-full z-20 bg-[#030412]"
            style={{ height: '600vh' }}
          > 
            <About />
          
          {/* Intro Highlight Section */}
          <IntroHighlight />
          
          {/* Focusing on the Best Section */}
          <MovingTechStack />
            <Projects />
            <Experiences />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
};
export default App;
