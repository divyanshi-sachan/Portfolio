import { motion, AnimatePresence } from "motion/react";

const LeetCodeWidget = ({ isOpen, onClose }) => {
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
                  <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.049 4.594.637.637 0 0 0 .912.745l4.158-2.173 3.861-2.89a1.458 1.458 0 0 1 1.759.094l2.636 2.636a1.374 1.374 0 0 0 1.941 0l5.953-5.953a1.374 1.374 0 0 0 0-1.941L14.445.438A1.374 1.374 0 0 0 13.483 0zM9.35 14.862a.637.637 0 0 0-.912-.745l-4.158 2.173-3.861 2.89a1.458 1.458 0 0 1-1.759-.094L.439 13.483a1.374 1.374 0 0 0 0 1.941l5.953 5.953a1.374 1.374 0 0 0 1.941 0l2.636-2.636a1.458 1.458 0 0 1 1.759-.094l3.861 2.89 4.158 2.173a.637.637 0 0 0 .912-.745 5.266 5.266 0 0 0-1.049-4.594L16.884 6.226l-3.854-4.126a1.374 1.374 0 0 0-.961-.438z"/>
                  </svg>
                  LeetCode Profile
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
                    <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.049 4.594.637.637 0 0 0 .912.745l4.158-2.173 3.861-2.89a1.458 1.458 0 0 1 1.759.094l2.636 2.636a1.374 1.374 0 0 0 1.941 0l5.953-5.953a1.374 1.374 0 0 0 0-1.941L14.445.438A1.374 1.374 0 0 0 13.483 0zM9.35 14.862a.637.637 0 0 0-.912-.745l-4.158 2.173-3.861 2.89a1.458 1.458 0 0 1-1.759-.094L.439 13.483a1.374 1.374 0 0 0 0 1.941l5.953 5.953a1.374 1.374 0 0 0 1.941 0l2.636-2.636a1.458 1.458 0 0 1 1.759-.094l3.861 2.89 4.158 2.173a.637.637 0 0 0 .912-.745 5.266 5.266 0 0 0-1.049-4.594L16.884 6.226l-3.854-4.126a1.374 1.374 0 0 0-.961-.438z"/>
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Divyanshi Sachan</h4>
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-yellow-500 text-white">
                        LeetCode User
                      </span>
                    </div>
                  </div>
                  
                  {/* LeetCard SVG */}
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-2 mb-3">Profile Stats</div>
                    <div className="flex justify-center">
                      <img 
                        src="https://leetcard.jacoblin.cool/divyanshi_sachan?theme=dark&font=baloo&ext=activity"
                        alt="LeetCode Profile Card"
                        className="w-full h-auto rounded-lg"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <div className="hidden text-center text-gray-400">
                        <svg className="w-16 h-16 mx-auto mb-2 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.049 4.594.637.637 0 0 0 .912.745l4.158-2.173 3.861-2.89a1.458 1.458 0 0 1 1.759.094l2.636 2.636a1.374 1.374 0 0 0 1.941 0l5.953-5.953a1.374 1.374 0 0 0 0-1.941L14.445.438A1.374 1.374 0 0 0 13.483 0zM9.35 14.862a.637.637 0 0 0-.912-.745l-4.158 2.173-3.861 2.89a1.458 1.458 0 0 1-1.759-.094L.439 13.483a1.374 1.374 0 0 0 0 1.941l5.953 5.953a1.374 1.374 0 0 0 1.941 0l2.636-2.636a1.458 1.458 0 0 1 1.759-.094l3.861 2.89 4.158 2.173a.637.637 0 0 0 .912-.745 5.266 5.266 0 0 0-1.049-4.594L16.884 6.226l-3.854-4.126a1.374 1.374 0 0 0-.961-.438z"/>
                        </svg>
                        <p>LeetCode stats unavailable</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">150+</div>
                      <div className="text-gray-400 text-sm">Problems Solved</div>
                    </div>
                    
                    <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-white">2+</div>
                      <div className="text-gray-400 text-sm">Years Active</div>
                    </div>
                  </div>
                  
                  {/* Skills Section */}
                  <div className="bg-gray-700/50 rounded-lg p-3">
                    <div className="text-sm text-gray-400 mb-2">Problem Categories</div>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">Easy</span>
                      <span className="bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded text-xs">Medium</span>
                      <span className="bg-red-500/20 text-red-300 px-2 py-1 rounded text-xs">Hard</span>
                      <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">Arrays</span>
                      <span className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">Strings</span>
                      <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs">DP</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="mt-4 text-center">
                <a
                  href="https://leetcode.com/u/divyanshi_sachan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 text-sm transition-colors duration-200"
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

export default LeetCodeWidget;
