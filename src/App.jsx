import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "./sections/HeroSection";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Footer from './sections/Footer';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
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

    return () => {
      // Cleanup
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="relative">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative z-10 h-screen">
        <HeroSection />
      </div>
      
      {/* About Section - Slides up over hero, then becomes part of normal flow */}
      <div 
        ref={aboutRef} 
        className="absolute top-0 left-0 w-full z-20 bg-[#030412] min-h-screen"
      >
        <About />
        <Projects />
        <Experiences />
        <Footer/>
      </div>
      
    </div>
  );
};
export default App;
