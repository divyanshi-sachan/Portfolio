import { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectShowcase = ({ project, onClose }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Prevent body scroll when showcase is open
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Safety check for project data
  if (!project) {
    return null;
  }

  const handleBackdropClick = (e) => {
    if (e.target === containerRef.current) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        ref={containerRef}
        className="fixed inset-0 z-50 bg-white"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
          {/* Background Image - Full Hero Section */}
          <div className="absolute inset-0">
            <img
              src="/assets/hero.jpg"
              alt="Background"
              className="w-full h-full object-cover object-[center_200%] scale-110"
            />
            {/* Dark overlay for better text visibility */}
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-white bg-opacity-20 rounded-full hover:bg-opacity-30 transition-all duration-300"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Main Content */}
          <div className="relative z-10 h-full flex items-start justify-center px-4 md:px-8 lg:px-16 pt-8">
            <div className="max-w-7xl mx-auto w-full relative">
              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start relative">
            
            {/* Left Side - Text Content */}
            <motion.div
              className="space-y-6 relative"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Back Arrow */}
              <motion.div
                className="mb-6 relative"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <svg
                  className="w-8 h-8 text-white cursor-pointer hover:text-gray-300 transition-colors duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  onClick={onClose}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </motion.div>

              {/* Project Title */}
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-none"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  fontWeight: 900,
                  letterSpacing: "-0.02em",
                  lineHeight: "0.9"
                }}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {project.title.toUpperCase()}
              </motion.h1>

              {/* Project Description */}
              <motion.div
                className="space-y-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <p className="text-base md:text-lg text-white leading-relaxed max-w-lg">
                  {project.description}
                </p>
                
                {project.subDescription && (
                  <div className="space-y-3">
                    {project.subDescription.slice(0, 2).map((item, index) => (
                      <p key={index} className="text-sm text-gray-300 leading-relaxed">
                        {item}
                      </p>
                    ))}
                  </div>
                )}
              </motion.div>

              {/* Separator Line */}
              <motion.div
                className="w-full h-px bg-gray-600"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />

              {/* Role & Awards */}
              <motion.div
                className="space-y-2"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  ROLE: UI/UX, FRONTEND AND BACKEND DEVELOPER
                </p>
                <p className="text-sm text-gray-400 uppercase tracking-wider">
                  01 AWARDS
                </p>
              </motion.div>
            </motion.div>

            {/* Right Side - Visual Content */}
            <motion.div
              className="flex justify-center lg:justify-end relative"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative w-full max-w-md lg:max-w-lg">
                
                {/* Main Blue Branding Card */}
                <motion.div
                  className="relative bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-6 shadow-2xl mb-4"
                  initial={{ scale: 0.8, rotateY: -15 }}
                  animate={{ scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Brand Logo */}
                  <div className="text-center mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {project.title.substring(0, 4).toUpperCase()}
                    </h2>
                    <p className="text-blue-200 text-sm">All-in-one solution</p>
                  </div>

                  {/* Platform Buttons */}
                  <div className="grid grid-cols-2 gap-3">
                    {["User App", "Merchant App", "Agent App", "Web Platform", "Admin Panel"].map((platform, index) => (
                      <motion.button
                        key={platform}
                        className="px-4 py-3 bg-white bg-opacity-10 rounded-lg text-white text-sm font-medium hover:bg-opacity-20 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {platform}
                      </motion.button>
                    ))}
                  </div>

                  {/* Floating Elements */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                      style={{
                        left: `${20 + i * 12}%`,
                        top: `${30 + i * 8}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </motion.div>

                {/* Separate Mobile Mockup */}
                <motion.div
                  className="relative w-32 h-64 bg-white rounded-2xl shadow-xl border-2 border-gray-200 mx-auto"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="p-3 h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-xs font-semibold text-black">9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                        <div className="w-3 h-1.5 bg-black rounded-sm"></div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-3">
                      <div className="text-xs font-semibold text-black">Hello Ronald</div>
                      <div className="text-xs text-gray-600">Welcome Back!</div>
                    </div>

                    {/* Balance Card */}
                    <div className="bg-blue-600 rounded-lg p-2 mb-3">
                      <div className="text-white text-xs mb-1">Your wallet Balance</div>
                      <div className="text-white font-bold text-sm">$23,685.00</div>
                    </div>

                    {/* Action Icons */}
                    <div className="grid grid-cols-4 gap-2 mb-4">
                      {["Add Money", "Send", "Payment", "Card"].map((action, index) => (
                        <div key={action} className="text-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-1"></div>
                          <div className="text-xs text-gray-600">{action}</div>
                        </div>
                      ))}
                    </div>

                    {/* Other Services */}
                    <div className="mb-3">
                      <div className="text-xs font-semibold text-black mb-2">Other Services</div>
                      <div className="grid grid-cols-3 gap-1">
                        {["Recharge", "Bill Pay", "Bank Transfer", "Savings", "Donation", "Electricity"].map((service) => (
                          <div key={service} className="text-center">
                            <div className="w-6 h-6 bg-gray-200 rounded-full mx-auto mb-1"></div>
                            <div className="text-xs text-gray-600">{service}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Payment Offers */}
                    <div>
                      <div className="text-xs font-semibold text-black mb-2">Payment Offers</div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">QuickBank</span>
                          <span className="text-green-600 font-semibold">10% off</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-gray-600">Boltshift</span>
                          <span className="text-green-600 font-semibold">10% off</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl -z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>
              </motion.div>
              </div>
            </div>

            {/* Bottom Right CTA */}
            <motion.div
              className="absolute bottom-8 right-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300 cursor-pointer">
                <span className="text-sm uppercase tracking-wide">see case</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </motion.div>
          </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectShowcase;
