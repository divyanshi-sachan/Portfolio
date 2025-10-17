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
    // Cleanup any existing ScrollTriggers
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [showWelcome]);

  const handleWelcomeComplete = () => {
    // Add a small delay to ensure smooth transition
    setTimeout(() => {
      setShowWelcome(false);
    }, 100);
  };

  return (
    <div className="relative">
      {/* Animated Cursor - Only show when not on welcome screen */}
      {!showWelcome && <AnimatedCursor />}
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative z-10">
        <HeroSection />
      </div>
      
      {/* Main Portfolio Content - Only show when welcome is complete */}
      {!showWelcome && (
        <>
          {/* About Section */}
          <div ref={aboutRef}>
            <About />
          </div>
          
          {/* Intro Highlight Section */}
          <IntroHighlight />
          
          {/* Moving Tech Stack Section */}
          <MovingTechStack />
          
          {/* Projects Section */}
          <Projects />
          
          {/* Experiences Section */}
          <Experiences />
          
          {/* Contact Section */}
          <Contact />
        </>
      )}
      
      {/* Welcome Screen - Always on top */}
      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
    </div>
  );
};
export default App;
