import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const InteractiveParticles = ({ mousePosition, isActive = true }) => {
  const particlesRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const particles = [];
    const particleCount = 30;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "absolute w-1 h-1 bg-black/30 rounded-full pointer-events-none";
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 2}s`;
      particle.style.animationDuration = `${3 + Math.random() * 2}s`;
      
      particlesRef.current?.appendChild(particle);
      particles.push(particle);
    }

    // Mouse interaction effect
    const handleMouseMove = (e) => {
      particles.forEach((particle, index) => {
        const rect = particle.getBoundingClientRect();
        const distance = Math.sqrt(
          Math.pow(e.clientX - (rect.left + rect.width / 2), 2) +
          Math.pow(e.clientY - (rect.top + rect.height / 2), 2)
        );

        if (distance < 100) {
          const force = (100 - distance) / 100;
          const angle = Math.atan2(
            e.clientY - (rect.top + rect.height / 2),
            e.clientX - (rect.left + rect.width / 2)
          );

          particle.style.transform = `translate(${Math.cos(angle) * force * 20}px, ${Math.sin(angle) * force * 20}px)`;
          particle.style.opacity = 0.6 + force * 0.4;
        } else {
          particle.style.transform = "translate(0, 0)";
          particle.style.opacity = 0.3;
        }
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, [isActive]);

  return (
    <div 
      ref={particlesRef} 
      className="absolute inset-0 pointer-events-none"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, rgba(0, 0, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(0, 0, 0, 0.08) 0%, transparent 50%)
        `
      }}
    />
  );
};

export default InteractiveParticles;
