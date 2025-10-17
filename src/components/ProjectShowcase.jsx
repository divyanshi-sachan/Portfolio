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
        className="fixed inset-0 z-50 bg-[#B8B5B0] overflow-y-auto"
        onClick={handleBackdropClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Close Button */}
        <motion.button
          onClick={onClose}
          className="fixed top-6 right-6 z-20 p-3 bg-black/10 backdrop-blur-sm rounded-full hover:bg-black/20 transition-all duration-300 border border-black/20"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <svg
            className="w-6 h-6 text-black"
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
        </motion.button>

        {/* Main Content */}
        <div className="min-h-screen py-8 px-4 md:px-8 lg:px-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Header Section */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Back Button */}
              <motion.button
                onClick={onClose}
                className="flex items-center gap-2 text-black hover:text-gray-600 transition-colors duration-300 mb-8"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="text-sm font-medium">Back to Projects</span>
              </motion.button>

              {/* Project Title */}
              <motion.h1
                className="heading-1 mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {project.title}
              </motion.h1>

              {/* Project Description */}
              <motion.p
                className="body-large text-gray-700 max-w-3xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {project.description}
              </motion.p>
            </motion.div>

            {/* Project Image */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="relative rounded-2xl overflow-hidden border border-black/20 shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-all duration-300" />
              </div>
            </motion.div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  {/* Project Details */}
                  <div>
                    <h2 className="heading-3 mb-6">Project Overview</h2>
                    <div className="space-y-4">
                      {project.subDescription?.map((detail, index) => (
                        <motion.p
                          key={index}
                          className="body-text text-gray-700 leading-relaxed"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                        >
                          {detail}
                        </motion.p>
                      ))}
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <h2 className="heading-3 mb-6">Technologies Used</h2>
                    <motion.div
                      className="flex flex-wrap gap-3"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      {project.tags?.map((tag, index) => (
                        <motion.span
                          key={tag.id}
                          className="px-4 py-2 bg-black/10 rounded-full text-sm font-medium text-black border border-black/20 hover:bg-black/20 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.9 + index * 0.1,
                            type: "spring",
                            stiffness: 200
                          }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {tag.name}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  {/* Project Info Card */}
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-black/20">
                    <h3 className="heading-3 mb-4">Project Details</h3>
                    <div className="space-y-4">
                      <div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Category</span>
                        <p className="body-text text-black mt-1">Full Stack Development</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Duration</span>
                        <p className="body-text text-black mt-1">3-6 months</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600 uppercase tracking-wide">Status</span>
                        <p className="body-text text-black mt-1">Completed</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <motion.button
                      className="w-full px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Live Demo
                    </motion.button>
                    
                    <motion.button
                      className="w-full px-6 py-3 bg-white/50 border border-black/20 text-black font-medium rounded-full hover:bg-white/70 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.9 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Source Code
                    </motion.button>
                  </div>

                  {/* Related Projects */}
                  <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-black/20">
                    <h3 className="heading-3 mb-4">Related Projects</h3>
                    <div className="space-y-3">
                      {["AI PDF Reader", "Content Repurposer", "Mojito Landing Page"].map((relatedProject, index) => (
                        <motion.div
                          key={relatedProject}
                          className="p-3 rounded-lg hover:bg-black/5 transition-all duration-300 cursor-pointer"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 1.0 + index * 0.1 }}
                          whileHover={{ x: 5 }}
                        >
                          <p className="text-sm font-medium text-black">{relatedProject}</p>
                          <p className="text-xs text-gray-600">View Project</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectShowcase;