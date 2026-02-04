import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "../sections/HeroSection";
import About from "../sections/About";
import Contact from "../sections/Contact";
import Projects from "../sections/Projects";
import Experiences from "../sections/Experiences";
import IntroHighlight from "../components/IntroHighlight";
import MovingTechStack from "../components/MovingTechStack";
import AnimatedCursor from "../components/AnimatedCursor";
import WelcomeScreen from "../components/WelcomeScreen";
import CaseStudies from "../sections/CaseStudies";
import ScrollProgress from "../components/ScrollProgress";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [showWelcome]);

  const handleWelcomeComplete = () => {
    setTimeout(() => {
      setShowWelcome(false);
    }, 100);
  };

  return (
    <div className="relative">
      {!showWelcome && (
        <>
          <AnimatedCursor />
          <ScrollProgress />
        </>
      )}

      <div ref={heroRef} className="relative z-10">
        <HeroSection />
      </div>

      {!showWelcome && (
        <>
          <div ref={aboutRef}>
            <About />
          </div>

          <Projects />
          <IntroHighlight />
          <CaseStudies />
          <Experiences />
          <Contact />
        </>
      )}

      {showWelcome && <WelcomeScreen onComplete={handleWelcomeComplete} />}
    </div>
  );
};

export default Home;



