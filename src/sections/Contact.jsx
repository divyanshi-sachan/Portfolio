import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightContentRef = useRef(null);
  const tagsRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);

  const interests = [
    "UX/UI DESIGN",
    "FULLSTACK DEVELOPER", 
    "MOBILE DEVELOPMENT",
    "DIGITAL CONSULTANT",
    "NEW BUSINESSES",
    "CALISTHENICS",
    "COOKING",
    "STARTUPS",
    "GAMING",
    "AI SOLUTIONS"
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "X", href: "#" },
    { name: "Instagram", href: "#" }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate left text
      gsap.fromTo(
        leftTextRef.current,
        {
          opacity: 0,
          x: -100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate right content
      gsap.fromTo(
        rightContentRef.current,
        {
          opacity: 0,
          x: 100,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate tags with stagger
      gsap.fromTo(
        tagsRef.current?.children || [],
        {
          opacity: 0,
          y: 30,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate CTA
      gsap.fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Animate social links
      gsap.fromTo(
        socialRef.current?.children || [],
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleTagHover = (element, isHovering) => {
    gsap.to(element, {
      scale: isHovering ? 1.05 : 1,
      backgroundColor: isHovering ? "rgba(255, 255, 255, 0.1)" : "transparent",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleCtaHover = (element, isHovering) => {
    gsap.to(element, {
      scale: isHovering ? 1.05 : 1,
      backgroundColor: isHovering ? "#f3f4f6" : "#ffffff",
      color: isHovering ? "#000000" : "#000000",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden bg-black"
      id="contact"
    >
      {/* Background Image - Same as Hero */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/herosection.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
        {/* No dark overlay - keeping painting visible */}
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between py-20 px-4 md:px-8 lg:px-16 bg-transparent">
        <div className="max-w-7xl mx-auto w-full">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
            
            {/* Left Side - Large Text */}
            <div ref={leftTextRef} className="flex items-center justify-center lg:justify-start">
              <div className="text-center lg:text-left">
                <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none tracking-tight">
                  <div className="block">LET'S</div>
                  <div className="block">CONNECT</div>
                </h1>
              </div>
            </div>

            {/* Right Side - Content */}
            <div ref={rightContentRef} className="space-y-8">
              {/* Heading */}
              <div className="text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white uppercase tracking-wide mb-8">
                  I'M ALWAYS INTERESTED ABOUT
                </h2>
              </div>

              {/* Interest Tags */}
              <div ref={tagsRef} className="flex flex-wrap gap-4 justify-center">
                {interests.map((interest, index) => (
                  <button
                    key={index}
                    className="px-6 py-3 text-white text-sm font-medium uppercase tracking-wide border border-white rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-10"
                    onMouseEnter={(e) => handleTagHover(e.currentTarget, true)}
                    onMouseLeave={(e) => handleTagHover(e.currentTarget, false)}
                  >
                    {interest}
                  </button>
                ))}
              </div>

              {/* Call to Action */}
              <div ref={ctaRef} className="text-center space-y-6">
                <p className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide">
                  ARE YOU MINDING A PROJECT?
                </p>
                <button
                  className="px-8 py-4 bg-white text-black font-bold text-lg uppercase tracking-wide rounded-full transition-all duration-300 hover:bg-gray-100"
                  onMouseEnter={(e) => handleCtaHover(e.currentTarget, true)}
                  onMouseLeave={(e) => handleCtaHover(e.currentTarget, false)}
                >
                  CONTACT ME
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white border-opacity-20">
            {/* Social Links */}
            <div ref={socialRef} className="flex gap-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white text-sm uppercase tracking-wide hover:text-gray-300 transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Credits */}
            <div className="text-white text-xs opacity-60">
              v1 v2 credits
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;