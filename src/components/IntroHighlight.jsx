import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { VerticalCutReveal } from "./ui/vertical-cut-reveal";

const IntroHighlight = () => {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="pt-20 pb-20 bg-[#cfcfd0] text-black overflow-hidden">
      <div className="container-width">
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
                Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.
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
            <p className="body-large text-gray-700 leading-relaxed max-w-md">
              The combination of my passion for design, code & interaction positions me in a unique place in the web design world.
            </p>

            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
              <Link
                to="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-black/30 bg-black/5 hover:bg-black/10 hover:border-black/50 transition-all duration-300 font-medium"
              >
                Explore Case Studies
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section - Social Proof */}
        <motion.div
          className="space-y-8 mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Tagline */}
          <div className="text-center">
            <p className="body-large text-gray-700">
              Trusted by <em className="font-serif italic">people</em> worldwide
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { value: "5,555+", label: "LinkedIn Connections", delay: 0.2 },
              { value: "210+", label: "GitHub Stars", delay: 0.3 },
              { value: "2", label: "Years of Experience", delay: 0.4 },
            ].map((item) => (
              <div key={item.label} className="text-center">
                <motion.div
                  className="heading-2 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: item.delay }}
                  viewport={{ once: true }}
                >
                  {item.value}
                </motion.div>
                <p className="body-text text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroHighlight;
