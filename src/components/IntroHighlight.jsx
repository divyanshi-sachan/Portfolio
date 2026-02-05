import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";
import MagneticButton from "./MagneticButton";
const IntroHighlight = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="pt-20 pb-20 bg-[#0a0a0a] text-white overflow-hidden relative">
      <div className="container-width relative z-10">
        {/* Top Section - Main Pitch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Main Pitch */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h1 className="heading-1">
              <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.04}
                staggerFrom="first"
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 24,
                }}
                autoStart={true}
              >
                Helping businesses grow with powerful full-stack solutions. Building scalable applications that drive real results and transform digital experiences.
              </VerticalCutReveal>
            </h1>
          </motion.div>

          {/* Right Side - Supporting Text + CTA */}
          <motion.div
            className="space-y-8 flex flex-col justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <p className="body-large text-gray-300 leading-relaxed max-w-md">
              As a freelance full-stack developer, I partner with businesses to build custom web applications that scale, perform, and deliver measurable growth.
            </p>

            <MagneticButton
              as={motion.div}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/30 bg-white/5 hover:bg-white/10 hover:border-white/50 transition-all duration-300 font-medium text-white"
            >
              <Link to="/case-studies" className="flex items-center gap-2">
                Explore Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom Section - Social Proof */}
      </div>
    </section>
  );
};

export default IntroHighlight;
