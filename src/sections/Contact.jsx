import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticButton from "../components/MagneticButton";
import RippleButton from "../components/RippleButton";

const Contact = () => {
  const sectionRef = useRef(null);
  const formDropdownRef = useRef(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!showContactForm) return;
    const handleClickOutside = (e) => {
      if (formDropdownRef.current && !formDropdownRef.current.contains(e.target)) {
        setShowContactForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showContactForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: integrate with EmailJS or your backend here
    console.log({ email, message });
    setEmail("");
    setMessage("");
    setShowContactForm(false);
  };

  const interests = [
    "FULL STACK DEVELOPMENT",
    "BUSINESS GROWTH", 
    "SCALABLE APPLICATIONS",
    "WEB APPLICATIONS",
    "STARTUPS",
    "E-COMMERCE",
    "SAAS PRODUCTS",
    "API DEVELOPMENT",
    "CLOUD SOLUTIONS",
    "DIGITAL TRANSFORMATION"
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "#" },
    { name: "Telegram", href: "#" },
    { name: "X", href: "#" },
    { name: "Instagram", href: "#" }
  ];

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a] text-white"
      id="contact"
    >
      <div className="container-width">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[70vh]">
          
          {/* Left Side - Large Text */}
          <div className="flex items-center justify-center">
            <div className="text-center">
              <h1 className="heading-2 text-white">
                <div className="block">LET'S</div>
                <div className="block">CONNECT</div>
              </h1>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div className="text-center">
              <h2 className="heading-3 text-gray-400 uppercase tracking-wide mb-8 text-center">
                I HELP BUSINESSES WITH
              </h2>
            </div>

            {/* Interest Tags */}
            <div className="flex flex-wrap gap-4 justify-center">
              {interests.map((interest, index) => (
                <MagneticButton
                  key={index}
                  className="px-6 py-3 text-white text-sm font-medium uppercase tracking-wide border border-white rounded-full transition-all duration-300 hover:bg-white hover:text-black"
                >
                  {interest}
                </MagneticButton>
              ))}
            </div>

            {/* Call to Action */}
            <div ref={formDropdownRef} className="text-center space-y-6 relative">
              <p className="body-large text-gray-400 uppercase tracking-wide">
                ARE YOU MINDING A PROJECT?
              </p>
              <RippleButton
                onClick={() => setShowContactForm((prev) => !prev)}
                className="px-8 py-4 bg-white text-black font-medium text-lg uppercase tracking-wide rounded-full transition-all duration-300 hover:bg-gray-200 shadow-lg hover:shadow-xl"
              >
                CONTACT ME
              </RippleButton>

              {/* Contact form dropdown */}
              <AnimatePresence>
                {showContactForm && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-full max-w-md z-20"
                  >
                    <form
                      onSubmit={handleSubmit}
                      className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl"
                    >
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="heading-3 text-white">Send a message</h3>
                        <button
                          type="button"
                          onClick={() => setShowContactForm(false)}
                          className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
                          aria-label="Close"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 uppercase tracking-wide mb-2">
                            Your email
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 uppercase tracking-wide mb-2">
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Tell me about your project..."
                            required
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all resize-none"
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full px-6 py-3 bg-white text-black font-medium rounded-full hover:bg-gray-200 transition-all duration-300"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Social Links */}
            <div className="flex gap-6 mb-4 md:mb-0">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-white text-sm uppercase tracking-wide hover:text-gray-400 transition-colors duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;