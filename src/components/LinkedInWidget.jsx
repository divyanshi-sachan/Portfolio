import { motion, AnimatePresence } from "motion/react";

const LinkedInWidget = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
          >
            <div className="bg-gray-900/95 backdrop-blur-md rounded-lg border border-gray-700 shadow-2xl p-6 max-w-sm w-full mx-4">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-white font-semibold text-lg flex items-center">
                  <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Content */}
              <div className="bg-gray-800/50 rounded-lg p-4 min-h-[200px]">
                <div className="space-y-4">
                  {/* Profile Header */}
                  <div className="flex items-center space-x-4">
                    <img 
                      src="https://media.licdn.com/dms/image/D4D03AQHhHhHhHhHhHh/profile-displayphoto-shrink_800_800/0/1234567890?e=1234567890&v=beta&t=1234567890"
                      alt="Divyanshi Sachan"
                      className="w-16 h-16 rounded-full border-2 border-gray-600"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/64x64/3B82F6/FFFFFF?text=DS';
                      }}
                    />
                    <div>
                      <h4 className="text-white font-semibold text-lg">Divyanshi Sachan</h4>
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-blue-500 text-white">
                        Full Stack Developer
                      </span>
                    </div>
                  </div>
                  
                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">500+</div>
                      <div className="text-gray-400 text-sm">Connections</div>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">4+</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">20+</div>
                      <div className="text-gray-400 text-sm">Projects</div>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">15+</div>
                      <div className="text-gray-400 text-sm">Technologies</div>
                    </div>
                  </div>
                  
                  {/* Skills Section */}
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-2">Key Skills</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">React</span>
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Node.js</span>
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">JavaScript</span>
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">TypeScript</span>
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">MongoDB</span>
                      <span className="bg-orange-500/20 text-orange-300 px-2 py-1 rounded text-xs">AWS</span>
                    </div>
                  </div>
                  
                  {/* Status */}
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-center">
                      <div className="text-sm text-gray-400 mb-1">Status</div>
                      <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                        Available for opportunities
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-4 text-center">
                <a
                  href="https://linkedin.com/in/divyanshi-sachan-758b29287"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-200"
                >
                  View Full Profile →
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default LinkedInWidget;
