import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef } from "react";

const CodeforcesWidget = ({ isOpen, onClose }) => {
  const widgetRef = useRef();

  useEffect(() => {
    if (isOpen && widgetRef.current) {
      // Clear previous content
      widgetRef.current.innerHTML = '';
      
      // Create and append the script
      const script = document.createElement("script");
      script.src = "https://codeforces.com/userwidget?handle=Divyanshi_sachan";
      script.async = true;
      widgetRef.current.appendChild(script);
    }
  }, [isOpen]);

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
                  <svg className="w-5 h-5 mr-2 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.5 7.5A1.5 1.5 0 0 1 6 9v10.5A1.5 1.5 0 0 1 4.5 21h-3C.673 21 0 20.327 0 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9 0A1.5 1.5 0 0 1 15 9v10.5a1.5 1.5 0 0 1-1.5 1.5h-3C9.673 21 9 20.327 9 19.5V9c0-.828.673-1.5 1.5-1.5h3zm9 0A1.5 1.5 0 0 1 24 9v10.5a1.5 1.5 0 0 1-1.5 1.5h-3c-.827 0-1.5-.673-1.5-1.5V9c0-.828.673-1.5 1.5-1.5h3z"/>
                  </svg>
                  Codeforces Profile
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
              
              {/* Widget Container */}
              <div className="bg-white rounded-lg overflow-hidden min-h-[200px] flex items-center justify-center">
                <div ref={widgetRef} className="w-full"></div>
              </div>
              
              {/* Footer */}
              <div className="mt-4 text-center">
                <a
                  href="https://codeforces.com/profile/Divyanshi_sachan"
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

export default CodeforcesWidget;
